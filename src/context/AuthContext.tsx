"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Role } from '@/types/admin';
import { getCookie, deleteCookie } from '@/services/auth/tokenHandlers';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
    isLoading: boolean;
    hasRole: (role: Role) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const validateToken = async () => {
            try {
                const token = await getCookie("accessToken");

                if (!token) {
                    setUser(null);
                    setIsLoading(false);
                    return;
                }

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                });

                if (res.ok) {
                    const result = await res.json();
                    setUser(result.data);
                } else {
                    setUser(null);
                    await deleteCookie("accessToken");
                    await deleteCookie("refreshToken");
                }
            } catch (error) {
                console.error('Token validation failed:', error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        validateToken();
    }, []);

    const logout = async () => {
        try {
            await deleteCookie("accessToken");
            await deleteCookie("refreshToken");
            setUser(null);
            router.push('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const hasRole = (role: Role) => {
        return user?.role === role;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout, isLoading, hasRole }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}