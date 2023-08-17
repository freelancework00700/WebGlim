"use client";

import Image from "next/image";
import { useState } from "react";
import mobileApp from "../../../public/images/mobileApp.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const [menuShowResponsive, setMenuShowResponsive] = useState(false);
  return (
    <div>
      <Header />
      <section className="project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
              Contact Us
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
          <div className="grid grid-cols-12 gap-6 items-center max-lg:gap-4 max-sm:gap-3 max-md:flex max-md:flex-col-reverse max-md:mb-7">
            <div className="col-span-6 max-lg:col-span-6 max-sm:col-span-12 w-full">
            <h3 className="text-center text-[18px] font-bold text-[#222] leading-[50px] max-xl:text-[24px] max-xl:leading-[42px]">
            Contact Information
            </h3>
            </div>
            <div className="col-span-6 max-lg:col-span-6 max-sm:col-span-12">
            <h3 className="text-center text-[18px] font-bold text-[#222] leading-[50px] max-xl:text-[24px] max-xl:leading-[42px]">
            Connect With Us!
            </h3>           
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
