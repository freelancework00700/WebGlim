"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";
import close from "../../public/images/close.png";
import search from "../../public/images/search.png";
import menu from "../../public/images/menu.png";

const Header = () => {
    const [menuShowResponsive, setMenuShowResponsive] = useState(false)
    return (
        <>
            <div className="bg-[#212025] hero-slider overflow-hidden relative">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between py-4 border-b-2 border-[#2c2c2c] relative">
                        <div className="flex items-center">
                            <div className="main-logo me-[5rem]">
                                <Link href="#" className="text-[#e7e7e8] text-3xl font-semibold cursor-pointer">
                                    Web<span className="text-[#10e981]">Glim</span>
                                </Link>
                            </div>
                            <div className="hidden lg:flex">
                                <nav>
                                    <ul className="flex items-center">
                                        <li className="px-4">
                                            <Link href="/" className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="px-4">
                                            <Link href="/about" className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white">
                                                About
                                            </Link>
                                        </li>
                                        <li className="px-4">
                                            <Link href="/services" className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white">
                                                Services
                                            </Link>
                                        </li>
                                        <li className="px-4">
                                            <Link href="/projects" className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white">
                                                Projects
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden lg:flex">
                                <Link href="#" className="text-sm text-[#a2a2a3] font-medium leading-[16px] pe-4 border-[#79787b] border-r-2 cursor-pointer">
                                    <span className="text-[#10e981]">Call Us:</span>{" "}
                                    (+080)1234567890
                                </Link>
                            </div>
                            <div className="ps-4 pe-8 lg:pe-0">
                                <Image
                                    src={search}
                                    alt="search image"
                                    width={16}
                                    height={16}
                                    className="cursor-pointer"
                                />
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
                            <div className="absolute w-full top-[70px] z-[99999999]">
                                <div className="bg-[#fff] p-3 px-5">
                                    <nav>
                                        <ul className="flex items-center flex-col">
                                            <li className="py-2">
                                                <Link href="#" className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="#" className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white">
                                                    About
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="#" className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white">
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link href="#" className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white">
                                                    Projects
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="text-center py-4">
                                        <Link href="#" className="text-sm text-[#1d1c21] font-medium leading-[16px] cursor-pointer">
                                            <span className="text-[#10e981]">Call Us:</span>{" "}
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