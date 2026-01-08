import LoadingOverlay from '@/components/shared/Loading';
import ProductCard from '@/components/shared/ProductCard';
import { getProducts } from '@/lib/products';
import { IProduct } from '@/types/admin';

const RecommendProduct = async () => {
    const result = await getProducts({ limit: 8 });
    let products;
    if (!result?.error && result?.data) {
        products = result.data;
    } else if (result?.error) {
        return <div className='custom-container py-10'>
            <p className='text-red-500'>Something Went wrong</p>
        </div>
    }
    return (
        <section>
            <div className="custom-container my-16">
                <p className="text-2xl md:text-3xl font-semibold my-10">Recomended for you</p>
                {
                    products ?
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                            {
                                products.map((product: IProduct, i: number) => (
                                    <ProductCard product={product} key={i} />
                                ))
                            }

                        </div>
                        :
                        <LoadingOverlay />
                }
            </div>
        </section>
    );
};

export default RecommendProduct;