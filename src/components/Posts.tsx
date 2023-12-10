import Image from "next/legacy/image";
import React from 'react'

interface Post {
    id: number;
    imageUrl: string;
    title: string;
    href: string;
    description: string;
}

const Posts = ({ posts }: { posts?: Post[] }) => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Latest News</span>
                    </h2>
                </div>
                <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    {posts && posts.map((post: Post) => (
                        <div key={post.id} className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="h-full w-full object-cover object-center"
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">{post.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Posts