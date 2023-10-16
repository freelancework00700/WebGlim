"use client";

import Image from "next/image";
import highlight from "../../../public/images/highlight.png";
import About_us_our_mission from "../../../public/images/About_us_our_mission.jpg";
import About_us_our_vision from "../../../public/images/About_us_our_vision.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function About() {
  return (
    <div>
      <Header />
      <div className="project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
            About WebGlim
            </h3>
            <p className="w-1/2 mx-auto text-base leading-[26px] text-[#666] text-center mt-4 max-lg:w-full">
            At WebGlim, innovation and excellence are at the heart of everything we do. Led by our visionary CEO, Zahid Panhwar, we are on a mission to revolutionize the IT services management landscape.
            </p>
          </div>
        </div>
      </div>
      <section className="py-[100px] relative max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center max-lg:gap-4 max-lg:gap-3">
            <div className="col-span-6 relative max-md:col-span-12">
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
              At WebGlim, our mission is to be at the forefront of IT innovation, delivering cutting-edge solutions that empower businesses to thrive in the digital age. We are driven by a passion for technology and a commitment to our clients success.
              </p>
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8 max-sm:mt-4">
              With our international team of experts and a client-centric approach, we seek to revolutionize IT services management by providing custom solutions that not only meet your current needs but also pave the way for your future growth and scalability. Our dedication to excellence knows no bounds, and our goal is clear: to be your trusted partner on your journey to digital transformation and prosperity.
              </p>
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 max-md:col-span-12">
                  <div>
                    <Image
                      src={About_us_our_mission}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 items-center max-lg:gap-4 max-lg:gap-3 max-md:flex max-md:flex-col-reverse max-sm:mt-4">
            <div className="col-span-6 mt-[80px] max-sm:mt-[40px]">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 max-md:col-span-12">
                  <div>
                    <Image
                      src={About_us_our_vision}
                      alt="about image"
                      width={400}
                      height={200}
                      className="cursor-pointer cursor-pointer w-full h-[200px] object-cover max-sm:h-[170px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 relative mt-[80px] max-sm:mt-[20px] max-lg:col-span-6 ">
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
              At WebGlim, we envision a world where technology is a driving force for growth and excellence. Our vision is to empower businesses with cutting-edge IT solutions that push the boundaries of what&apos;s possible. With us, technology is not just a tool; it&apos;s a catalyst for success.
              </p>
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8 max-sm:mt-4">
              Our commitment to excellence starts with our people. Our team consists of industry experts, passionate problem solvers with years of experience in IT services management. They don&apos;t just work with technology; they live and breathe it.
              </p>
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8 max-sm:mt-4">
              With a global team and an international presence, we offer a unique perspective on IT services management. Our overseas experts bring diverse viewpoints and invaluable insights, which we integrate into every solution. Our aim is to deliver top-notch services at competitive rates.
              </p>
              <p className="text-base text-[#666] leading-[24px] font-normal mt-8 max-sm:mt-4">
              Join us on this exciting journey. At WebGlim, the future is limitless, and success is our destination.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-[100px] bg-[#ebfff5] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center">
            
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative  max-xl:text-[30px] max-xl:leading-[42px]">
            Why Choose WebGlim
            </h3>
            <p className="uppercase text-xl font-medium text-[#3d3c40] my-3">
            A Global Team, A Global Perspective
            </p>
            <p className="w-[70%] mx-auto pt-2 pb-4">What sets us apart is our global approach. We collaborate with an overseas team of experts who bring diverse perspectives and invaluable insights to the table. This international synergy allows us to deliver top-notch services at competitive rates.</p>
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
                  Innovation
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                  At WebGlim, innovation is at our core. We&apos;re dedicated to staying ahead of the technological curve, ensuring our clients always receive the latest and most efficient solutions.
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
                  Expertise
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                  Our team is made up of industry experts with extensive experience in IT services management. They&apos;re not just professionals; they are passionate problem solvers, committed to finding the best solutions for you.
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
                  Client-Centric
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                  Your success is our success. We take a client-centric approach, tailoring our services to meet your unique needs. We treat your goals as our own.
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
                  Cutting-Edge Solutions
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                  What sets us apart is our unwavering commitment to providing cutting-edge solutions. Our team explores new horizons in IT services management, pioneering innovative approaches to transform your business.
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
                  Global Reach
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                  With a global presence, we understand the nuances of international markets. This knowledge is woven into every solution we provide, ensuring you receive world-class service.
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
                  Competitive Pricing
                  </h5>
                  <p className="text-base leading-[24px] text-[#666] text-start mt-4 max-sm:mt-2">
                  Quality doesn&apos;t have to come at a premium. We offer competitive pricing without compromising on excellence, making our services accessible to a wide range of businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative overflow-hidden py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-[40px] max-sm:mb-[20px]">
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative  max-xl:text-[30px] max-xl:leading-[42px]">
              Meet With Expert Team
            </h3>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3">
            <div >
              <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man}
                  alt="menu-icon"
                  width={300}
                  height={200}
                  className="object-cover h-[300px] max-lg:h-[250px] object-top mx-auto"
                />
              </div>
              <div className="shadow-md py-6 text-center rounded-b-xl">
                <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                  Tim Kamerer
                </h5>
                <p className="text-base text-[#666] leading-[20px] font-normal">Team Leader </p>
              </div>
            </div>
            <div >
              <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man1}
                  alt="menu-icon"
                  width={200}
                  height={200}
                  className="object-cover h-[300px] max-lg:h-[250px] object-top mx-auto"
                />
              </div>
              <div className="shadow-md py-6 text-center rounded-b-xl">
                <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                  Lindsay Perlen
                </h5>
                <p className="text-base text-[#666] leading-[20px] font-normal">Project Manager </p>
              </div>
            </div>
            <div >
              <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man}
                  alt="menu-icon"
                  width={300}
                  height={200}
                  className="object-cover h-[300px] max-lg:h-[250px] object-top mx-auto"
                /></div>
              <div className="shadow-md py-6 text-center rounded-b-xl">
                <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                  Jhon Brown
                </h5>
                <p className="text-base text-[#666] leading-[20px] font-normal">MD </p>
              </div>
            </div>
            <div >
              <div className="bg-[#ebfff5] rounded-t-xl">
                <Image
                  src={man1}
                  alt="menu-icon"
                  width={200}
                  height={200}
                  className="object-cover h-[300px] object-top max-lg:h-[250px] mx-auto"
                />
              </div>
              <div className="shadow-md py-6 text-center rounded-b-xl">
                <h5 className="text-[20px] text-[#222] capitalize leading-[24px] font-bold mb-2">
                  Tim Kamerer
                </h5>
                <p className="text-base text-[#666] leading-[20px] font-normal">Ceo </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
