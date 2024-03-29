"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";
import close from "../../public/images/close.png";
import menu from "../../public/images/menu.png";
import expandArrow from "../../public/images/expandArrow.png";
import mainLogo from "../../public/images/main-logo_horizontal.png";

const Header = () => {
    const [menuShowResponsive, setMenuShowResponsive] = useState(false)

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <>
            <div className="bg-[#212025] max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:z-10 max-[1024px]:w-full overflow-hidden " >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between  border-b-2 border-[#2c2c2c] max-lg:py-2">
                        <div className="flex items-center">
                            <div className="main-logo me-[2rem]">
                                <Link href="https://webglim.com.au/" className="cursor-pointer">
                                <Image
                                        src={mainLogo}
                                        alt="menu-icon"
                                        height={60}
                                        className="cursor-pointer"
                                    />
                                </Link>
                            </div>
                            <div className="hidden lg:flex">
                                <nav>
                                    <ul className="flex items-center">
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="https://webglim.com.au/" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] ">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="https://webglim.com.au/about" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] ">
                                                About
                                            </Link>
                                        </li>
                                        <li
                                            className="px-4 py-[23px] cursor-pointer"
                                            onMouseLeave={onMouseLeave}
                                        >
                                            <Link
                                                onMouseEnter={onMouseEnter}
                                                href="https://webglim.com.au/services" className="flex h-full items-center text-sm font-medium leading-[24px] text-[#fff] hover:text-[#10e981] ">
                                                Services
                                                <Image src={expandArrow} alt='expandArrow' className='ml-1 mt-1 invert h-[10px] w-[10px]'></Image>
                                            </Link>
                                            {isHovering &&
                                                <div className="absolute top-[70px]  max-lg:hidden z-50">
                                                    <div className="bg-[#000] p-3 px-5">
                                                        <nav>
                                                            <ul className="flex items-center flex-col">                                                                
                                                                <li className="py-2 w-full">
                                                                    <Link href="https://webglim.com.au/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                    Web Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 w-full">
                                                                    <Link href="https://webglim.com.au/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                    Mobile App Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 w-full">
                                                                    <Link href="https://webglim.com.au/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                    Cloud Service
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 w-full">
                                                                    <Link href="https://webglim.com.au/services" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981] cursor-pointer ">
                                                                    IT Consulting
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            }
                                        </li>
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="https://webglim.com.au/portfolio" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981]">
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li className="px-4 py-[23px] cursor-pointer">
                                            <Link href="https://webglim.com.au/blogs" className="text-sm font-medium leading-[16px] text-[#fff] hover:text-[#10e981]">
                                                Our Blogs
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden lg:flex">
                                <Link href="tel:02 8526 6744" className="text-sm text-[#fff] font-medium leading-[16px] pe-4 border-[#79787b] border-r-2 cursor-pointer">
                                    <span className="text-[#10e981]">Call Us: </span>{" "}
                                    02 8526 6744 
                                </Link>
                            </div>
                            <div className="ps-4 pe-8 lg:pe-0">
                                <Link href="https://webglim.com.au/contactUs" className="bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4 max-[1023px]:hidden">
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
                            <div className="fixed w-full left-0 top-[70px] lg:hidden z-20">
                                <div className="bg-[#fff] p-3 px-5 shadow-md">
                                    <nav>
                                        <ul className="flex items-start flex-col">
                                            <li className="py-2">
                                                <Link href="https://webglim.com.au/" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="https://webglim.com.au/about " className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    About
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="https://webglim.com.au/services" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="https://webglim.com.au/portfolio " className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="https://webglim.com.au/blogs" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="https://webglim.com.au/contactUs" className="text-sm font-medium leading-[16px] text-[#1d1c21] hover:text-[#10e981] cursor-pointer ">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="text-left py-2">
                                        <Link href="tel:02 8526 6744" className="text-sm text-[#1d1c21] font-medium leading-[16px] cursor-pointer">
                                            <span className="text-[#10e981]">Call Us: </span>
                                            02 8526 6744
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