"use client";

import Image from "next/image";
import { useState } from "react";
import mobileApp from "../../../public/images/mobileApp.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const [menuShowResponsive, setMenuShowResponsive] = useState(false);
  return (
    <div>
      <Header />
      <section className="project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
              Privacy Policy
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
          <div className="text-sm text-[#000] leading-[22px] font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Information Security:</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Information Collection and Use:</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Information Sharing:</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Cookies and Tracking Technologies:</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Third-Party Links:</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Childrens Privacy:</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Changes to the Privacy Policy:</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
