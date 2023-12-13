import dynamic from 'next/dynamic';
import type { Metadata } from "next";

const Navbar = dynamic(() => import('@/components/Navbar'));
const AmbassadorInfo = dynamic(() => import('../../components/AmbassadorInfo'));
const Posts = dynamic(() => import('@/components/Posts'));
const Influencers = dynamic(() => import('@/components/Influencers'));
const Footer = dynamic(() => import('@/components/Footer'));

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
                    imageUrl: "/ambassadors-image/fashiontrends.jpeg",
                    title: "Fashion Trends",
                    href: "/fashiontrends",
                    description: "The fashion industry is one of the most exciting and exciting industries. We are committed to making fashion accessible to everyone.",
                },
                {
                    id: 5,
                    imageUrl: "/ambassadors-image/hijabcommunity.jpeg",
                    title: "Hijab Community",
                    href: "#",
                    description: "Nothing is more beautiful then a women who wears hijab.",
                },
                {
                    id: 6,
                    imageUrl: "/ambassadors-image/influencer.jpeg",
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