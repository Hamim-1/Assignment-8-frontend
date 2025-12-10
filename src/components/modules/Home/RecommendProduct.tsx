import ProductCard from '@/components/shared/ProductCard';

const RecommendProduct = () => {
    const products = [
        {
            name: 'HP Pavilion 15',
            price: '$1200.00',
            Dprice: '770.00',
            review: 70,
            img: 'img/laptop/laptop-3.png'
        },
        {
            name: 'SAMSUNG 27 Curved',
            price: '$550.00',
            Dprice: '470.00',
            review: 50,
            img: 'img/monitor/hd-monitor.png'
        },
        {
            name: 'Beats Headphones',
            price: '$120.00',
            Dprice: '70.00',
            review: 90,
            img: 'img/headphone/headphone-3.png'
        },
        {
            name: 'Beats Headphones',
            price: '$120.00',
            Dprice: '70.00',
            review: 90,
            img: 'img/headphone/headphone-3.png'
        },
        {
            name: 'HP Pavilion 15',
            price: '$1200.00',
            Dprice: '770.00',
            review: 70,
            img: 'img/laptop/laptop-3.png'
        },
        {
            name: 'SAMSUNG 27 Curved',
            price: '$550.00',
            Dprice: '470.00',
            review: 50,
            img: 'img/monitor/hd-monitor.png'
        },
        {
            name: 'Beats Headphones',
            price: '$120.00',
            Dprice: '70.00',
            review: 90,
            img: 'img/headphone/headphone-3.png'
        },
        {
            name: 'Beats Headphones',
            price: '$120.00',
            Dprice: '70.00',
            review: 90,
            img: 'img/headphone/headphone-3.png'
        }
    ]
    return (
        <section>
            <div className="custom-container my-16">
                <p className="text-2xl md:text-3xl font-semibold my-10">Recomended for you</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="new-arrival-section">

                    {
                        products.map((product, i) => (
                            <ProductCard product={product} key={i} />
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default RecommendProduct;