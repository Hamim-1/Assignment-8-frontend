// components/admin/ProductsTab.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { Product } from '@/types/admin';
import Modal from './Modal';
import ProductForm from './ProductForm';
import Image from 'next/image';
import toast from 'react-hot-toast';

const ProductsTab: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const products = [
        {
            id: 1,
            title: 'Wireless Headphones',
            price: 89.99,
            description: 'High-quality wireless headphones',
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200',
            quantity: 45
        },
        {
            id: 2,
            title: 'Smart Watch',
            price: 199.99,
            description: 'Feature-rich smartwatch',
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200',
            quantity: 23
        },
        {
            id: 3,
            title: 'Leather Backpack',
            price: 79.99,
            description: 'Durable leather backpack',
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200',
            quantity: 12
        },
        {
            id: 4,
            title: 'Running Shoes',
            price: 129.99,
            description: 'Comfortable running shoes',
            category: 'Sports',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200',
            quantity: 8
        },
    ];;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Products</h2>
                <button
                    onClick={() => { setEditingProduct(null); setIsModalOpen(true); }}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
                >
                    <Plus size={20} />
                    Add Product
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, i) => (
                    <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
                        <Image src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-3" width={50} height={30} />
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
                                className="flex-1 flex items-center justify-center gap-1 border border-primary text-primary px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                            >
                                <Edit2 size={16} />
                                Edit
                            </button>
                            <button
                                className="flex-1 flex items-center justify-center gap-1 border border-red-500 text-red-500 px-3 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => { setIsModalOpen(false); setEditingProduct(null); }}
                title={editingProduct ? 'Edit Product' : 'Add New Product'}
            >
                <ProductForm
                    product={editingProduct}
                />
            </Modal>
        </div>
    );
};

export default ProductsTab;