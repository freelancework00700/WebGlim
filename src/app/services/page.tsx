"use client";

import Image from "next/image";
import { useState } from "react";
import webDevelopmentImage from "../../../public/images/Web_Development_innerPage.jpg";
import appDevelopmentImage from "../../../public/images/App_Development_innerPage.jpg";
import cloudServiceImage from "../../../public/images/Cloud_Computing_innerPage.jpg";
import itConsultingImage from "../../../public/images/IT_Consulting_innerPage.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
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
              Explore our Services Page to discover a world of IT solutions designed to elevate your business. From web development and mobile app creation to cloud services and strategic IT consulting, we&apos;ve got you covered. Unlock the power of technology to fuel your success and stay ahead in the digital age with our comprehensive services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6 max-lg:gap-4 max-sm:gap-3 max-md:flex max-md:flex-col-reverse max-md:mb-7 place-items-start">
            <div className="col-span-5 max-lg:col-span-6 max-sm:col-span-12 w-full ">
              <div className="h-full w-full border-[#10e981] border-b-[6px] bg-[#ebfff5] shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
                <Image
                  src={webDevelopmentImage}
                  alt="mobileApp"
                  className="cursor-pointer mx-auto object-cover mx-auto w-full h-full rounded-bl-[80px] rounded-tr-[80px] max-h-[560px]"
                />
              </div>
            </div>
            <div className="col-span-7 max-lg:col-span-6 max-sm:col-span-12 w-full">
              <div className="p-6 pt-0 max-sm:p-0">
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
                <ul style={{ listStyle: 'square' }} className="pl-5">
                  <li ><b>Custom Web Development: </b>
                    <ul style={{ listStyle: 'disc' }} className="pl-5 mb-3">
                      <li>Bespoke web applications tailored to your unique needs</li>
                      <li>Expertise in cutting-edge technologies (e.g., MERN, MEAN stack, and more)</li>
                      <li>Bringing your ideas to life with innovative solutions</li>
                    </ul>
                  </li>
                  <li ><b>E-commerce Solutions: </b>
                    <ul style={{ listStyle: 'disc' }} className="pl-5 mb-3">
                      <li>Secure, scalable, and user-friendly online shopping platforms</li>
                      <li>Seamless customer experiences</li>
                      <li>Powerful backend tools for easy store management</li>
                    </ul>
                  </li>
                  <li ><b>Business Portfolios: </b>
                    <ul style={{ listStyle: 'disc' }} className="pl-5  mb-3">
                      <li>Visually stunning and informative portfolio websites</li>
                      <li>Effective showcase of your achievements and services</li>
                      <li>Leaving a lasting impression on your audience</li>
                    </ul>
                  </li>
                  <li ><b>Technology Integration: </b>
                    <ul style={{ listStyle: 'disc' }} className="pl-5 mb-3">
                      <li>Staying at the forefront of technological advancements</li>
                      <li>Utilizing the latest stacks and modern technologies</li>
                      <li>Expertise in mobile app development and API integrations</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 max-lg:gap-4 max-sm:gap-3 max-md:mb-7 place-items-start">
            <div className="col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
              <div className="p-6 pt-0 max-sm:py-2 max-sm:px-0">
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
                <h3 className="text-[20px] font-medium text-[#222] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]"><b>Our Expertise:</b></h3>
                <ul style={{ listStyle: 'disc' }} className="pl-5 pt-3">
                  <li ><b>In-Demand App Verticals: </b>We specialize in a spectrum of verticals, including e-commerce, food delivery, fitness tracking, and real-time navigation. Our portfolio features innovative apps that have made waves in the Australian market.</li>
                  <li ><b>Platform Prowess: </b>Our deep knowledge extends to both native and cross-platform development, harnessing the true potential of platforms like iOS, Android, and cross-platform solutions. We offer strategic insights for aligning your app choice with precise business goals.</li>
                  <li ><b>Sustainable App Lifecycle: </b>Our commitment goes beyond development. We ensure the sustained success of your app with regular updates, security enhancements, and ongoing maintenance.</li>
                  <li ><b>Cutting-Edge Tech Stack: </b>We employ cutting-edge technologies such as Flutter and Firebase, guaranteeing the delivery of high-performance, aesthetically pleasing apps that adhere to the latest industry standards.</li>
                  <li ><b>User-Centric Engagement: </b>We place user experience at the core of our development philosophy, leveraging tailored mobile solutions that elevate customer engagement, streamline processes, and cultivate brand loyalty.</li>
                </ul>
              </div>
            </div>
            <div className="w-full col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
              <div className="h-full w-full object-cover border-[#10e981] border-b-[6px] bg-[#ebfff5] shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
                <Image
                  src={appDevelopmentImage}
                  alt="mobileApp"
                  className="cursor-pointer mx-auto w-full h-full rounded-bl-[80px] rounded-tr-[80px] max-h-[560px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-12 gap-6 max-lg:gap-4 max-sm:gap-3 max-md:flex max-md:flex-col-reverse max-md:mb-7 place-items-start">
            <div className=" col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12 w-full">
              <div className="h-full w-full border-[#10e981] border-b-[6px] bg-[#ebfff5] shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
                <Image
                  src={cloudServiceImage}
                  alt="mobileApp"
                  className="cursor-pointer mx-auto object-cover mx-auto w-full h-full rounded-bl-[80px] rounded-tr-[80px] max-h-[560px]"
                />
              </div>
            </div>
            <div className=" col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-sm:col-span-12">
              <div className="p-6 pt-0 max-sm:p-0">
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
                <h3 className="text-[20px] font-medium text-[#222] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]"><b>Our Services Include:</b></h3>
                <ul style={{ listStyle: 'disc' }} className="pl-5 pt-3">
                  <li ><b>Infrastructure Evaluation: </b>We conduct a thorough evaluation of your current infrastructure to identify inefficiencies, bottlenecks, and areas of improvement.</li>
                  <li ><b>Customized Cloud Solutions: </b>Based on your specific needs and objectives, we offer tailored cloud solutions. Options range from public and private cloud setups to hybrid environments that balance flexibility and control.</li>
                  <li ><b>Seamless Migration: </b>Our experts execute a seamless migration strategy, ensuring minimal disruptions and minimal downtime.</li>
                </ul>
                <br></br>
                <h3 className="text-[20px] font-medium text-[#222] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]"><b>Key Benefits:</b></h3>
                <ul style={{ listStyle: 'disc' }} className="pl-5 pt-3">
                  <li ><b>Data Security: </b>Robust data security measures are non-negotiable. Our experts implement the latest security protocols and best practices to safeguard your data.</li>
                  <li ><b>Scalability: </b>As your business grows, your cloud infrastructure scales with you. You&apos;ll always have the resources you need to meet demand.</li>
                  <li ><b>Cost-Efficiency: </b>Cloud computing reduces capital expenses and ensures optimal resource allocation, helping you achieve more with less.</li>
                  <li ><b>Competitive Edge: </b>With our cloud solutions, your business gains the competitive edge through greater agility, flexibility, and resource utilization.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 max-lg:gap-4 max-sm:gap-3 max-md:mb-7 place-items-start">
            <div className="col-span-7 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
              <div className="p-6 pt-0 max-sm:p-0">
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
                <h3 className="text-[20px] font-medium text-[#222] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]"><b>Our Services Deliver:</b></h3>
                <ul style={{ listStyle: 'disc' }} className="pl-5 pt-3">
                  <li ><b>Comprehensive IT Assessment: </b>We perform an in-depth evaluation of your current IT infrastructure to identify opportunities for enhancement.</li>
                  <li ><b>Tailored IT Solutions: </b>Our team designs and implements solutions that are custom-fit to your specific needs and objectives. This may involve system optimization, process improvement, or technology adoption.</li>
                  <li ><b>Productivity Enhancement: </b>Through our strategic approach, we aim to reduce costs, improve productivity, and create a strong foundation for your business&apos;s future growth.</li>
                </ul>
                <br></br>
                <h3 className="text-[20px] font-medium text-[#222] leading-[34px] max-lg:text-[16px] max-lg:text-leading-[20px] max-sm:mt-[20px]"><b>Key Offerings:</b></h3>
                <ul style={{ listStyle: 'disc' }} className="pl-5 pt-3">
                  <li ><b>Cybersecurity Excellence: </b>We prioritize your data and system&apos;s protection with robust cybersecurity measures, ensuring your business remains resilient against evolving threats.</li>
                  <li ><b>Investment in IT Training: </b>Equip your staff with the skills and knowledge required to maximize the benefits of technology, leading to more efficient and effective operations.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-5 mt-[80px] max-lg:mt-[70px] max-sm:mt-[30px] max-lg:col-span-6 max-md:col-span-12">
              <div className="h-full w-full border-[#10e981] border-b-[6px] bg-[#ebfff5]  shadow-[0_8px_18px_1px_rgba(0,0,0,0.2)] mx-auto rounded-bl-[80px] rounded-tr-[80px]">
                <Image
                  src={itConsultingImage}
                  alt="mobileApp"
                  className="cursor-pointer mx-auto w-full h-full rounded-bl-[80px] rounded-tr-[80px] max-h-[330px]"
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
