import React from 'react'
// import metadata 
import type { Metadata } from "next";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import AmbassadorInfo from '@/components/AmbassadorInfo';
import Posts from '@/components/Posts';

const title = "Ambassadors";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <AmbassadorInfo />
            <Posts posts={[
                {
                    id: 1,
                    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtfGVufDB8fDB8fHww",
                    title: "Instagram Ambassador",
                    href: "#",
                    description: "Instagram is a great social media platform for fashion enthusiasts. We believe that fashion should be accessible to everyone, and we are committed to making that a reality.",
                },
                {
                    id: 2,
                    imageUrl: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D",
                    title: "Facebook Ambassador",
                    href: "#",
                    description: "Facebook is great for content creation. Use your own platform to share our fashion with the world.",
                },
                {
                    id: 3,
                    imageUrl: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlrdG9rfGVufDB8fDB8fHww",
                    title: "Tiktok Ambassador",
                    href: "#",
                    description: "Tiktok is lately the fastest growing social media platform. Like, Comment, and Share.",
                }
            ]}/>
            <Footer />
        </div>
    )
}

export default page