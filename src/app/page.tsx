"use client"

import Image from "next/image";
import ResponsiveCarousal from "../components/carousal";
import Link from 'next/link'
import { useEffect, useState } from "react";
import close from "../../public/images/close.png";
import BrandImage1 from "../../public/images/brandname.png";
import BrandImage2 from "../../public/images/creative.png";
import BrandImage3 from "../../public/images/creative1.png";
import BrandImage4 from "../../public/images/express.png";
import BrandImage5 from "../../public/images/nameLogo.png";
import BrandImage6 from "../../public/images/innovate.png";
import Chat from "../../public/images/chat.png";
import ArrowIllustration from "../../public/images/down-chevron.png";
import highlight from "../../public/images/highlight.png";
import highlight2 from "../../public/images/highlight2.png";
import highlight3 from "../../public/images/highlight3.png";
import SliderImage1 from "../../public/images/image1.jpg";
import image2 from "../../public/images/image2.png";
import image3 from "../../public/images/image3.png";
import line from "../../public/images/line.png";
import like from "../../public/images/like.png";
import next from "../../public/images/next.png";
import quote from "../../public/images/quote.png";
import search from "../../public/images/search.png";
import user from "../../public/images/user.png";
import menu from "../../public/images/menu.png";
import upArrow from "../../public/images/up-arrow.png";
import { initGA, logPageView } from '../../utils/analytics';
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  const [menuShowResponsive, setMenuShowResponsive] = useState(false)
  useEffect(() => {
    initGA(); // Initialize Google Analytics
  logPageView(); // Log the initial pageview
}, []);
  return (
    <main>
      {/* header section */}
      <div className="bg-[#212025] hero-slider overflow-hidden">
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
              <div className="absolute w-full top-[70px] z-10">
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
          <div className="grid grid-cols-12 gap-4 pt-[50px] pb-[100px] max-lg:pb-[70px]">
            <div className="col-span-6 max-xl:col-span-6 max-lg:col-span-12">
              <div className="relative">
                <p className="text-[#858886] text-lg font-normal uppercase mt-4">
                  we are creative
                </p>
                <h1 className="text-[#fdfdfd] text-[48px] font-bold max-xl:text-[36px] max-[640px]:text-[32px]">
                  IT Solution Company
                </h1>
                <div className="absolute right-[10%] top-[100px]">
                  <Image
                    src={highlight}
                    alt="menu-icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-[60px]">
                <p className="text-[#9ba09c] font-normal leading-[30px] text-base lg:w-1/2 mb-[30px] max-lg:pr-[2rem]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
                <div className="flex gap-3">                  
                  <Link href="#" className="bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4">
                    Get Started
                    <Image
                      src={upArrow}
                      alt="menu-icon"
                      width={16}
                      height={16}
                      className="cursor-pointer rotate-45 ml-1"
                    />
                  </Link>
                  <Link href="#" className=" rounded-full uppercase text-sm font-medium text-[#a1a5a1] py-2 px-4 border-[#a1a5a1] border">
                    More Details +
                  </Link>
                </div>
              </div>
              <div className="mt-[7rem] grid grid-cols-12 gap-3 max-lg:mt-[4rem]">
                <div className="border border-[#464646] rounded-xl p-3 col-span-4 max-xl:col-span-4 max-[640px]:col-span-4">
                  <h5 className="text-[22px] text-[#fbfbfb] font-semibold leading-[24px] mb-3 max-[640px]:mb-2">
                    +129K
                  </h5>
                  <p className="text-sm capitalize font-medium text-[#767877] leading-[14px] max-[640px]:leading-4">
                    Successful Projects
                  </p>
                </div>
                <div className="border border-[#464646] rounded-xl p-2 flex items-center justify-between col-span-6 max-xl:col-span-6 max-[640px]:col-span-8">
                  <p className="text-sm capitalize font-medium text-[#767877] me-4 max-[525px]:me-2">
                    Cutting -edge technologies and extensive expertise
                  </p>
                  <Image
                    src={SliderImage1}
                    alt="menu-icon"
                    width={100}
                    height={30}
                    className="cursor-pointer rounded-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-5 max-xl:col-span-5 max-lg:col-span-12 max-lg:mt-10">
              <ResponsiveCarousal arrow={true} dots={false} slidetoshow={1}>
                <div>
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
                <div>
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
                <div>
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
                <div>
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
              </ResponsiveCarousal>
            </div>
          </div>
        </div>
      </div>

      <section className="py-[100px] relative overflow-hidden max-lg:py-[70px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 relative max-[640px]:gap-3">
            <div className="col-span-6 relative max-[640px]:col-span-12">
              <p className="uppercase text-base font-medium text-[#3d3c40] mb-3">
                Brands
              </p>
              <div className="relative">
                <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative border-b-2 border-[#f9f9f9] pb-[30px] max-xl:text-[30px] max-xl:leading-[42px]">
                  Long time project, with our best partner
                </h3>
                <div className="absolute right-0 bottom-[-14px]">
                  <Image
                    src={highlight}
                    alt="all brand logo image"
                    width={30}
                    height={30}
                    className="cursor-pointer "
                  />
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="text-[#3d3c40] font-normal leading-[30px] text-base mb-[30px] pr-[30px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
                <div className="flex gap-3">

                  <Link href="#" className="bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4">
                    View More +
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-span-6 max-[640px]:col-span-12">
              <div className="grid grid-cols-3">
                <div className="p-4 border-[#efefef] border-2 border-l-transparent border-b-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage2}
                    alt="all brand logo image"
                    width={100}
                    height={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-t-2 h-[125px] flex items-center">
                  <Image
                    src={BrandImage1}
                    alt="all brand logo image"
                    width={100}
                    height={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent border-b-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage6}
                    alt="all brand logo image"
                    width={100}
                    height={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent border-l-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage4}
                    alt="all brand logo image"
                    width={100}
                    height={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage3}
                    alt="all brand logo image"
                    width={100}
                    height={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage5}
                    alt="all brand logo image"
                    width={100}
                    height={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
              </div>

              <div className="mt-[5rem]">
                <Image
                  src={ArrowIllustration}
                  alt="all brand logo image"
                  width={70}
                  height={70}
                  className="cursor-pointer ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[20px] ">
          <Image
            src={highlight2}
            alt="menu-icon"
            width={80}
            height={100}
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="pb-[100px] max-lg:pb-[70px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 border-b-2 border-[#f9f9f9] pb-[30px] border-b-2 border-[#f9f9f9] items-center max-[640px]:grid-cols-1">
            <div>
              <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative max-xl:text-[30px] max-xl:leading-[42px]">
                About Our Company
              </h3>
            </div>
            <div>
              <p className="text-[#3d3c40] font-normal leading-[30px] text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 pt-[30px] items-center">
            <div className="col-span-4 max-xl:col-span-5 max-lg:col-span-12">
              <div>
                <Image
                  src={image2}
                  alt="about image"
                  width={400}
                  height={200}
                  className="cursor-pointer rounded-t-lg"
                />
              </div>
            </div>
            <div className="col-span-8 max-xl:col-span-7 max-lg:col-span-12 mt-10">
              <div>
                <div className="ps-4 border-s-2 border-[#10e981] mb-[40px] about-wrap">
                  <h4 className="text-xl capitalize text-[#141318] font-bold mb-4">
                    Why Choose Us?
                  </h4>
                  <p className="text-[#696869] text-sm leading-[24px] font-normal">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&apos;t look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there
                    isn&apos;t anything embarrassing hidden in the middle of
                    text.
                  </p>
                </div>
                <div className="ps-4 border-s-2 border-transparent mb-[40px] about-wrap">
                  <h4 className="text-xl capitalize text-[#898989] font-bold mb-4">
                    What to Expect?{" "}
                  </h4>
                  <p className="text-[#b5b5b5] text-sm leading-[24px] font-normal">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isnt
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div className="ps-4 border-s-2 border-transparent about-wrap">
                  <h4 className="text-xl capitalize text-[#898989] font-bold mb-4">
                    What We Deliver
                  </h4>
                  <p className="text-[#b5b5b5] text-sm leading-[24px] font-normal">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isnt
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px] bg-[#212025] overflow-hidden max-lg:py-[70px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-7 max-xl:col-span-7 max-lg:col-span-12">
              <div>
                <p className="uppercase text-base font-normal text-[#858585]">
                  What we do
                </p>
                <h3 className="text-[42px] text-[#fcfcfc] font-bold leading-[60px] relative xl:w-3/5 max-xl:pr-[30px] max-xl:text-[30px] max-xl:leading-[42px]">
                  We Run all kinds of Services that your Success
                </h3>
              </div>
              <div className="pl-[10%] pt-[30px]">
                <div
                  className="text-xl font-semibold capitalize text-[#a9afa9] success-text border-l border-transparent pl-4 mb-[40px] hover:text-[#10e981] 
                                   hover:border-l hover:border-[#10e981]"
                >
                  <p className="w-fit border-b border-transparent"> backup & recovery </p>
                </div>
                <div
                  className="text-xl font-semibold capitalize text-[#a9afa9] success-text border-l border-transparent pl-4 mb-[40px] hover:text-[#10e981] 
                                   hover:border-l hover:border-[#10e981]"
                >
                  <p className="w-fit border-b border-transparent"> VoIP Solutions</p>
                </div>
                <div
                  className="text-xl font-semibold capitalize text-[#a9afa9] success-text border-l border-transparent pl-4 mb-[40px] hover:text-[#10e981] 
                                   hover:border-l hover:border-[#10e981]"
                >
                  <p className="w-fit border-b border-transparent">
                  Consulting Planning</p>
                </div>
                <div
                  className="text-xl font-semibold capitalize text-[#a9afa9] success-text border-l border-transparent pl-4 mb-[40px] hover:text-[#10e981] 
                                   hover:border-l hover:border-[#10e981]"
                >
                  <p className="w-fit border-b border-transparent">
                  IT Consulting</p>
                </div>

                <Link href="/services" className="bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4 w-fit">
                  More Service +
                </Link>

              </div>
            </div>
           
            <div className="col-span-5 success-slider max-xl:col-span-5 max-lg:col-span-12 max-lg:mt-10">
              <ResponsiveCarousal arrow={false} dots={true} slidetoshow={1}>
                <div className="relative ">
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full grayscale object-cover max-lg:h-[400px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#8d8d8d] font-normal mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <Link href="#" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                      Read more
                      <Image
                        src={next}
                        alt="menu-icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full grayscale object-cover max-lg:h-[400px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#a1a1a1] font-normal mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <Link href="#" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                      Read more
                      <Image
                         src={next}
                        alt="menu-icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full grayscale object-cover max-lg:h-[400px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#a1a1a1] font-normal mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <Link href="#" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                      Read more
                      <Image
                         src={next}
                        alt="menu-icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={image3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full grayscale object-cover max-lg:h-[400px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#a1a1a1] font-normal mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <Link href="#" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                      Read more
                      <Image
                         src={next}
                        alt="menu-icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
              </ResponsiveCarousal>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[30px] relative max-lg:pt-[70px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5 items-center  border-b-2 border-[#f9f9f9] pb-3 relative">
            <div className="col-span-5 max-[640px]:col-span-12">
              <div>
                <p className="uppercase text-base font-normal text-[#3d3c40]">
                  Blog
                </p>
                <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative xl:pe-[5rem] max-xl:text-[30px] max-xl:leading-[42px]">
                  Trending IT Solution Article
                </h3>
              </div>
            </div>
            <div className="col-span-7 max-[640px]:col-span-12">
              <div className="flex justify-between items-center flex-wrap">
                <p className="text-[#3d3c40] font-normal leading-[30px] text-base w-1/2 max-[640px]:w-full">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
                <Link href="/blogs" className="bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4 max-[640px]:mt-4">
                  All Post +
                </Link>
              </div>
            </div>
            <div className="absolute right-[-5px] bottom-[-17px]">
              <Image
                src={highlight}
                alt="all brand logo image"
                width={30}
                height={30}
                className="cursor-pointer "
              />
            </div>
          </div>

          <div className="trending-slider overflow-hidden">
            <ResponsiveCarousal arrow={false} dots={true} slidetoshow={1}>
              <div className="lg:pb-0 pb-5">
                <div className="grid grid-cols-12 gap-5 pt-10">
                  <div className="col-span-5 max-lg:col-span-12">
                    <div className="xl:mx-4 max-xl:mx-4 blog-shadow relative">
                      <Image
                        src={image3}
                        alt="menu-icon"
                        width={300}
                        height={200}
                        className="object-cover h-[600px] w-full max-lg:h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 max-lg:col-span-12 border-l-2 border-[#f3f3f3]">
                    <div className="pl-10">
                      <div className="flex items-center justify-between py-[4rem] max-[640px]:py-[2rem]">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              src={user}
                              alt="user image"
                              width={50}
                              height={50}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="pl-4">
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                              By Gabe Backer
                            </h5>
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                              December 2022
                            </h5>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-between">
                            <Image
                              src={like}
                              alt="user image"
                              width={18}
                              height={18}
                              className="object-cover"
                            />{" "}
                            <span className="text-sm text-[#0f0f0f] font-normal leading-[16px] ml-2">
                              19
                            </span>{" "}
                          </div>
                          <div className="flex items-center justify-between ml-6">
                            {" "}
                            <Image
                              src={Chat}
                              alt="user image"
                              width={18}
                              height={18}
                              className="object-cover"
                            />
                            <span className="text-sm text-[#0f0f0f] font-normal leading-[16px] ml-2">
                              24
                            </span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-[#0f0f0f] leading-[24px] border-b-2 border-[#f3f3f3] pb-5">
                        Organisational Teams are Just Like Families
                      </h4>
                      <p className="text-base leading-[26px] text-[#0f0f0f] font-normal mb-4 pt-5 article-content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has
                        been the industrys standard dummy text ever since the
                        1500s. dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 gap-5 pt-10">
                  <div className="col-span-5 max-lg:col-span-12">
                    <div className="xl:mx-4 max-xl:mx-4 blog-shadow relative">
                      <Image
                        src={image3}
                        alt="menu-icon"
                        width={300}
                        height={200}
                        className="object-cover h-[600px] w-full max-lg:h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 max-lg:col-span-12 border-l-2 border-[#f3f3f3]">
                    <div className="pl-10">
                      <div className="flex items-center justify-between py-[4rem] max-[640px]:py-[2rem]">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              src={user}
                              alt="user image"
                              width={50}
                              height={50}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="pl-4">
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                              By Gabe Backer
                            </h5>
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                              December 2022
                            </h5>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-between">
                            <Image
                              src={like}
                              alt="user image"
                              width={18}
                              height={18}
                              className="object-cover"
                            />{" "}
                            <span className="text-sm text-[#0f0f0f] font-normal leading-[16px] ml-2">
                              19
                            </span>{" "}
                          </div>
                          <div className="flex items-center justify-between ml-6">
                            {" "}
                            <Image
                              src={Chat}
                              alt="user image"
                              width={18}
                              height={18}
                              className="object-cover"
                            />
                            <span className="text-sm text-[#0f0f0f] font-normal leading-[16px] ml-2">
                              24
                            </span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-[#0f0f0f] leading-[24px] border-b-2 border-[#f3f3f3] pb-5">
                        Organisational Teams are Just Like Families
                      </h4>
                      <p className="text-base leading-[26px] text-[#0f0f0f] font-normal mb-4 pt-5 article-content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has
                        been the industrys standard dummy text ever since the
                        1500s. dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 gap-5 pt-10">
                  <div className="col-span-5 max-lg:col-span-12">
                    <div className="xl:mx-4 max-xl:mx-4 blog-shadow relative">
                      <Image
                        src={image3}
                        alt="menu-icon"
                        width={300}
                        height={200}
                        className="object-cover h-[600px] w-full max-lg:h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 max-lg:col-span-12 border-l-2 border-[#f3f3f3]">
                    <div className="pl-10">
                      <div className="flex items-center justify-between py-[4rem] max-[640px]:py-[2rem]">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              src={user}
                              alt="user image"
                              width={50}
                              height={50}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="pl-4">
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                              By Gabe Backer
                            </h5>
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                              December 2022
                            </h5>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-between">
                            <Image
                              src={like}
                              alt="user image"
                              width={18}
                              height={18}
                              className="object-cover"
                            />{" "}
                            <span className="text-sm text-[#0f0f0f] font-normal leading-[16px] ml-2">
                              19
                            </span>{" "}
                          </div>
                          <div className="flex items-center justify-between ml-6">
                            {" "}
                            <Image
                              src={Chat}
                              alt="user image"
                              width={18}
                              height={18}
                              className="object-cover"
                            />
                            <span className="text-sm text-[#0f0f0f] font-normal leading-[16px] ml-2">
                              24
                            </span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-[#0f0f0f] leading-[24px] border-b-2 border-[#f3f3f3] pb-5">
                        Organisational Teams are Just Like Families
                      </h4>
                      <p className="text-base leading-[26px] text-[#0f0f0f] font-normal mb-4 pt-5 article-content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has
                        been the industrys standard dummy text ever since the
                        1500s. dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ResponsiveCarousal>
          </div>
          <div className="relative text-end ml-auto">
            <Image
              src={ArrowIllustration}
              alt="all brand logo image"
              width={70}
              height={70}
              className="cursor-pointer ml-auto"
            />
          </div>
        </div>
        <div className="absolute right-0 top-[180px] max-[1700px]:top-[0px]">
          <Image
            src={highlight2}
            alt="menu-icon"
            width={80}
            height={100}
            className="object-cover object-center"
          />
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6 border-b-2 border-[#f9f9f9] pb-[30px] border-b-2 border-[#f9f9f9]">
            <div className="col-span-7 max-[640px]:col-span-12">
              <p className="uppercase text-base font-normal text-[#3d3c40]">
                testimonials
              </p>
              <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative max-xl:text-[30px] max-xl:leading-[42px]">
                What People says...
              </h3>
            </div>
            <div className="col-span-5 max-[640px]:col-span-12">
              <p className="text-[#3d3c40] font-normal leading-[30px] text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry Lorem Ipsum is
                simply dummy text of the printing and typesetting.
              </p>
            </div>
          </div>
        </div>
        <div className="relative testimonial-slider">
          <div className="absolute left-0 top-[40px] before:bg-[#000]  before:h-full before:w-full before:top-0 before:right-0 before:absolute before:opacity-80 max-lg:hidden">
            <Image
              src={image3}
              alt="menu-icon"
              width={200}
              height={100}
              className="object-cover w-full h-[450px] object-center"
            />
          </div>
          <div className="absolute left-0 bottom-[-120px]">
            <Image
              src={highlight3}
              alt="menu-icon"
              width={80}
              height={100}
              className="object-cover object-center"
            />
          </div>
          <div className="container mx-auto">
            <ResponsiveCarousal arrow={true} dots={false} slidetoshow={1}>
              <div className="relative">
                <div className="grid grid-cols-12 pt-10">
                  <div className="col-span-6 max-[640px]:col-span-12">
                    <div className="relative blog-shadow">
                      <Image
                        src={image3}
                        alt="menu-icon"
                        width={400}
                        height={100}
                        className="object-cover w-full h-[538px] object-center max-sm:h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 bg-[#212025] max-[640px]:col-span-12">
                    <div className="px-10">
                      <div className="py-[3rem] max-sm:py-[2rem]">
                        <Image
                          src={quote}
                          alt="user image"
                          width={50}
                          height={50}
                          className="object-cover !m-0"
                        />
                      </div>
                      <p className="text-base leading-[26px] text-[#a9afa9] font-normal mb-4 testimonial-content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. 
                      </p>
                      <div className="pl-8 py-[2rem]">
                        <h5 className="text-base text-[#fff] font-semibold leading-[16px]  mb-2">
                          Arlene McCoy
                        </h5>
                        <p className="text-[12px] text-[#a9afa9] font-semibold leading-[16px] ">
                          Desgination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 pt-10">
                  <div className="col-span-6 max-[640px]:col-span-12">
                    <div className="relative blog-shadow">
                      <Image
                        src={image3}
                        alt="menu-icon"
                        width={400}
                        height={100}
                        className="object-cover w-full h-[538px] object-center max-sm:h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 bg-[#212025] max-[640px]:col-span-12">
                    <div className="px-10">
                      <div className="py-[4rem] max-sm:py-[2rem]">
                        <Image
                          src={quote}
                          alt="user image"
                          width={50}
                          height={50}
                          className="object-cover !m-0"
                        />
                      </div>
                      <p className="text-base leading-[26px] text-[#a9afa9] font-normal mb-4 testimonial-content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. 
                      </p>
                      <div className="pl-8 py-[3rem]">
                        <h5 className="text-base text-[#fff] font-semibold leading-[16px]  mb-2">
                          Arlene McCoy
                        </h5>
                        <p className="text-[12px] text-[#a9afa9] font-semibold leading-[16px] ">
                          Desgination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 pt-10">
                  <div className="col-span-6 max-[640px]:col-span-12">
                    <div className="relative blog-shadow">
                      <Image
                        src={image3}
                        alt="menu-icon"
                        width={400}
                        height={100}
                        className="object-cover w-full h-[538px] object-center max-sm:h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 bg-[#212025] max-[640px]:col-span-12">
                    <div className="px-10">
                      <div className="py-[4rem] max-sm:py-[2rem]">
                        <Image
                          src={quote}
                          alt="user image"
                          width={50}
                          height={50}
                          className="object-cover !m-0"
                        />
                      </div>
                      <p className="text-base leading-[26px] text-[#a9afa9] font-normal mb-4 testimonial-content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard
                        dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. 
                      </p>
                      <div className="pl-8 py-[3rem]">
                        <h5 className="text-base text-[#fff] font-semibold leading-[16px]  mb-2">
                          Arlene McCoy
                        </h5>
                        <p className="text-[12px] text-[#a9afa9] font-semibold leading-[16px] ">
                          Desgination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ResponsiveCarousal>
          </div>
          <div className="absolute right-0 bottom-[32px] z-[-1] before:bg-[#000]  before:h-full before:w-full before:top-0 before:right-0 before:absolute before:opacity-80 max-lg:hidden">
            <Image
              src={image3}
              alt="menu-icon"
              width={200}
              height={100}
              className="object-cover w-full h-[450px] object-center"
            />
          </div>
        </div>
      </section>
      <section className="py-[100px] explore-slider overflow-hidden relative max-lg:py-[70px]">
        <div className="container mx-auto">
          <div className=" pb-[30px] text-center xl:w-1/2 mx-auto relative">
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[50px] mb-[20px] relative max-xl:text-[30px] max-xl:leading-[42px]">
              Explore Our Selected <br /> Services
            </h3>
            <p className="text-[#3d3c40] font-normal leading-[26px] text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry Lorem Ipsum is simply
              dummy text of the printing and typesetting.
            </p>
            <div className="absolute top-[30px] left-0 xl:left-[-20%] max-sm:top-[40px]">
              <Image
                src={line}
                alt="all brand logo image"
                width={70}
                height={70}
                className="cursor-pointer ml-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 relative gap-4">
            <div className="col-span-1 max-sm:col-span-12">
              <div className="absolute bottom-0 left-0 max-sm:hidden">
                <Image
                  src={ArrowIllustration}
                  alt="menu-icon"
                  width={80}
                  height={100}
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="col-span-11 max-sm:col-span-12">
              <ResponsiveCarousal arrow={true} dots={false} slidetoshow={1.13}>
                <div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 max-[640px]:col-span-12">
                      <div className="">
                        <Image
                          src={image3}
                          alt="menu-icon"
                          width={400}
                          height={100}
                          className="object-cover w-full h-[538px] object-center max-lg:h-[400px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 relative max-[640px]:col-span-12">
                      <div className="px-10 pt-[4rem] max-sm:pb-[5rem]">
                        <h4 className="text-[32px] font-medium text-[#1d1c20] leading-[40px] max-xl:text-[26px] max-xl:leading-[36px]">
                          Beyond a coworking space with BizDev
                        </h4>
                        <p className="text-base leading-[26px] text-[#a9afa9] font-normal pt-[20px] explore-content">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industrys
                          standard dummy text ever since the 1500s Lorem Ipsum is
                          simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industrys standard
                          dummy text ever since the 1500s. Lorem Ipsum is simply
                          dummy text of the printing and typesetting industry.
                        </p>
                        <div className="absolute bottom-[30px]">
                          <Link href="/services" className="bg-[#10e981] uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4">
                            View Services
                            <Image
                              src={upArrow}
                              alt="menu-icon"
                              width={16}
                              height={16}
                              className="cursor-pointer rotate-45 ml-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 max-[640px]:col-span-12">
                      <div className="">
                        <Image
                          src={image3}
                          alt="menu-icon"
                          width={400}
                          height={100}
                          className="object-cover w-full h-[538px] object-center max-lg:h-[400px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 relative max-[640px]:col-span-12">
                      <div className="px-10 pt-[4rem] max-sm:pb-[5rem]">
                        <h4 className="text-[32px] font-medium text-[#1d1c20] leading-[40px] max-xl:text-[26px] max-xl:leading-[36px]">
                          Beyond a coworking space with BizDev
                        </h4>
                        <p className="text-base leading-[26px] text-[#a9afa9] font-normal pt-[20px] explore-content">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industrys
                          standard dummy text ever since the 1500s Lorem Ipsum is
                          simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industrys standard
                          dummy text ever since the 1500s. Lorem Ipsum is simply
                          dummy text of the printing and typesetting industry.
                        </p>
                        <div className="absolute bottom-[30px]">

                          <Link href="#" className="bg-[#10e981] uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4">
                            View Services
                            <Image
                              src={upArrow}
                              alt="menu-icon"
                              width={16}
                              height={16}
                              className="cursor-pointer rotate-45 ml-1"
                            />
                          </Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ResponsiveCarousal>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-[#10e981] py-[80px]">
        <div className="container mx-auto">
          <div className="mx-auto text-center w-1/2 max-[640px]:w-full">
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[50px] mb-[20px] relative max-xl:text-[30px] max-xl:leading-[42px]">
              Have a project of your own?
            </h3>
            <p className="text-[#3d3c40] font-semibold leading-[26px] text-base mb-[30px]">
              Small or big, we have got you covered!
            </p>

            <div className="bg-[#fff] uppercase text-sm flex mx-auto rounded-full items-center  font-medium text-[#1d1c20] py-2 px-4 w-fit">
              <GetInTouch />
            </div>

          </div>
        </div>
      </section>
      <footer className="bg-[#212025] pt-[100px] max-lg:pt-[70px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 pb-[100px] max-lg:pb-[70px]">
            <div className="col-span-3 max-[640px]:col-span-12">
              <div>
                <div>
                  <Link href="#" className="cursor-pointer text-2xl text-[#fff] leading-[26px] font-semibold">
                  Web<span className="text-[#10e981]">Glim</span>
                  </Link>
                </div>
                <div className="pt-[3rem]">
                  <p className="text-sm leading-[20px] text-[#a9afa9] font-normal pt-[20px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="pt-[3rem]">
                  <ul>
                    <li className="uppercase text-sm text-[#a9afa9] font-normal mb-2">
                      Terms of service
                    </li>
                    <li className="uppercase text-sm text-[#a9afa9] font-normal">
                      Privacy Policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-4 max-[640px]:col-span-12">
              <div>
                <h5 className="text-xl text-[#fff] leading-[26px] font-semibold uppercase">
                  OUR newsletter
                </h5>
                <div className="mt-6">
                  <label className="capitalize text-sm text-[#a9afa9] font-normal">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-[#3c3c3c] border-b-2 mt-3 bg-transparent w-full text-white"
                  />
                </div>
                <div className="mt-6">
                  <label className="capitalize text-sm text-[#a9afa9] font-normal">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border-[#3c3c3c] border-b-2 mt-3 bg-transparent w-full text-white"
                  />
                </div>

                <Link href="#" className="bg-[#10e981] uppercase text-sm flex items-center  font-medium text-[#212527] py-2 mt-[3rem] px-4 rounded-full w-fit">
                  Subscribe
                  <Image
                    src={upArrow}
                    alt="menu-icon"
                    width={16}
                    height={16}
                    className="cursor-pointer rotate-45 ml-1"
                  />
                </Link>

              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 max-[640px]:col-span-12">
              <div>
                <h5 className="text-xl text-[#fff] leading-[26px] font-semibold uppercase">
                  help links
                </h5>
                <ul className="mt-6">
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    Customers Service
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    IT Department
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    About Our Campain
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    Business Growth
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    Make An Appointment
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-sm font-normal text-[#a9afa9] pb-[30px]">
            © 2023 . All Right Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
