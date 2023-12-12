import React from 'react'
// import metadata 
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from "next/legacy/image";
import AmbassadorInfo from '@/components/AmbassadorInfo';
import Posts from '@/components/Posts';
import Influencers from '@/components/Influencers';
import type { Metadata } from "next";

const title = "Ambassadors";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <AmbassadorInfo />
            <Influencers />
            <Posts posts={[

                {
                    id: 4,
                    imageUrl: "/fashiontrends.jpeg",
                    title: "Fashion Trends",
                    href: "#",
                    description: "The fashion industry is one of the most exciting and exciting industries. We are committed to making fashion accessible to everyone.",
                },
                {
                    id: 5,
                    imageUrl: "/hijabcommunity.jpeg",
                    title: "Hijab Community",
                    href: "#",
                    description: "Nothing is more beautiful then a women who wears hijab.",
                },
                {
                    id: 6,
                    imageUrl: "/influencer.jpeg",
                    title: "Influencers",
                    href: "#",
                    description: "We always love to collaborate with influencers that are passionate about fashion.",
                }
            ]}/>
            <Footer />
        </div>
    )
}

export default page