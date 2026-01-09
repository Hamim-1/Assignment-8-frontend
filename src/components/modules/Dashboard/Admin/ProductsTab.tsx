'use client';

import React, { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { IProduct } from '@/types/admin';
import Modal from './Modal';
import ProductForm from './ProductForm';
import Image from 'next/image';
import LoadingOverlay from '@/components/shared/Loading';
import ConfirmationPopup from './ConfirmationPopup';

const ProductsTab: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);
    const [deletingProduct, setDeletingProduct] = useState("");
    const [products, setProducts] = useState<IProduct[]>([]);
    const [page, setPage] = useState(1);
    const limit = 10;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?page=${page}&limit=${limit}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const result = await res.json();

                setProducts(result.data.data);
            } catch (err) {
                setError("Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page]);

    if (error) {
        return <h2 className='text-red-600 text-xl'>Something went wrong!</h2>
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Products</h2>
                <button
                    onClick={() => { setEditingProduct(null); setIsModalOpen(true); }}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 cursor-pointer"
                >
                    <Plus size={20} />
                    Add Product
                </button>
            </div>


            {
                loading ?
                    <div className='w-full flex justify-center items-center h-[50vh]'>
                        <LoadingOverlay />
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                        {products.map((product, i) => (
                            <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
                                <Image
                                    src={product.image as string}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-lg mb-3"
                                    width={400}
                                    height={192}
                                    placeholder="empty"
                                />

                                <h3 className="font-bold text-lg mb-1">{product.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-primary font-bold text-xl">${product.price}</span>
                                    <span className="text-sm text-gray-500">Stock: {product.quantity}</span>
                                </div>
                                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mb-3">
                                    {product.category}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => { setEditingProduct(product); setIsModalOpen(true); }}
                                        className="flex-1 flex items-center justify-center gap-1 border border-primary text-primary px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
                                    >
                                        <Edit2 size={16} />
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1 border border-red-500 text-red-500 px-3 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                                        onClick={() => {
                                            setDeletingProduct(product._id);
                                            setIsDeleteConfirmationOpen(true);
                                        }}
                                    >
                                        <Trash2 size={16} />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
            }

            <Modal
                isOpen={isModalOpen}
                onClose={() => { setIsModalOpen(false); setEditingProduct(null); }}
                title={editingProduct ? 'Edit Product' : 'Add New Product'}
            >
                <ProductForm
                    product={editingProduct}
                    setIsOpen={setIsModalOpen}
                />
            </Modal>

            {
                isDeleteConfirmationOpen &&
                <ConfirmationPopup
                    setIsOpen={setIsDeleteConfirmationOpen}
                    productId={deletingProduct}
                />
            }
        </div>
    );
};

export default ProductsTab;