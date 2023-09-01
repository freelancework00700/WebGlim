"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";
import close from "../../public/images/close.png";
import search from "../../public/images/search.png";
import menu from "../../public/images/menu.png";
import expandArrow from "../../public/images/expandArrow.png";

const Header = () => {
    const [menuShowResponsive, setMenuShowResponsive] = useState(false)

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <>
            <div className="bg-[#212025] hero-slider overflow-hidden " >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between  border-b-2 border-[#2c2c2c] max-lg:py-4">
                        <div className="flex items-center">
                            <div className="main-logo me-[2rem]">
                                <Link href="/" className="text-[#e7e7e8] text-3xl font-semibold cursor-pointer">
                                    Web<span className="text-[#10e981]">Glim</span>
                                </Link>
                            </div>
                            <div className="hidden lg:flex">
                                <nav>
                                    <ul className="flex items-center">
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="/" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] ">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="/about" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] ">
                                                About
                                            </Link>
                                        </li>
                                        <li
                                            className="px-4 py-[23px] cursor-pointer"
                                            onMouseLeave={onMouseLeave}
                                        >
                                            <Link
                                                onMouseEnter={onMouseEnter}
                                                href="/services" className="flex h-full items-center text-sm font-medium leading-[24px] text-[#fff] hover:text-[#10e981] ">
                                                Services
                                                <Image src={expandArrow} alt='expandArrow' className='ml-1 mt-1 invert h-[10px] w-[10px]'></Image>
                                            </Link>
                                            {isHovering &&
                                                <div className="fixed top-[70px] z-10 max-lg:hidden">
                                                    <div className="bg-[#000] p-3 px-5">
                                                        <nav>
                                                            <ul className="flex items-center flex-col">
                                                                <li className="py-2 w-full">
                                                                    <Link href="/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                        MOBILE APP DEVELOPMENT
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 w-full">
                                                                    <Link href="/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                        BUSINESS ANALYSIS
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 w-full">
                                                                    <Link href="/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                        DESIGN CONSULTANCY
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 w-full">
                                                                    <Link href="/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                        WORDPRESS DEVELOPMENT
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            }
                                        </li>
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="/projects" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981]">
                                                Projects
                                            </Link>
                                        </li>
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="/blogs" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981]">
                                                Our Blogs
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden lg:flex">
                                <Link href="tel:+612852667445" className="text-sm text-[#fff] font-medium leading-[16px] pe-4 border-[#79787b] border-r-2 cursor-pointer">
                                    <span className="text-[#10e981]">Call Us: </span>{" "}
                                    +61 2852667445
                                </Link>
                            </div>
                            <div className="ps-4 pe-8 lg:pe-0">
                                {/* <Image
                                    src={search}
                                    alt="search image"
                                    width={16}
                                    height={16}
                                    className="cursor-pointer"
                                /> */}
                                <Link href="/contactUs" className="bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4 max-[1023px]:hidden">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="bg-[#fefefe26] rounded-sm p-2 lg:hidden flex" onClick={() => setMenuShowResponsive(!menuShowResponsive)}>
                                {!menuShowResponsive ? (<>
                                    <Image
                                        src={menu}
                                        alt="menu-icon"
                                        width={18}
                                        height={18}
                                        className="cursor-pointer invert"
                                    />
                                </>) : (<>
                                    <Image
                                        src={close}
                                        alt="menu-icon-new"
                                        width={18}
                                        height={18}
                                        className="cursor-pointer invert"
                                    />
                                </>)}
                            </div>
                        </div>
                        {menuShowResponsive &&
                            <div className="absolute w-full left-0 top-[70px] z-10 lg:hidden">
                                <div className="bg-[#fff] p-3 px-5">
                                    <nav>
                                        <ul className="flex items-center flex-col">
                                            <li className="py-2">
                                                <Link href="/" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="/about" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    About
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="/services" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="/projects" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Projects
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="/blogs" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="/contactUs" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="text-center py-4">
                                        <Link href="tel:(+080)12345678900" className="text-sm text-[#1d1c21] font-medium leading-[16px] cursor-pointer">
                                            <span className="text-[#10e981]">Call Us: </span>
                                            (+080)1234567890
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header