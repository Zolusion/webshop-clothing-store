import Image from 'next/image';
import React from 'react';

const FashionTrendsPage = () => {
    const hijabTrends = [
        {
            title: 'Elegant Floral Hijab',
            image: '/fashiontrends-image/fashiontrend-image1.jpeg',
            accessories: [
                {
                    name: "Melleson eyewear",
                    src: "https://www.bol.com/nl/nl/p/melleson-eyewear-kinderzonnebril-lenny-3-7-jaar-maat-m-roze/9300000040152093/?Referrer=ADVNLSN000000PINSHOPPRODPINSPROSTAPUSH9300000040152093&utm_source=pinterest&utm_medium=shop&utm_campaign=productpins&utm_content=9300000040152093",
                },
                {
                    name: "Elena Conti",
                    src: "https://youtique.nl/products/elena-conti-jurk?variant=44612309975306",
                },
                {
                    name: "Bullboxer heels",
                    src: "https://www.bol.com/nl/nl/p/bullboxer-heel-pump-female-pink-41-pumps/9300000144462241/?Referrer=ADVNLSN000000PINSHOPPRODPINSPROSTAPUSH9300000144462241&utm_source=pinterest&utm_medium=shop&utm_campaign=productpins&utm_content=9300000144462241",
                }
            ],
        },
        {
            title: 'Casual Everyday Hijab',
            image: '/fashiontrends-image/fashiontrend-image2.jpeg',
            accessories: [
                {
                    name: "Bucket Hat Teddy Beige",
                    src: "https://le-olive.com/products/bucket-hat-teddy-beige?_pos=10&_sid=1679b7a05&_ss=r&variant=43949595427038&utm_source=pinterest&utm_medium=cpc&utm_campaign=hats&pp=0&epik=dj0yJnU9ekVSWDE1N1RsWU5INUt4dFNPRlBDb0FISEpDMWNXcFQmcD0wJm49d3FJZTF0bVA4aV9DVWk3VkZTQ2ZCQSZ0PUFBQUFBR1Y1aDZZ",
                },
                {
                    name: "White nylon shopper",
                    src: "https://www.sissy-boy.com/dames/witte-nylon-shopper-00053138-171.html?channable=03d2fc65616e0032303030303832353330303131fe&utm_campaign=shopping&utm_content=00053138-171&utm_source=pinterest&utm_medium=productfeed&utm_term",
                },
                {
                    name: "KLARA HELLQVIST",
                    src: "https://www.veromoda.com/nl-nl/product/10288417_921/loose-fit-high-rise-broeken",
                },
                {
                    name: "Loafers",
                    src: "https://www.asos.com/nl/asos-design/asos-design-loafers-met-dikke-zool-van-beige-imitatieleer/prd/204294717?affid=26760",
                }
            ],
        },
        {
            title: 'Bold Color Block Hijab',
            image: '/fashiontrends-image/fashiontrend-image3.jpeg',
            accessories: [
                {
                    name: "Studio Amaya Blazer",
                    src: "https://www.omoda.nl/dames/blazers/paarse-studio-amaya-blazer-noa-blazer-236854.html?utm_source=pinterest-organisch&utm_medium=cpc&utm_campaign=dames-blazers-studio-amaya&utm_content=236854",
                },
                {
                    name: "Cat eye sunglasses",
                    src: "https://www.asos.com/nl/topshop/topshop-oversized-hoekige-cat-eye-zonnebril-in-limoengroen/prd/204329694?affid=26760",
                },
                {
                    name: "Vintage tortoise",
                    src: "https://www.asos.com/nl/aire/aire-fornax-ovale-zonnebril-in-vintage-tortoise/prd/204839495?affid=26760",
                },
                {
                    name: "Jake's collection jacket",
                    src: "https://www.peek-cloppenburg.nl/nl/p/jakes-woman-collection-overhemdblouse-met-doorknoopsluiting-geel-1754770?utm_medium=social-branding&utm_source=pinterest&utm_campaign=%7Bcampaignid%7D&utm_content=%7Badgroupid%7D&utm_term=%7Badid%7D",
                },
                {
                    name: "Firenze crossbody bag",
                    src: "https://www.duifhuizen.nl/firenze-crossbody-tas-white-016508-wit",
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Discover the Latest Hijab Fashion Trends</h1>
                <p className="text-gray-600 text-center mb-8">Explore our curated collection of hijab styles for every occasion.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hijabTrends.map((trend, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-md mb-4 transition-transform transform hover:scale-105">
                            <Image
                                src={trend.image}
                                alt={`Fashion Trend ${index + 1}`}
                                className="object-cover mb-4 rounded-md"
                                width={500}
                                height={500}
                                quality={100}
                            />
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{trend.title}</h2>
                            {trend.accessories && (
                                <div className="text-gray-600 mt-2 flex flex-col">
                                    {trend.accessories.map((accessory, accessoryIndex) => (
                                        <a key={accessoryIndex} href={accessory.src} className="text-gray-600 mt-2 underline">
                                            {accessory.name}
                                        </a>
                                        
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FashionTrendsPage;