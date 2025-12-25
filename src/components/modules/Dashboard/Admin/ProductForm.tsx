'use client';

import React, { useState } from 'react';
import { Product } from '@/types/admin';

interface ProductFormProps {
    product?: Product | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
    const [formData, setFormData] = useState<Omit<Product, 'id'>>({
        title: product?.title || '',
        price: product?.price || 0,
        description: product?.description || '',
        category: product?.category || '',
        image: product?.image || '',
        quantity: product?.quantity || 0
    });

    const handleSubmit = () => {

        if (formData.title && formData.price && formData.description && formData.category && formData.quantity) {
            if (!product && !formData.image) {
                alert('Please provide an image URL');
                return;
            }
        } else {
            alert('Please fill all required fields');
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Product Name</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Price</label>
                    <input
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Stock</label>
                    <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    rows={3}
                />
            </div>


            {!product && (
                <div>
                    <label className="block text-sm font-medium mb-1">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setFormData({ ...formData, image: file });
                            }
                        }}
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
            )}
            <div className="flex gap-3 justify-end">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                    Cancel
                </button>
                <button onClick={handleSubmit} className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">
                    {product ? 'Update' : 'Add'} Product
                </button>
            </div>
        </div>
    );
};

export default ProductForm;