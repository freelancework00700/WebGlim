"use client";

import Image from "next/image";
import { useState } from "react";
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
          <div className="grid grid-cols-12 gap-6 items-center max-lg:gap-4 max-sm:gap-3 max-md:flex max-md:flex-col-reverse max-md:mb-7">
            <div className="col-span-5 max-lg:col-span-6 max-sm:col-span-12 w-full">
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
                Web Design and Development
                </h4>
                <h6 className="text-[16px] font-bold text-[#555] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]">
                Unlock Your Digital Potential
                </h6>
                <p className="text-base text-[#999] leading-[22px] font-normal mt-[16px] max-lg:mt-[10px]">
                At WebGlim, we transform your vision into an engaging and efficient website. Our expert team blends creativity and technical prowess to craft visually stunning websites that are user-friendly and mobile-responsive. Your online presence is the gateway to success in the digital era.
                <br></br>
                Enhance Your Website: Consider the type of website that best suits your needs:
                </p>
                <br></br>
                <ul style={{listStyle: 'disc'}} className="pl-5">
                  <li><b>E-commerce Sites: </b>Boost online sales with secure e-commerce websites.</li>
                  <li><b>Business Portfolios: </b>Showcase your achievements and services effectively.</li>
                  <li><b>Business Portfolios: </b>Consider custom web applications for unique functionalities.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 items-center max-lg:gap-4 max-sm:gap-3 max-md:mb-7">
            <div className="col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
              <div className="p-6 max-sm:py-2 max-sm:px-0">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase max-lg:text-[24px] max-lg:text-leading-[30px]">
                Apps Design and Development
                </h4>
                <h6 className="text-[16px] font-bold text-[#555] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]">
                Turning Ideas into Apps
                </h6>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[16px] max-lg:mt-[10px]">
                WebGlim turns your ideas into intuitive and visually appealing apps. Our agile development process ensures efficient and secure app creation for iOS, Android, or cross-platform. Strengthen customer engagement, streamline processes, and boost brand loyalty through tailored mobile solutions.
                <br></br>
                Optimize Your App Strategy:
                </p>
                <br></br>
                <ul style={{listStyle: 'disc'}} className="pl-5">
                  <li><b>Native vs. Cross-Platform: </b>Choose the right app platform for your audience.</li>
                  <li><b>Regular Updates: </b>Keep apps secure and functional with regular maintenance.</li>
                </ul>
              </div>
            </div>
            <div className=" col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
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
          <div className="grid grid-cols-12 gap-6 items-center max-lg:gap-4 max-sm:gap-3 max-md:flex max-md:flex-col-reverse max-md:mb-7">
            <div className=" col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12 w-full">
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
            <div className=" col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="p-6 max-sm:p-0">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase max-lg:text-[24px] max-lg:text-leading-[30px]">
                Cloud Consulting and Migration
                </h4>
                <h6 className="text-[16px] font-bold text-[#555] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]">
                Unleash Cloud Power
                </h6>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[10px] max-lg:mt-[10px] max-sm:mt-[16px]">
                Our cloud consulting and migration services optimize your operations. We assess your infrastructure, select the ideal cloud solution, and execute a seamless migration. Cloud computing offers unmatched scalability, flexibility, and cost-efficiency, ensuring your business stays agile and competitive.
                <br></br>
                Secure and Scale Your Business:
                </p>
                <br></br>
                <ul style={{listStyle: 'disc'}} className="pl-5">
                  <li><b>Data Security: </b>Implement robust data security measures.</li>
                  <li><b>Scalability: </b>Adjust resources to match your business growth.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 items-center max-lg:gap-4 max-sm:gap-3 max-md:mb-7">
            <div className="col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
              <div className="p-6 max-sm:p-0">
                <h4 className="text-[30px] font-bold text-[#222] leading-[34px] uppercase max-lg:text-[24px] max-lg:text-leading-[30px]">
                IT Consulting and Business Optimization
                </h4>
                <h6 className="text-[16px] font-bold text-[#555] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]">
                Strategize for Success
                </h6>
                <p className="text-base text-[#666] leading-[22px] font-normal mt-[16px] max-lg:mt-[10px] max-sm:mt-[10px]">
                We optimize your IT strategy, streamline operations, and boost productivity. Through a thorough assessment and tailored solutions, we enhance your IT infrastructure. Efficient IT operations reduce costs, improve productivity, and provide a foundation for future growth.
                <br></br>
                Empower Your Business:
                </p>
                <br></br>
                <ul style={{listStyle: 'disc'}} className="pl-5">
                  <li><b>Cybersecurity: </b>Protect your data and systems with robust cybersecurity.</li>
                  <li><b>IT Training: </b>Invest in staff IT training to maximize technology benefits.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
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
