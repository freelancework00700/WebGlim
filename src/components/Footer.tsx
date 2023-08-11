"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import upArrow from "../../public/images/up-arrow.png";
import GetInTouch from './GetInTouch';

const Footer = () => {
    return (
        <>
        <section className="bg-[#10e981] py-[80px] max-lg:py-[70px] max-sm:py-[50px]">
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
      <footer className="bg-[#212025] pt-[100px] max-lg:pt-[70px] max-sm:pt-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 pb-[100px] max-lg:pb-[70px] max-sm:pb-[50px]">
            <div className="col-span-3 max-lg:col-span-5 max-[640px]:col-span-12">
              <div>
                <div>
                  <Link href="#" className="cursor-pointer text-2xl text-[#fff] leading-[26px] font-semibold">
                  Web<span className="text-[#10e981]">Glim</span>
                  </Link>
                </div>
                <div className="pt-[3rem] max-sm:pt-2">
                  <p className="text-sm leading-[20px] text-[#a9afa9] font-normal pt-[20px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="pt-[3rem] max-sm:pt-[1rem]">
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
            <div className="col-span-4 max-lg:col-span-5 max-[640px]:col-span-12">
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
                    className="border-[#3c3c3c] border-b-2 mt-3 bg-transparent w-full text-white max-sm:mt-1"
                  />
                </div>
                <div className="mt-6">
                  <label className="capitalize text-sm text-[#a9afa9] font-normal">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border-[#3c3c3c] border-b-2 mt-3 bg-transparent w-full text-white max-sm:mt-1"
                  />
                </div>

                <Link href="#" className="bg-[#10e981] uppercase text-sm flex items-center  font-medium text-[#212527] py-2 mt-[3rem] px-4 rounded-full w-fit max-sm:mt-8">
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
            <div className="col-span-3 max-lg:col-span-5 max-[640px]:col-span-12">
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
        </>
    )
}

export default Footer