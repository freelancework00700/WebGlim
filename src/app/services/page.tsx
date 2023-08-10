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

export default function Services() {
  const [menuShowResponsive, setMenuShowResponsive] = useState(false);
  return (
    <div>
      <div className="bg-[#212025] overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 border-b-2 border-[#2c2c2c] relative">
            <div className="flex items-center">
              <div className="main-logo me-[5rem]">
                <Link
                  href="#"
                  className="text-[#e7e7e8] text-3xl font-semibold cursor-pointer"
                >
                  Web<span className="text-[#10e981]">Glim</span>
                </Link>
              </div>
              <div className="hidden lg:flex">
                <nav>
                  <ul className="flex items-center">
                    <li className="px-4">
                      <Link
                        href="/"
                        className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="px-4">
                      <Link
                        href="/about"
                        className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li className="px-4">
                      <Link
                        href="/services"
                        className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="px-4">
                      <Link
                        href="/projects"
                        className="text-sm font-medium leading-[16px] text-[#afaeb0] cursor-pointer hover:text-white"
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden lg:flex">
                <Link
                  href="#"
                  className="text-sm text-[#a2a2a3] font-medium leading-[16px] pe-4 border-[#79787b] border-r-2 cursor-pointer"
                >
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
              <div
                className="bg-[#fefefe26] rounded-sm p-2 lg:hidden flex"
                onClick={() => setMenuShowResponsive(!menuShowResponsive)}
              >
                {!menuShowResponsive ? (
                  <>
                    <Image
                      src={menu}
                      alt="menu-icon"
                      width={18}
                      height={18}
                      className="cursor-pointer invert"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={close}
                      alt="menu-icon-new"
                      width={18}
                      height={18}
                      className="cursor-pointer invert"
                    />
                  </>
                )}
              </div>
            </div>
            {menuShowResponsive && (
              <div className="absolute w-full top-[70px] z-10">
                <div className="bg-[#fff] p-3 px-5">
                  <nav>
                    <ul className="flex items-center flex-col">
                      <li className="py-2">
                        <Link
                          href="#"
                          className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="#"
                          className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white"
                        >
                          About
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="#"
                          className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="#"
                          className="text-sm font-medium leading-[16px] text-[#1d1c21] cursor-pointer hover:text-white"
                        >
                          Projects
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="text-center py-4">
                    <Link
                      href="#"
                      className="text-sm text-[#1d1c21] font-medium leading-[16px] cursor-pointer"
                    >
                      <span className="text-[#10e981]">Call Us:</span>{" "}
                      (+080)1234567890
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="project-bg py-[100px]">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px]">
              Our Services
            </h3>
            <p className="w-1/2 mx-auto text-base leading-[26px] text-[#666] text-center mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the industry standard dummy text
              ever when an unknown printer took.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-5">
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
            <div className="col-span-7">
              <div className="p-6">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase">
                Mobile App Development
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px]">
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

            <div className="col-span-7 mt-[80px]">
              <div className="p-6">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase">
                    Business Analysis
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px]">
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
            <div className="col-span-5 mt-[80px]">
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
            <div className="col-span-5 mt-[80px]">
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
            <div className="col-span-7 mt-[80px]">
              <div className="p-6">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase">
                    Design Consultancy
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px]">
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


            <div className="col-span-7 mt-[80px]">
              <div className="p-6">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase">
                    wordpress development
                </h4>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[30px]">
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
            <div className="col-span-5 mt-[80px]">
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

      <section className="bg-[#10e981] py-[80px]">
        <div className="container mx-auto">
          <div className="mx-auto text-center w-1/2 max-[640px]:w-full">
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[50px] mb-[20px] relative max-xl:text-[30px] max-xl:leading-[42px]">
              Have a project of your own?
            </h3>
            <p className="text-[#3d3c40] font-semibold leading-[26px] text-base mb-[30px]">
              Small or big, we have got you covered!
            </p>

            <Link
              href="#"
              className="bg-[#fff] uppercase text-sm flex mx-auto rounded-full items-center  font-medium text-[#1d1c20] py-2 px-4 w-fit"
            >
              Get in touch +
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-[#212025] pt-[100px] max-lg:pt-[70px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 pb-[100px] max-lg:pb-[70px]">
            <div className="col-span-3 max-[640px]:col-span-12">
              <div>
                <div>
                  <Link
                    href="#"
                    className="cursor-pointer text-2xl text-[#fff] leading-[26px] font-semibold"
                  >
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

                <Link
                  href="#"
                  className="bg-[#10e981] uppercase text-sm flex items-center  font-medium text-[#212527] py-2 mt-[3rem] px-4 rounded-full w-fit"
                >
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
    </div>
  );
}
