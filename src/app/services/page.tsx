"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import search from "../../../public/images/search.png";
import close from "../../../public/images/close.png";
import menu from "../../../public/images/menu.png";
import upArrow from "../../../public/images/up-arrow.png";
import ionic from "../../../public/images/ionic.png";
import android from "../../../public/images/android.png";
import react from "../../../public/images/react.png";
import ios from "../../../public/images/ios.png";
import mobileApp from "../../../public/images/mobileApp.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  const [menuShowResponsive, setMenuShowResponsive] = useState(false);
  return (
    <div>
      <Header />
      <section className="project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
              Our Services
            </h3>
            <p className="w-1/2 mx-auto text-base leading-[26px] text-[#666] text-center mt-4 max-lg:w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the industry standard dummy text
              ever when an unknown printer took.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6 items-center max-lg:gap-4 max-sm:gap-3">
            <div className="col-span-5 max-lg:col-span-6 max-sm:col-span-12">
              <div className="h-full w-full border-[#10e981] border-b-[6px] bg-[#ebfff5] p-4 shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
              <Image
                        src={mobileApp}
                        alt="mobileApp"
                        width={300}
                        height={100}
                        className="cursor-pointer mx-auto"
                      />
              </div>
            </div>
            <div className="col-span-7 max-lg:col-span-6 max-sm:col-span-12">
              <div className="p-6 max-sm:p-0">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase max-lg:text-[24px] max-lg:text-leading-[30px] max-sm:mt-[20px]">
                Mobile App Development
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px] max-lg:mt-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry standard dummy
                </p>
                
                <Link href="#" className="bg-[#10e981] uppercase text-sm flex items-center w-fit font-medium text-[#212527] py-2 px-4 mt-8">
                      Read More
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

            <div className="col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="p-6 max-sm:py-2 max-sm:px-0">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase max-lg:text-[24px] max-lg:text-leading-[30px]">
                    Business Analysis
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px] max-lg:mt-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry standard dummy
                </p>
                
                <Link href="#" className="bg-[#10e981] uppercase text-sm flex items-center w-fit font-medium text-[#212527] py-2 px-4 mt-8">
                      Read More
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
            <div className="col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="h-full w-full border-[#10e981] border-b-[6px] bg-[#ebfff5] p-4 shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
              <Image
                        src={mobileApp}
                        alt="mobileApp"
                        width={300}
                        height={100}
                        className="cursor-pointer mx-auto"
                      />
              </div>
            </div>
            <div className="col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="h-full w-full border-[#10e981] border-b-[6px] bg-[#ebfff5] p-4 shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
              <Image
                        src={mobileApp}
                        alt="mobileApp"
                        width={300}
                        height={100}
                        className="cursor-pointer mx-auto"
                      />
              </div>
            </div>    
            <div className="col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="p-6 max-sm:p-0">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase max-lg:text-[24px] max-lg:text-leading-[30px]">
                    Design Consultancy
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px] max-lg:mt-[20px] max-sm:mt-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry standard dummy
                </p>
                
                <Link href="#" className="bg-[#10e981] uppercase text-sm flex items-center w-fit font-medium text-[#212527] py-2 px-4 mt-8">
                      Read More
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


            <div className="col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="p-6 max-sm:p-0">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase max-lg:text-[24px] max-lg:text-leading-[30px]">
                    wordpress development
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px] max-lg:mt-[20px] max-sm:mt-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry standard dummy
                </p>
                
                <Link href="#" className="bg-[#10e981] uppercase text-sm flex items-center w-fit font-medium text-[#212527] py-2 px-4 mt-8">
                      Read More
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
            <div className="col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="h-full w-full border-[#10e981] border-b-[6px] bg-[#ebfff5] p-4 shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
              <Image
                        src={mobileApp}
                        alt="mobileApp"
                        width={300}
                        height={100}
                        className="cursor-pointer mx-auto"
                      />
              </div>
            </div> 
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
