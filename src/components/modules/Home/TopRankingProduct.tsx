import TopRankingCard from "@/components/shared/TopRankingProductCard";

const TopRanking = () => {
    const topRankingProduct = [
        [
            {
                name: 'Apple Watch',
                price: '300.45',
                Dprice: '200.00',
                review: 120,
                img: 'img/watch/watch-1.png'
            },
            {
                name: 'Callie Smartwatch',
                price: '300.45',
                Dprice: '200.00',
                review: 120,
                img: 'img/watch/watch-2.png'
            },
            {
                name: 'Cruz Smartwatch',
                price: '300.45',
                Dprice: '200.00',
                review: 120,
                img: 'img/watch/watch-3.png'
            }
        ],
        [
            {
                name: 'Xiaomi Note 7',
                price: '320.00',
                Dprice: '220.00',
                review: 150,
                img: 'img/phone/phone-1.png'
            },
            {
                name: 'iPhone 11 max',
                price: '320.00',
                Dprice: '220.00',
                review: 150,
                img: 'img/phone/phone-2.png'
            },
            {
                name: 'Oppo poco f1',
                price: '320.00',
                Dprice: '220.00',
                review: 150,
                img: 'img/phone/phone-3.png'
            },
        ],
        [
            {
                name: 'Dell inspire 14',
                price: '1200.00',
                Dprice: '770.00',
                review: 70,
                img: 'img/laptop/laptop-1.png'
            },
            {
                name: 'HP Omen 13',
                price: '1200.00',
                Dprice: '770.00',
                review: 70,
                img: 'img/laptop/laptop-2.png'
            },
            {
                name: 'HP Pavilion 15',
                price: '1200.00',
                Dprice: '770.00',
                review: 70,
                img: 'img/laptop/laptop-3.png'
            },
        ],
        [
            {
                name: 'Bose Headphones',
                price: '95.00',
                Dprice: '75.00',
                review: 90,
                img: 'img/headphone/headphone-1.png'
            },
            {
                name: 'COWIN E7 Active',
                price: '110.00',
                Dprice: '90.00',
                review: 90,
                img: 'img/headphone/headphone-2.png'
            },
            {
                name: 'Beats Headphones',
                price: '90.00',
                Dprice: '70.00',
                review: 90,
                img: 'img/headphone/headphone-3.png'
            }

        ]
    ]
    const topRankingSections = [
        "Watchs",
        "Phones",
        "Laptops",
        "Headphones"
    ]
    return (
        <section>
            <div className="custom-container mt-10">

                <p className="text-2xl md:text-3xl font-semibold">Top Ranking</p>

                <section id="top-ranking-section"
                    className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-7 gap-6">

                    {
                        topRankingSections.map((section, i) => (
                            <div className="flex flex-col space-y-5 w-full" key={i}>
                                <p className="text-lg font-semibold">{section}</p>
                                {
                                    topRankingProduct[i].map((product, i) => (
                                        <TopRankingCard product={product} key={i} />
                                    ))
                                }
                            </div>
                        ))
                    }



                </section>

            </div>
        </section>
    );
};

export default TopRanking;