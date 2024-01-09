import Image from "next/image";
import React from 'react';
import About from "../content/about.json";

const AboutInfo = () => {
    const aboutData = About.aboutInformation[0];
    const contentData = About.content[0];
    const clothingImages = About.clothingImages;

    return (
        <div className='bg-white max-w-7xl 2xl:max-w-[1800px] mx-auto'>
            <div className="py-8 px-6 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-72 overflow-hidden rounded-lg lg:h-full">
                        <Image
                            className="object-cover"
                            src={aboutData.imageSrc}
                            alt="About Image"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </div>

                    <div className="lg:py-6 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{aboutData.title}</h2>
                        <p className="text-gray-600 leading-7">{aboutData.descriptionOne}</p>
                        <p className="mt-4 text-gray-600 leading-7">{aboutData.descriptionTwo}</p>
                        <p className="mt-4 text-gray-600 leading-7">{aboutData.descriptionThree}</p>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="px-6 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">{contentData.title}</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {contentData.details.map((detail, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-black">{detail.contentTitle}</h3>
                                    <p className="text-gray-600">{detail.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="px-6 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Recommended Clothing Fabrics</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {Object.values(clothingImages).map((image, index) => (
                            <Image key={index} src={image} alt={`Clothing Fabric ${index + 1}`} width={500} height={300} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;
