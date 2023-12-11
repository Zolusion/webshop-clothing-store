import Image from "next/image";
import React from 'react';

const ambassadorData = [
    {
        id: 1,
        title: 'Join Our Team',
        imageSrc: '/women-on-laptop.jpeg',
        description: 'Are you passionate about our mission? Become an ambassador and make a difference in your community.',
        buttonText: 'Apply Now',
    },
    {
        id: 2,
        title: 'How to become an Ambassador',
        imageSrc: '/hijab-model.jpeg',
        description: 'Become an ambassador and join our team. Did you know that you can earn a commission?',
        buttonText: 'More info',
    },
    {
        id: 3,
        title: 'What to do as an Ambassador',
        imageSrc: '/hijab-model-purple.jpeg',
        description: 'Achieving our goals is not easy. As an ambassador, you will be responsible for making a difference in the lives of others.',
        buttonText: 'More info',
    },
];

const AmbassadorInfo = () => {
    return (
        <div className='bg-white'>
            <div className="bg-gray-900 text-white">
                <div className="max-w-7xl 2xl:max-w-[2200px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-[30px] 2xl:text-5xl">
                        Become an Ambassador
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {ambassadorData.map((item) => (
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
                                    <a
                                        href="#"
                                        className="2xl:text-lg mt-4 inline-block px-6 py-3 text-sm font-semibold leading-none bg-white text-gray-900 rounded-full hover:bg-gray-100"
                                    >
                                        {item.buttonText}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AmbassadorInfo;
