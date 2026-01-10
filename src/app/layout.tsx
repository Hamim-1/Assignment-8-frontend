import { Suspense } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import LoadingOverlay from '@/components/shared/Loading';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from '@/context/CartContext';
import { Geist, Geist_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Rafcart Ecommerce',
  description: 'Next js Ecommerce',
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <AuthProvider>
          <CartProvider>
            <Suspense fallback={
              <div className="h-screen flex justify-center items-center">
                <LoadingOverlay />
              </div>
            }>
              {children}
            </Suspense>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}