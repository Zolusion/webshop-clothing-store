import AmbassadorInfo from "@/components/AmbassadorInfo";
import Footer from "@/components/Footer";
import Influencers from "@/components/Influencers";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
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
                    description: "Our hijab community is a community of like-minded individuals who share their passion for fashion and share their experience.",
                },
                {
                    id: 6,
                    imageUrl: "/ambassadors-image/influencer.jpeg",
                    title: "Influencers",
                    href: "#",
                    description: "We are always looking for new and exciting people to join our community. We are looking for people who share their love for fashion and who want to be part of our community.",
                }
            ]}/>
            <Footer />
        </div>
    )
}

export default page