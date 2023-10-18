"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogs } from '@/data/blogs';

const Page = () => {
    const params = useParams();
    console.log('blogId: ', params?.blogId);

    if (params?.blogId) {
        const blog = blogs.find((blog) => blog.id === params.blogId)
        if (blog) {
            return (
                <>
                    <div className='max-[1024px]:mt-[77px]'>
                        <div className='sticky top-0 z-10'>
                            <Header></Header>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="grid grid-cols-12 gap-4 pt-10 max-[991px]:pt-5 pb-20 max-[991px]:pb-10">
                                    <div className='col-span-12'>
                                        <div className="">
                                            <Image
                                                src={blog.blogThumbnail}
                                                alt="contentImage"
                                                className="object-cover h-[60vh] max-[991px]:h-auto rounded-[20px]"
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-12 max-[767px]:col-span-12'>
                                        <div className="pt-10 max-[991px]:p-0">
                                            <div className="post_container">
                                                <div className="post_content mt-5 max-[991px]:mt-0">
                                                    <div className='flex justify-between max-[991px]:flex-col mb-20 max-[991px]:mb-5'>
                                                        <h1 className="text-[#000] mr-[100px] max-[991px]:mr-0 text-[40px] font-bold max-xl:text-[36px] max-[640px]:text-[32px] mb-5">
                                                            {blog.blogTitle}
                                                        </h1>
                                                        <div className="flex items-center flex-1 justify-end max-[991px]:justify-start whitespace-nowrap">
                                                            <Image
                                                                src={blog.bloggerImage}
                                                                alt="user image"
                                                                width={50}
                                                                height={50}
                                                                className="object-cover rounded-full"
                                                            />
                                                            <div className="pl-4">
                                                                <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                                                                    {blog.byBlogger}
                                                                </h5>
                                                                <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                                                                    {blog.createdDate}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>{blog.blogDescription}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    return null;
}

export default Page