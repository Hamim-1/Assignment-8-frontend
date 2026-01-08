import TopRankingCard from "@/components/shared/TopRankingProductCard";
import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/admin";

const categories = ["watch", "phone", "laptop", "headphone"];


const TopRanking = async () => {
    const topRankingSections = ["Watches", "Phones", "Laptops", "Headphones"];

    const topRankingProduct = await Promise.all(
        categories.map(async (category) => {
            const result = await getProducts({ category, limit: 3 });
            return result?.data || result;
        })
    );

    const isError = () => {
        return topRankingProduct.find(product => product?.error)
    }


    return (
        <section>
            <div className="custom-container mt-10">
                <p className="text-2xl md:text-3xl font-semibold">Top Ranking</p>

                <section
                    id="top-ranking-section"
                    className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-7 gap-6"
                >
                    {
                        isError() ? <p className="text-red-500">Something Went wrong!</p>
                            :


                            topRankingSections.map((section, i) => (
                                <div className="flex flex-col space-y-5 w-full" key={i}>
                                    <p className="text-lg font-semibold">{section}</p>
                                    {topRankingProduct[i].map((product: IProduct, j: number) => (
                                        <TopRankingCard product={product} key={j} />
                                    ))}
                                </div>
                            ))

                    }
                </section>
            </div>
        </section>
    );
};

export default TopRanking;
