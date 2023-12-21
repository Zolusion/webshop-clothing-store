import Image from "next/image";
import React from 'react';

const about = [
    {
        title: "About Us",
        descriptionOne: "Welcome to SolmazFashion, where passion meets style. We are more than just a team of fashion enthusiasts; we are a community-driven brand dedicated to making high-quality fashion accessible to everyone.",
        descriptionTwo: "At SolmazFashion, we believe in the simplicity of online shopping. We strive to provide an easy, convenient, and enjoyable experience for our customers, ensuring that fashion is just a click away.",
        descriptionThree: "Our inspiration comes from the vibrant and diverse community that surrounds us. Every day, we are motivated by the stories and styles of our customers, shaping the identity of SolmazFashion."
    }
];

const AboutInfo = () => {
    return (
        <div className='bg-white max-w-7xl 2xl:max-w-[1800px] mx-auto'>
            <div className="py-8 px-6 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-72 overflow-hidden rounded-lg lg:h-full">
                        <Image
                            className="object-cover"
                            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="About Image"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </div>

                    <div className="lg:py-6 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{about[0].title}</h2>
                        <p className="text-gray-600 leading-7">{about[0].descriptionOne}</p>
                        <p className="mt-4 text-gray-600 leading-7">{about[0].descriptionTwo}</p>
                        <p className="mt-4 text-gray-600 leading-7">{about[0].descriptionThree}</p>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="px-6 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-black">Quality</h3>
                                <p className="text-gray-600">We are committed to providing our customers with high-quality products and services.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-black">Customer Service</h3>
                                <p className="text-gray-600">We strive to provide exceptional customer service to our customers.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-black">Community</h3>
                                <p className="text-gray-600">We are a welcoming and inclusive community of fashion enthusiasts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="px-6 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Recommanded Clothing Fabrics</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <Image src="/about-images/leather.jpeg" alt="Clothing Fabric 1" width={500} height={300} />
                        <Image src="/about-images/cotton.jpeg" alt="Clothing Fabric 2" width={500} height={300} />
                        <Image src="/about-images/tencel.jpeg" alt="Clothing Fabric 3" width={500} height={300} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;
