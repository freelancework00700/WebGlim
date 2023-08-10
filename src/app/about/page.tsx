"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import search from "../../../public/images/search.png";
import close from "../../../public/images/close.png";
import menu from "../../../public/images/menu.png";
import upArrow from "../../../public/images/up-arrow.png";
import highlight from "../../../public/images/highlight.png";
import image1 from "../../../public/images/image1.jpg";
import image2 from "../../../public/images/image2.png";
import image3 from "../../../public/images/image3.png";
import ResponsiveCarousal from "../../components/carousal";
import man from "../../../public/images/man.png";
import man1 from "../../../public/images/man1.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function About() {
  const [menuShowResponsive, setMenuShowResponsive] = useState(false);
  return (
    <div>
      <Header />
      <div className="project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
              About Us
            </h3>
            <p className="w-1/2 mx-auto text-base leading-[26px] text-[#666] text-center mt-4 max-lg:w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the industry standard dummy text
              ever when an unknown printer took.
            </p>
          </div>
        </div>
      </div>

      <section className="py-[100px] relative max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center max-lg:gap-4 max-lg:gap-3">
            <div className="col-span-6 relative max-md:col-span-12">
              {/* <p className="uppercase text-base font-medium text-[#3d3c40] mb-3">
                What we do
              </p> */}
              <div className="relative">
                <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative border-b-2 border-[#f9f9f9] max-xl:text-[30px] max-xl:leading-[42px]">
                  Our Mission
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
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8 max-sm:mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <div>
                    <Image
                      src={image1}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <Image
                      src={image2}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>

                <div className="col-span-12 max-md:col-span-12">
                  <div>
                    <Image
                      src={image3}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-6 mt-[80px] max-sm:mt-[40px] max-md:col-span-12">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <div>
                    <Image
                      src={image1}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <Image
                      src={image2}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>

                <div className="col-span-12 max-md:col-span-12">
                  <div>
                    <Image
                      src={image3}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 relative mt-[80px] max-sm:mt-[20px] max-lg:col-span-6 max-md:col-span-12">
              {/* <p className="uppercase text-base font-medium text-[#3d3c40] mb-3">
                What we do
              </p> */}
              <div className="relative">
                <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative border-b-2 border-[#f9f9f9] max-xl:text-[30px] max-xl:leading-[42px]">
                  Our Vision
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
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8 max-sm:mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative py-[100px] bg-[#ebfff5] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="uppercase text-base font-medium text-[#3d3c40] mb-3">
              Some Reasons
            </p>
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative  max-xl:text-[30px] max-xl:leading-[42px]">
              Why Choose Us
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-8 mt-[40px] max-lg:gap-4 max-sm:mt-[20px]">
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div className="flex items-start">
                <div
                  className="relative text-xl pr-10 font-bold text-[#10e981] after:absolute after:right-0 after:h-[1px] 
              after:w-full after:top-[12px] after:bg-[#999] "
                >
                  <span className="bg-[#ebfff5] relative z-[20] pr-[10px]">
                    01
                  </span>
                </div>
                <div className="ps-2">
                  <h5 className="text-xl text-[#222] font-semibold leading-[26px]">
                    Dedication to Client Success
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div className="flex items-start">
                <div
                  className="relative text-xl pr-10 font-bold text-[#10e981] after:absolute after:right-0 after:h-[1px] 
              after:w-full after:top-[12px] after:bg-[#999] "
                >
                  <span className="bg-[#ebfff5] relative z-[20] pr-[10px]">
                    02
                  </span>
                </div>
                <div className="ps-2">
                  <h5 className="text-xl text-[#222] font-semibold leading-[26px]">
                    High Level of Usability
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div className="flex items-start">
                <div
                  className="relative text-xl pr-10 font-bold text-[#10e981] after:absolute after:right-0 after:h-[1px] 
              after:w-full after:top-[12px] after:bg-[#999] "
                >
                  <span className="bg-[#ebfff5] relative z-[20] pr-[10px]">
                    03
                  </span>
                </div>
                <div className="ps-2">
                  <h5 className="text-xl text-[#222] font-semibold leading-[26px]">
                    Aglie and Fast Working Style
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div className="flex items-start">
                <div
                  className="relative text-xl pr-10 font-bold text-[#10e981] after:absolute after:right-0 after:h-[1px] 
              after:w-full after:top-[12px] after:bg-[#999] "
                >
                  <span className="bg-[#ebfff5] relative z-[20] pr-[10px]">
                    04
                  </span>
                </div>
                <div className="ps-2">
                  <h5 className="text-xl text-[#222] font-semibold leading-[26px]">
                    Continuous Growth
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div className="flex items-start">
                <div
                  className="relative text-xl pr-10 font-bold text-[#10e981] after:absolute after:right-0 after:h-[1px] 
              after:w-full after:top-[12px] after:bg-[#999] "
                >
                  <span className="bg-[#ebfff5] relative z-[20] pr-[10px]">
                    05
                  </span>
                </div>
                <div className="ps-2">
                  <h5 className="text-xl text-[#222] font-semibold leading-[26px]">
                    Fast-Moving Mindset
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div className="flex items-start">
                <div
                  className="relative text-xl pr-10 font-bold text-[#10e981] after:absolute after:right-0 after:h-[1px] 
              after:w-full after:top-[12px] after:bg-[#999] "
                >
                  <span className="bg-[#ebfff5] relative z-[20] pr-[10px]">
                    06
                  </span>
                </div>
                <div className="ps-2">
                  <h5 className="text-xl text-[#222] font-semibold leading-[26px]">
                    Some Apps are Free
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-[40px] max-sm:mb-[20px]">
            {/* <p className="uppercase text-base font-medium text-[#3d3c40] mb-3">
              Some Reasons
            </p> */}
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative  max-xl:text-[30px] max-xl:leading-[42px]">
              Meet With Expert Team
            </h3>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              
                <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man}
                  alt="menu-icon"
                  width={300}
                  height={200}
                  className="object-cover h-[300px] max-lg:h-[250px] object-top mx-auto"
                />
                </div>
                <div className="shadow-md p-6 text-center rounded-b-xl">
                  <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                      Tim Kamerer 
                  </h5>
                  <p className="text-base text-[#666] leading-[20px] font-normal">Team Leader </p>
                </div>
              
              </div>

              <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              
              <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man1}
                  alt="menu-icon"
                  width={200}
                  height={200}
                  className="object-cover h-[300px] max-lg:h-[250px] object-top mx-auto"
                />
                </div>
                <div className="shadow-md p-6 text-center rounded-b-xl">
                  <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                      Lindsay Perlen
                  </h5>
                  <p className="text-base text-[#666] leading-[20px] font-normal">Project Manager </p>
                </div>
              
              </div>

              <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-6 max-sm:col-span-12">
             
              <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man}
                  alt="menu-icon"
                  width={300}
                  height={200}
                  className="object-cover h-[300px] max-lg:h-[250px] object-top mx-auto"
                /></div>
                <div className="shadow-md p-6 text-center rounded-b-xl">
                  <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                    Jhon Brown
                  </h5>
                  <p className="text-base text-[#666] leading-[20px] font-normal">MD </p>
                </div>
              
              </div>

              <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              
              <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man1}
                  alt="menu-icon"
                  width={200}
                  height={200}
                  className="object-cover h-[300px] max-lg:h-[250px] mx-auto"
                />
                </div>
                <div className="shadow-md p-6 text-center rounded-b-xl">
                  <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                      Tim Kamerer
                  </h5>
                  <p className="text-base text-[#666] leading-[20px] font-normal">Ceo </p>
                </div>
              
              </div>
              
             

            </div>{" "}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
