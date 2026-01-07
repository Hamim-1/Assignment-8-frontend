'use client';

import React, { useActionState, useEffect, useState } from 'react';
import { IProduct } from '@/types/admin';
import { addProduct } from '@/services/product/add';
import { updateProduct } from '@/services/product/update';
import toast from 'react-hot-toast';

interface ProductFormProps {
    product?: IProduct | null;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, setIsOpen }) => {
    const [formData, setFormData] = useState<Omit<IProduct, '_id'>>({
        title: product?.title || '',
        price: product?.price || 0,
        description: product?.description || '',
        category: product?.category || '',
        image: product?.image || '',
        quantity: product?.quantity || 0,
        discount: product?.discount || 0,
    });
    const [state, formAction, isPending] = useActionState(product ? updateProduct : addProduct, null);

    const getFieldError = (fieldName: string) => {

        if (state && state.errors) {
            const error = state.errors.find((err: any) => err.field === fieldName);
            return error?.message;

        } else {
            return null;
        }
    }


    useEffect(() => {
        if (state?.success) {
            toast.success(state?.message);
            setIsOpen(false)
        }

        if (state?.message && !state.success) {
            toast.error(state.message);
            setIsOpen(false)
        }
    }, [state]);

    return (
        <form className="space-y-4" action={formAction}>
            <input type="hidden" name="product" value={JSON.stringify(product)} />
            <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input

                    name='title'
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border focus:border-2 rounded-lg px-3 py-2 border-gray-400 focus:border-primary focus:outline-none"
                />
                {
                    getFieldError("title") && <p className="text-red-500 text-sm">{getFieldError("title")}</p>
                }
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Price</label>
                    <input
                        name='price'
                        type="number"
                        step="0.01"
                        value={formData.price}

                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                        className="w-full border focus:border-2 rounded-lg px-3 py-2 border-gray-400 focus:border-primary focus:outline-none"
                    />
                    {
                        getFieldError("price") && <p className="text-red-500 text-sm">{getFieldError("price")}</p>
                    }

                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Quantity</label>
                    <input
                        name='quantity'
                        type="number"
                        value={formData.quantity}

                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                        className="w-full border focus:border-2 rounded-lg px-3 py-2 border-gray-400 focus:border-primary focus:outline-none"
                    />
                    {
                        getFieldError("quatity") && <p className="text-red-500 text-sm">{getFieldError("quatity")}</p>
                    }

                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Discount</label>
                    <input
                        name='discount'
                        type="number"
                        step="1"
                        value={formData.discount}

                        onChange={(e) => setFormData({ ...formData, discount: parseInt(e.target.value) || 0 })}
                        className="w-full border focus:border-2 rounded-lg px-3 py-2 border-gray-400 focus:border-primary focus:outline-none"
                    />
                    {
                        getFieldError("discount") && <p className="text-red-500 text-sm">{getFieldError("discount")}</p>
                    }

                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <input
                        name='category'
                        type="text"
                        value={formData.category}

                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full border focus:border-2 rounded-lg px-3 py-2 border-gray-400 focus:border-primary focus:outline-none"
                    />
                    {
                        getFieldError("category") && <p className="text-red-500 text-sm">{getFieldError("category")}</p>
                    }

                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    name='description'
                    value={formData.description}

                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full border focus:border-2 rounded-lg px-3 py-2 border-gray-400 focus:border-primary focus:outline-none"
                    rows={3}
                />
                {
                    getFieldError("description") && <p className="text-red-500 text-sm">{getFieldError("description")}</p>
                }

            </div>


            {!product && (
                <div>
                    <label className="block text-sm font-medium mb-1">Image</label>
                    <input
                        name='file'
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setFormData({ ...formData, image: file });
                            }
                        }}
                        className="w-full border focus:border-2 rounded-lg px-3 py-2 border-gray-400 focus:border-primary focus:outline-none"
                    />
                    {
                        getFieldError("file") && <p className="text-red-500 text-sm">{getFieldError("file")}</p>
                    }
                </div>
            )}
            <div className="flex gap-3 justify-end">
                <button disabled={isPending} className="px-4 py-2 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => setIsOpen(false)}>
                    Cancel
                </button>

                {
                    isPending ?
                        <button className="px-4 py-2 bg-primary/50 text-white rounded-lg  cursor-pointer">
                            {product ? 'Updating' : 'Creating'} Product..
                        </button>
                        :
                        <button type='submit' className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 cursor-pointer">
                            {product ? 'Update' : 'Add'} Product
                        </button>
                }
            </div>
        </form>
    );
};

export default ProductForm;