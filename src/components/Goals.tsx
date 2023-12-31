import Image from 'next/image'
import React from 'react'
import AchievementsData from '@/content/AchievementsData.json'

const Goals = () => {
    return (
        <div className='bg-white'>
            <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 2xl:text-4xl">
                        <span className="block">Our Goals</span>
                    </h2>
                </div>
                <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    <div className="group relative">
                        <div className="relative h-80 2xl:h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <Image
                                src="/worldwide-outreach-image/worldwidebrand.jpeg"
                                alt="Our Goals"
                                className="h-full w-full object-cover object-center"
                                fill={true}
                            />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500 2xl:text-lg">
                            <p>
                                <span className="absolute inset-0" />
                                Worldwide Brand
                            </p>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">
                            The mission is to make our brand stand out. We want to be a part of the future of fashion.
                        </p>
                    </div>
                    <div className="group relative">
                        <div className="relative h-80 2xl:h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <Image
                                src="/worldwide-outreach-image/collabs-and-creativity.jpeg"
                                alt="Our Goals"
                                className="h-full w-full object-cover object-center"
                                fill={true}
                            />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500 2xl:text-lg">
                            <p>
                                <span className="absolute inset-0" />
                                Collaboration and Creativity
                            </p>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">
                            We love to collaborate with other brand owners and creatives. Helping each other is the best way to success
                        </p>
                    </div>
                    <div className="group relative">
                        <div className="relative h-80 2xl:h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <Image
                                src="/worldwide-outreach-image/innovation.jpeg"
                                alt="Our Goals"
                                className="h-full w-full object-cover object-center"
                                fill={true}
                            />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500 2xl:text-lg">
                            <p>
                                <span className="absolute inset-0" />
                                Innovation
                            </p>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">
                            We are always open to new ideas. improvement is at the heart of everything we do.
                        </p>
                    </div>
                </div>
                <section className="container mx-auto my-8 max-w-7xl lg:max-w-[2200px]">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 py-12">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl font-bold mb-4 2xl:text-4xl text-gray-800">Results</h1>
                            <hr className="mb-4" />
                            <ul className="text-gray-800 mb-4 2xl:text-[17px]">
                                {AchievementsData.map((achievement, index) => (
                                    <React.Fragment key={index}>
                                        <li className="mb-4 text-gray-800">{achievement}</li>
                                        <hr className="mb-4" />
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center h-[500px] relative">
                            <Image
                                src="/worldwide-outreach-image/results.jpeg"
                                alt="Image Description"
                                layout="fill"
                                sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                                className='rounded-lg object-cover w-full h-full'
                            />

                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <div className="text-gray-800 text-3xl font-bold px-4 text-center 2xl:text-3xl">
                                    his overarching goal encompasses the desire to use fashion as a powerful medium for self-expression, creativity, and individuality.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Goals