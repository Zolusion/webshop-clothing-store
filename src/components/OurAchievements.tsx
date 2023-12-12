import Image from 'next/image'
import React from 'react'

const achievementsData = [
    {
        id: 1,
        title: "60000+",
        description: "Active Members",
        imageSrc: "/achievements-image/active-member.jpeg"
    },
    {
        id: 2,
        title: "100+",
        description: "Influencers",
        imageSrc: "/achievements-image/influencer-model.jpeg"
    },
    {
        id: 3,
        title: "10+",
        description: "Countries",
        imageSrc: "/achievements-image/country.jpeg"
    },
]

const achievementsList = [
    "We are proud of the efforts and contributions of our team members.",
    "We have consistently delivered exceptional results.",
    "Always looking for new and innovative ideas.",
    "We are always on the lookout for new and exciting projects.",
    "Never underestimate yourself to set your own goals and achievements. Do not be afraid to take steps towards your goals. Your success is our success.",
];

const OurAchievements = () => {
    return (
        <div className='bg-white'>
            <div className="max-w-7xl 2xl:max-w-[2200px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-[30px] 2xl:text-5xl text-black">
                    Our Achievements
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {achievementsData.map((item) => (
                        <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-52 2xl:h-80">
                                <Image
                                    className="w-full h-48 object-cover rounded-t-md"
                                    src={item.imageSrc}
                                    alt={item.title}
                                    fill={true}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 2xl:text-2xl">{item.title}</h3>
                                <p className="text-gray-400 2xl:text-lg">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <section className="container mx-auto my-8 max-w-7xl lg:max-w-[2200px]">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 py-12">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl font-bold mb-4 2xl:text-5xl text-gray-800">Results</h1>
                            <hr className="mb-4" />
                            <ul className="text-gray-800 mb-4 2xl:text-2xl">
                                {achievementsList.map((achievement, index) => (
                                    <React.Fragment key={index}>
                                        <li className="mb-4 text-gray-800">{achievement}</li>
                                        <hr className="mb-4" />
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center h-[500px] relative">
                            <Image
                                src="/achievements-image/achievement-pic.jpeg"
                                alt="Image Description"
                                layout="fill"
                                sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                                className='rounded-lg object-cover w-full h-full'
                            />

                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <div className="text-gray-800 text-3xl font-bold px-4 text-center 2xl:text-4xl">
                                    Achieving our goals is our passion and dedication to delivering exceptional results.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OurAchievements