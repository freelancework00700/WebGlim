"use client"

import Image from "next/image";
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import BrandImage1 from "../../public/images/auto.svg";
import BrandImage2 from "../../public/images/cheshire.svg";
import BrandImage3 from "../../public/images/crofts.svg";
import BrandImage4 from "../../public/images/fast-banana.svg";
import BrandImage5 from "../../public/images/greens.svg";
import BrandImage6 from "../../public/images/petes.svg";
import Chat from "../../public/images/chat.png";
import ArrowIllustration from "../../public/images/down-chevron.png";
import highlight2 from "../../public/images/highlight2.png";
import highlight3 from "../../public/images/highlight3.png";
import aboutCompanyImage from "../../public/images/About_Our_Company.png";
import webDevelopmentImage from "../../public/images/Web_Development_2.jpg";
import appDevelopmentImage from "../../public/images/App_Development.jpg";
import cloudServiceImage from "../../public/images/Cloud_Consulting.jpg";
import itConsultingImage from "../../public/images/IT_Consulting_2.jpg";
import image3 from "../../public/images/image3.png";
import testimonialsImage1 from "../../public/images/What_people_say.jpg";
import testimonialsImage2 from "../../public/images/testinomial-2.jpg";
import heroImage1 from "../../public/images/Hero1.png";
import heroImage2 from "../../public/images/Hero2.png";
import heroImage3 from "../../public/images/Hero3.png";
import heroImage4 from "../../public/images/Hero4.png";
import line from "../../public/images/line.png";
import like from "../../public/images/like.png";
import next from "../../public/images/next.png";
import quote from "../../public/images/quote.png";
import Blog_1_image from "../../public/images/Blog_1_image.jpg";
import Blog_2_image from "../../public/images/Blog_2_image.jpg";
import Blog_3_image from "../../public/images/Blog_3_image.jpg";
import Blog_4_image from "../../public/images/Blog_4_image.jpg";
import blogger1 from "../../public/images/blogger.jpg";
import upArrow from "../../public/images/up-arrow.png";
import downArrow from "../../public/images/downArrow.png";
import highlight from "../../public/images/highlight.png";
import SliderImage1 from "../../public/images/image1.jpg";
import ResponsiveCarousal from "../components/carousal";
import { initGA, logPageView } from '../../utils/analytics';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  const brandSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial pageview
  }, []);

  function handleScrollToBrandSection() {
    brandSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const [showContent, setShowContent] = useState(false)
  const [showContent1, setShowContent1] = useState(false)
  const [showContent2, setShowContent2] = useState(false)
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <main className="max-[1024px]:mt-[77px]">
      <Header />
      <section className="bg-[#212025] hero-slider overflow-hidden relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 pt-[50px] pb-[100px] max-lg:pb-[70px]">
            <div className="col-span-6 max-xl:col-span-6 max-lg:col-span-12">
              <div className="relative">
                <p className="text-[#858886] text-lg font-normal uppercase mt-4">
                  We Deliver Expertise In
                </p>
                <h1 className="text-[#fdfdfd] text-[48px] font-bold max-xl:text-[36px] max-[640px]:text-[32px]">
                  IT Solutions and Development
                </h1>
                <div className="absolute right-[10%] top-[100px] max-sm:right-[5%]">
                  <Image
                    src={highlight}
                    alt="menu-icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-[60px] max-sm:mt-[30px]">
                <p className="text-[#9ba09c] font-normal leading-[30px] text-base lg:w-9/12 mb-[30px] max-lg:pr-[2rem]">
                  IT Solutions and Development involves creating and implementing technology driven solutions to solve challenges, optimize processes, and enhance communication within organizations.
                  It encompasses software development, customization, and integration to improve efficiency and achieve business objectives.
                </p>
                <div className="flex gap-3">
                  <Link href="contactUs" className="bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4">
                    Book a Free Consultation
                    <Image
                      src={upArrow}
                      alt="menu-icon"
                      width={16}
                      height={16}
                      className="cursor-pointer rotate-45 ml-1"
                    />
                  </Link>
                  <Link href="/services" className=" rounded-full uppercase text-sm font-medium text-[#a1a5a1] py-2 px-4 border-[#a1a5a1] border">
                    Explore Our Services +
                  </Link>
                </div>
              </div>
              <div className="mt-[7rem] grid grid-cols-12 relative gap-3 max-lg:mt-[4rem] max-sm:mt-[3rem]">
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
            <div className="col-span-5 max-xl:col-span-5 max-lg:col-span-12 max-lg:mt-10 max-sm:mt-5">
              <ResponsiveCarousal arrow={true} dots={false} slidetoshow={1} autoplay={true}>
                <div>
                  <Image
                    src={heroImage1}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
                <div>
                  <Image
                    src={heroImage2}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
                <div>
                  <Image
                    src={heroImage3}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
                <div>
                  <Image
                    src={heroImage4}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className="object-cover h-[600px] w-full max-lg:h-[450px]"
                  />
                </div>
              </ResponsiveCarousal>
            </div>
            <div
              className="downarrow-animation absolute left-[50%] bottom-[120px] max-lg:left-[40px] max-lg:bottom-[10px]  h-[76px] w-[36px]  border border-[#10e981] rounded-[60px] px-2 py-4 max-md:hidden"
              onClick={() => handleScrollToBrandSection()}
            >
              <Image
                src={downArrow}
                alt="menu-icon"
                width={60}
                height={60}
                className="cursor-pointer w-[20px] h-auto max-sm:h-auto max-sm:w-[18px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative overflow-hidden max-lg:py-[70px] max-sm:py-[50px]" ref={brandSectionRef}>
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
                  At WebGlim, we foster enduring collaborations with our valued partners.
                  Our commitment to excellence in web development, mobile app and cloud services
                  ensures that every projects we undertake is a long-term success story.
                </p>
              </div>
            </div>

            <div className="col-span-6 max-[640px]:col-span-12 relative max-sm:pb-[30px]">
              <div className="grid grid-cols-3">
                <div className="p-4 border-[#efefef] border-2 border-l-transparent border-b-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage1}
                    alt="all brand logo image"
                    width={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-t-2 h-[125px] flex items-center">
                  <Image
                    src={BrandImage2}
                    alt="all brand logo image"
                    width={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent border-b-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage3}
                    alt="all brand logo image"
                    width={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent border-l-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage4}
                    alt="all brand logo image"
                    width={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage5}
                    alt="all brand logo image"
                    width={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
                <div className="p-4 border-[#efefef] border-2 border-r-transparent h-[125px] flex items-center">
                  <Image
                    src={BrandImage6}
                    alt="all brand logo image"
                    width={100}
                    className="cursor-pointer mx-auto object-cover"
                  />
                </div>
              </div>

              <div className=" absolute right-[30px] bottom-0 max-sm:bottom-[-50px] max-sm:right-0">
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
        <div className="absolute right-0 top-[20px] max-sm:top-0">
          <Image
            src={highlight2}
            alt="menu-icon"
            width={80}
            height={100}
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="pb-[100px] max-lg:pb-[70px] max-sm:pb-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 border-b-2 border-[#f9f9f9] pb-[30px] border-b-2 border-[#f9f9f9] items-center max-[640px]:grid-cols-1">
            <div>
              <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[60px] relative max-xl:text-[30px] max-xl:leading-[42px]">
                About Our Company
              </h3>
            </div>
            <div>
              <p className="text-[#3d3c40] font-normal leading-[30px] text-base">
                Discover the driving force behind WebGlim, where our history, values and dedicated team create a foundation for exceptional IT solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 pt-[30px] place-items-start">
            <div className="col-span-4 max-xl:col-span-5 max-md:col-span-12">
              <div>
                <Image
                  src={aboutCompanyImage}
                  alt="about image"
                  width={400}
                  height={200}
                  className="cursor-pointer rounded-t-lg max-md:w-full max-md:max-h-[330px] max-md:object-cover"
                />
              </div>
            </div>
            <div className="col-span-8 max-xl:col-span-7 max-md:col-span-12 max-sm:mt-6">
              <div>
                <div className="ps-4 mb-[40px] about-wrap max-sm:mb-[30px]">
                  <h4 className="text-xl capitalize text-[#141318] font-bold mb-4">
                    Why Choose Us?
                  </h4>
                  <p className="text-[#333] text-sm leading-[24px] font-normal">
                    <span>&quot;<b>Local Expertise, Global Excellence:</b> WebBlim combines local insights with world-class IT
                      solutions, ensuring you receive personalized service and cutting-edge technoloy perfectly alligned with the Australian market&apos;s unique demands&quot;
                    </span>
                    {/* {!showContent &&
                      <span className="text-[#10e981] cursor-pointer"
                        onClick={() => setShowContent(true)}> <b>More &#xbb;</b></span>
                    } */}
                    {/* <br></br> */}
                    {/* {showContent && */}
                    <div>
                      <span>&quot;<b>Proven Track Record:</b> With a history of successful projects in Australia, we&apos;ve earned trust
                        by consistently delivering results. Count on WebGlim for rellability, security and innovation.&quot;
                      </span><br></br>
                      <span>&quot;<b>Customers-Centric Approach:</b> At WebGlim, we prioritize your success. Our client-focused ethos means your goals are our golas.
                        Experiences unparalleled dedication and IT solutionbs that elevate your business in the Australian lanscape.&quot;
                      </span>
                      {/* <span className="text-[#10e981] cursor-pointer" onClick={() => setShowContent(false)}> <b>Less &#xbb;</b></span> */}
                    </div>
                    {/* } */}
                  </p>
                </div>
                <div className="ps-4 mb-[40px] about-wrap max-sm:mb-[30px]">
                  <h4 className="text-xl capitalize text-[#898989] font-bold mb-4">
                    What to Expect?{" "}
                  </h4>
                  <p className="text-[#333] text-sm leading-[24px] font-normal">
                    <span>&quot;<b>Tailored Solutions:</b> Expect IT solutions Customized to your precise needs, finely-turned for
                      your business goals&quot;
                    </span>
                    {/* {!showContent1 &&
                      <span className="text-[#10e981] cursor-pointer"
                        onClick={() => setShowContent1(true)}> <b>More &#xbb;</b></span>
                    } */}
                    {/* <br></br> */}
                    {/* {showContent1 && */}
                    <div>
                      <span>&quot;<b>Timely Delivery:</b> We adhere to strict timelines, ensuring your projects are completed on schedule.&quot;
                      </span><br></br>
                      <span>&quot;<b>Exceptional Support:</b> Count on WebGlim&apos;s dedicated teams for continuous assistance and support, even beyond projects completion.&quot;
                      </span>
                      {/* <span className="text-[#10e981] cursor-pointer" onClick={() => setShowContent1(false)}> <b>Less &#xbb;</b></span> */}
                    </div>
                    {/* } */}
                  </p>
                </div>
                <div className="ps-4 about-wrap">
                  <h4 className="text-xl capitalize text-[#898989] font-bold mb-4">
                    What We Deliver
                  </h4>
                  <p className="text-[#333] text-sm leading-[24px] font-normal">
                    <span>&quot;<b>Innovative Solutions:</b> We deliver cutting-edge IT solutions that drive innovation, helping you stay ahead in your industry.&quot;
                    </span>
                    {/* {!showContent2 &&
                      <span className="text-[#10e981] cursor-pointer"
                        onClick={() => setShowContent2(true)}> <b>More &#xbb;</b></span>
                    }
                    <br></br> */}
                    {/* {showContent2 && */}
                    <div>
                      <span>&quot;<b>Quality Assurance:</b> Expect top-notch quality in every projects we undertake, ensuring your digital success.&quot;
                      </span><br></br>
                      <span>&quot;<b>Business Growth:</b> Our solutions are designed to not only meet your current needs but also to pave the way for your future growth and scalability.&quot;
                      </span>
                      {/* <span className="text-[#10e981] cursor-pointer" onClick={() => setShowContent2(false)}> <b>Less &#xbb;</b></span> */}
                    </div>
                    {/* } */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-[#212025] overflow-hidden max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6 max-xl:col-span-7 max-lg:col-span-12">
              <div>
                <p className="uppercase text-base font-normal text-[#858585]">
                  What we do
                </p>
                <h3 className="text-[42px] text-[#fcfcfc] font-bold leading-[60px] relative xl:w-3/5 max-xl:pr-[30px] max-xl:text-[30px] max-xl:leading-[42px]">
                  We Run all kinds of Services that your Success
                </h3>
              </div>
              <div className="pl-[30px] pt-[30px] max-w-max">
                <div
                  className={`text-xl font-semibold capitalize text-[#a9afa9] success-text  pl-4 mb-[40px] hover:text-[#10e981] 
                                   hover:border-l hover:border-[#10e981] max-sm:mb-[20px] ${sliderIndex === 0 && 'border-[#10e981] border-l '}`}
                  onClick={() => {
                    setSliderIndex(0)
                  }}
                >
                  <p className={`w-fit  cursor-pointer ${sliderIndex === 0 && 'success-text text-[#10e981] border-b border-[#10e981]'}`}>Web Development</p>
                </div>
                <div
                  className={`text-xl font-semibold capitalize text-[#a9afa9] success-text  pl-4 mb-[40px] hover:text-[#10e981] 
                  hover:border-l hover:border-[#10e981] max-sm:mb-[20px] ${sliderIndex === 1 && 'border-[#10e981] border-l '}`}
                  onClick={() => { setSliderIndex(1) }}
                >
                  <p className={`w-fit  cursor-pointer ${sliderIndex === 1 && 'success-text text-[#10e981] border-b border-[#10e981]'}`}>Mobile App Development</p>
                </div>
                <div
                  className={`text-xl font-semibold capitalize text-[#a9afa9] success-text  pl-4 mb-[40px] hover:text-[#10e981] 
                  hover:border-l hover:border-[#10e981] max-sm:mb-[20px] ${sliderIndex === 2 && 'border-[#10e981] border-l '}`}
                  onClick={() => { setSliderIndex(2) }}
                >
                  <p className={`w-fit  cursor-pointer ${sliderIndex === 2 && 'success-text text-[#10e981] border-b border-[#10e981]'}`}>
                    Cloud Service</p>
                </div>
                <div
                  className={`text-xl font-semibold capitalize text-[#a9afa9] success-text  pl-4 mb-[40px] hover:text-[#10e981] 
                  hover:border-l hover:border-[#10e981] max-sm:mb-[20px] ${sliderIndex === 3 && 'border-[#10e981] border-l '}`}
                  onClick={() => { setSliderIndex(3) }}
                >
                  <p className={`w-fit  cursor-pointer ${sliderIndex === 3 && 'success-text text-[#10e981] border-b border-[#10e981]'}`}>
                    IT Consulting</p>
                </div>


                <Link href="/services" className="ml-3 bg-[#10e981] rounded-full uppercase text-sm flex items-center  font-medium text-[#212527] py-2 px-4 w-fit">
                  More Service +
                </Link>


              </div>
            </div>
            <div className="col-span-6 success-slider max-xl:col-span-5 max-lg:col-span-12 max-lg:mt-10">
              <ResponsiveCarousal arrow={false} dots={true} slidetoshow={1} autoplay={true} sliderIndex={sliderIndex} setSliderIndex={setSliderIndex}>
                <div className="relative ">
                  <Image
                    src={webDevelopmentImage}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full  object-cover max-lg:h-[395px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#8d8d8d] font-normal mb-4 line-clamp-4">
                      <b>Web Development:</b> Explore our portfolio of custom web applications, meticulously tailored to meet diverse business needs. Our expert team leverages cutting-edge technologies, to deliver innovative and highly scalable solutions. As your trusted CMS development partner, we prioritize customization, boasting certifications in leading platforms such as WordPress and Drupal. Our unwavering commitment to ongoing support guarantees a seamless digital presence with regular updates, robust security enhancements, and vigilant proactive monitoring
                    </p>
                    <Link href="/services" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
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
                    src={appDevelopmentImage}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full  object-cover max-lg:h-[395px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#a1a1a1] font-normal mb-4 line-clamp-4">
                      <b>Mobile App Development:</b> Elevate your digital presence with our top-tier native apps for iOS and Android. Dive into our extensive portfolio available on the App Store and Google Play for a firsthand look at our exceptional user experiences. Discover the immense advantages of cross-platform development using React Native, a strategic choice that not only saves you valuable time but also conserves resources. Furthermore, explore the remarkable benefits of Progressive Web Apps (PWAs) designed for the Australian market, ensuring lightning-fast performance and offline accessibility.
                    </p>
                    <Link href="/services" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
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
                    src={cloudServiceImage}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full object-cover max-lg:h-[395px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#a1a1a1] font-normal mb-4 line-clamp-4">
                      <b>Cloud Services:</b> Rely on our seasoned expertise to ensure a seamless migration of your systems and data to cloud platforms. Our efficient cloud management team optimizes your cloud environment, emphasizing cost-effectiveness and high-performance delivery. Count on us as your trusted advisors to architect the perfect cloud strategies and infrastructures for Australian businesses. Our vast knowledge ensures enhanced scalability, reduced operational costs, superior performance, and the successful execution of cloud initiatives, liberating your resources to focus on your core business activities.
                    </p>
                    <Link href="/services" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
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
                    src={itConsultingImage}
                    alt="menu-icon"
                    width={300}
                    height={200}
                    className=" h-[600px] w-full object-cover max-lg:h-[395px]"
                  />
                  <div className=" absolute bottom-0 p-6 service-slider">
                    <p className="text-base leading-[22px] text-[#a1a1a1] font-normal mb-4 line-clamp-4">
                      <b>IT Consulting Services:</b> Our dedicated team provides strategic IT guidance to Australian businesse aligning your technology adoption and infrastructure with your unique objectives. With a profound understanding of the Australian IT landscape, we craft personalized strategies aimed at empowering your organization with cutting edge solutions, fueling growth, and achieving operational excellence
                    </p>
                    <Link href="/services" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
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

      <section className="pt-[100px] pb-[30px] relative max-lg:pt-[70px] max-sm:pt-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5 items-center  border-b-2 border-[#f9f9f9] pb-3 relative">
            <div className="col-span-5 max-[640px]:col-span-12">
              <div>
                <p className="uppercase text-base font-normal text-[#3d3c40]">
                  Blog
                </p>
                <h3 className="text-[#1d1c20] text-[30px] font-bold capitalize leading-[60px] relative xl:pe-[5rem] max-xl:text-[30px] max-xl:leading-[42px]">
                  Unlocking Business Potential: The Power of MERN Stack Development
                </h3>
              </div>
            </div>
            <div className="col-span-7 max-[640px]:col-span-12">
              <div className="flex justify-between items-center flex-wrap">
                <p className="text-[#3d3c40] font-normal leading-[30px] text-base w-1/2 max-[640px]:w-full">
                  Discover MERN Stack&apos;s dynamic potential for business growth, speed, scalability, and exceptional user experiences. Transform your future.
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
            <ResponsiveCarousal arrow={false} dots={true} slidetoshow={1} autoplay={false}>
              <div className="lg:pb-0 pb-5">
                <div className="grid grid-cols-12 gap-5 pt-10">
                  <div className="col-span-5 max-lg:col-span-12">
                    <div className="xl:mx-4 max-xl:mx-4 blog-shadow relative max-lg:mx-0">
                      <Image
                        src={Blog_1_image}
                        alt="menu-icon"
                        width={300}
                        height={200}
                        className="object-cover h-[320px] w-full max-lg:h-[320px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 max-lg:col-span-12 border-l-2 border-[#f3f3f3] max-sm:border-transparent max-sm:border-l-2">
                    <div className="pl-10 max-sm:pl-0 max-lg:pl-5">
                      <div className="flex items-center justify-between py-[2rem] max-[640px]:pt-[1rem] max-[640px]:pb-[1.5rem]">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              src={blogger1}
                              alt="user image"
                              width={50}
                              height={50}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="pl-4">
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                              By Zahid Panhwar
                            </h5>
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                              September 2023
                            </h5>
                          </div>
                        </div>
                        {/* <div className="flex items-center justify-between">
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
                        </div> */}
                      </div>
                      <h4 className="text-xl font-bold text-[#0f0f0f] leading-[45px] border-b-2 border-[#f3f3f3] line-clamp-1">
                        MERN Stack: Driving Business Growth through Innovation
                      </h4>
                      <p className="text-base leading-[26px] text-[#0f0f0f] font-normal mb-4 pt-5 article-content line-clamp-4">
                        In today&apos;s digitally driven business landscape, staying competitive and relevant requires more than just a mere online presence. It demands an agile, feature-rich, and scalable web application that can adapt to the ever-evolving market demands. This is where MERN Stack Development comes into play, offering businesses in Australia and beyond a powerful tool to unlock their full potential.
                      </p>
                      <Link href="/blogs" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                        Read more
                        <Image
                          src={next}
                          alt="menu-icon"
                          width={20}
                          height={20}
                          className="carousel-inner-img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pb-0 pb-5">
                <div className="grid grid-cols-12 gap-5 pt-10">
                  <div className="col-span-5 max-lg:col-span-12">
                    <div className="xl:mx-4 max-xl:mx-4 blog-shadow relative max-lg:mx-0">
                      <Image
                        src={Blog_2_image}
                        alt="menu-icon"
                        width={300}
                        height={200}
                        className="object-cover h-[320px] w-full max-lg:h-[320px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 max-lg:col-span-12 border-l-2 border-[#f3f3f3] max-sm:border-transparent max-sm:border-l-2">
                    <div className="pl-10 max-sm:pl-0 max-lg:pl-5">
                      <div className="flex items-center justify-between py-[2rem] max-[640px]:pt-[1rem] max-[640px]:pb-[1.5rem]">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              src={blogger1}
                              alt="user image"
                              width={50}
                              height={50}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="pl-4">
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                              By Zahid Panhwar
                            </h5>
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                              September 2023
                            </h5>
                          </div>
                        </div>
                        {/* <div className="flex items-center justify-between">
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
                        </div> */}
                      </div>
                      <h4 className="text-xl font-bold text-[#0f0f0f] leading-[45px] border-b-2 border-[#f3f3f3] line-clamp-1">
                        Progressive Web Apps (PWAs): A Game Changer for Australian Businesses
                      </h4>
                      <p className="text-base leading-[26px] text-[#0f0f0f] font-normal mb-4 pt-5 article-content line-clamp-4">
                        In today&apos;s digital age, the way we access and interact with the web is constantly evolving. With the surge in mobile device usage and the need for faster, more efficient web experiences, businesses are seeking innovative solutions that bridge the gap between traditional websites and mobile apps. This is where Progressive Web Apps (PWAs) come into play, heralding a new era of web technology, and offering a game-changing approach for Australian businesses.
                      </p>
                      <Link href="/blogs" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                        Read more
                        <Image
                          src={next}
                          alt="menu-icon"
                          width={20}
                          height={20}
                          className="carousel-inner-img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pb-0 pb-5">
                <div className="grid grid-cols-12 gap-5 pt-10">
                  <div className="col-span-5 max-lg:col-span-12">
                    <div className="xl:mx-4 max-xl:mx-4 blog-shadow relative max-lg:mx-0">
                      <Image
                        src={Blog_3_image}
                        alt="menu-icon"
                        width={300}
                        height={200}
                        className="object-cover h-[320px] w-full max-lg:h-[320px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 max-lg:col-span-12 border-l-2 border-[#f3f3f3] max-sm:border-transparent max-sm:border-l-2">
                    <div className="pl-10 max-sm:pl-0 max-lg:pl-5">
                      <div className="flex items-center justify-between py-[2rem] max-[640px]:pt-[1rem] max-[640px]:pb-[1.5rem]">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              src={blogger1}
                              alt="user image"
                              width={50}
                              height={50}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="pl-4">
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                              By Zahid Panhwar
                            </h5>
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                              September 2023
                            </h5>
                          </div>
                        </div>
                        {/* <div className="flex items-center justify-between">
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
                        </div> */}
                      </div>
                      <h4 className="text-xl font-bold text-[#0f0f0f] leading-[45px] border-b-2 border-[#f3f3f3] line-clamp-1">
                        The Impact of Cross-Platform Development with React Native on Mobile Apps
                      </h4>
                      <p className="text-base leading-[26px] text-[#0f0f0f] font-normal mb-4 pt-5 article-content line-clamp-4">
                        In the fast-paced world of mobile app development, businesses are constantly seeking more efficient ways to reach a broader audience without breaking the bank. With the rise of smartphones and the ever-expanding array of devices, cross-platform development has become a game-changer for many businesses, allowing them to streamline their mobile app development efforts. One of the leading technologies in this space is React Native, a framework developed by Facebook. In this blog, we&apos;ll explore the impact of cross-platform development with React Native on mobile apps and how it can benefit businesses looking to maximize their mobile presence.
                      </p>
                      <Link href="/blogs" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                        Read more
                        <Image
                          src={next}
                          alt="menu-icon"
                          width={20}
                          height={20}
                          className="carousel-inner-img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pb-0 pb-5">
                <div className="grid grid-cols-12 gap-5 pt-10">
                  <div className="col-span-5 max-lg:col-span-12">
                    <div className="xl:mx-4 max-xl:mx-4 blog-shadow relative max-lg:mx-0">
                      <Image
                        src={Blog_4_image}
                        alt="menu-icon"
                        width={300}
                        height={200}
                        className="object-cover h-[320px] w-full max-lg:h-[320px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 max-lg:col-span-12 border-l-2 border-[#f3f3f3] max-sm:border-transparent max-sm:border-l-2">
                    <div className="pl-10 max-sm:pl-0 max-lg:pl-5">
                      <div className="flex items-center justify-between py-[2rem] max-[640px]:pt-[1rem] max-[640px]:pb-[1.5rem]">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              src={blogger1}
                              alt="user image"
                              width={50}
                              height={50}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="pl-4">
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic mb-1">
                              By Zahid Panhwar
                            </h5>
                            <h5 className="text-base text-[#0f0f0f] font-semibold leading-[16px] italic">
                              September 2023
                            </h5>
                          </div>
                        </div>
                        {/* <div className="flex items-center justify-between">
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
                        </div> */}
                      </div>
                      <h4 className="text-xl font-bold text-[#0f0f0f] leading-[45px] border-b-2 border-[#f3f3f3] line-clamp-1">
                        Unveiling the World of High-End Web Solutions
                      </h4>
                      <p className="text-base leading-[26px] text-[#0f0f0f] font-normal mb-4 pt-5 article-content line-clamp-4">
                        <strong>Introduction: The Digital Frontier</strong><br></br>
                        In today&apos;s digital landscape, where every pixel counts, your online presence is the gateway to success. To make a lasting impression, you need more than just a website; you need a high-end web solution. Buckle up as we venture into a realm where innovation, customization, and excellence collide.
                      </p>
                      <Link href="/blogs" className="text-base font-semibold text-[#10e981] flex items-center cursor-pointer">
                        Read more
                        <Image
                          src={next}
                          alt="menu-icon"
                          width={20}
                          height={20}
                          className="carousel-inner-img"
                        />
                      </Link>
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
                What People Say About Webglim...
              </h3>
            </div>
            <div className="col-span-5 max-[640px]:col-span-12">
              <p className="text-[#3d3c40] font-normal leading-[30px] text-base">
                Hear firsthand accounts from our delighted customers as they share their experiences with Webglim&apos;s top-tier solutions, <br></br><span className="opacity-75">join us and elevate your business today!</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative testimonial-slider">
          <div className="absolute left-0 top-[40px] before:bg-[#000] w-1/2 before:h-full before:w-full before:top-0 before:right-0 before:absolute before:opacity-80 max-[1279px]:hidden">
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
            <ResponsiveCarousal arrow={true} dots={false} slidetoshow={1} autoplay={false}>
              <div className="relative">
                <div className="grid grid-cols-12 pt-10">
                  <div className="col-span-6 max-[640px]:col-span-12">
                    <div className="relative blog-shadow">
                      <Image
                        src={testimonialsImage1}
                        alt="menu-icon"
                        width={400}
                        height={100}
                        className="object-cover w-full h-[618px] object-center max-sm:h-[400px]"
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
                        WebGlim&apos;s top-tier IT solutions have proven to be a game-changer for our business. Their unwavering commitment to excellence and innovative approach have set them apart in the industry. With WebGlim, success isn&apos;t just a destination; it&apos;s an ongoing journey of growth and transformation. Their dedication to delivering results and adapting to the ever-evolving digital landscape has been a key driver of our success. Join them today and experience the remarkable impact of WebGlim&apos;s expertise on your business.
                      </p>
                      <div className="pl-8 py-[3rem] max-lg:py-[1.5rem]">
                        <h5 className="text-base text-[#fff] font-semibold leading-[16px]  mb-2">
                          Atta
                        </h5>
                        <p className="text-[12px] text-[#a9afa9] font-semibold leading-[16px] ">
                          Adelaide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-12 pt-10">
                  <div className="col-span-6 max-[640px]:col-span-12">
                    <div className="relative blog-shadow">
                      <Image
                        src={testimonialsImage2}
                        alt="menu-icon"
                        width={400}
                        height={100}
                        className="object-cover w-full h-[618px] object-center max-sm:h-[400px]"
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
                        WebGlim&apos;s top-tier IT solutions have proven to be a game-changer for our business. Their unwavering commitment to excellence and innovative approach have set them apart in the industry. With WebGlim, success isn&apos;tjust a destination; it&apos;s an ongoing journey of growth and transformation. Their dedication to delivering results and adapting to the ever-evolving digital landscape has been a key driver of our success. Join them today and experience the remarkable impact of WebGlim&apos;s expertise on your business.
                      </p>
                      <div className="pl-8 py-[3rem] max-lg:py-[1.5rem]">
                        <h5 className="text-base text-[#fff] font-semibold leading-[16px]  mb-2">
                          Atta
                        </h5>
                        <p className="text-[12px] text-[#a9afa9] font-semibold leading-[16px] ">
                          Adelaide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ResponsiveCarousal>
          </div>
          <div className="absolute right-0 bottom-[6px] z-[-1] w-1/2 before:bg-[#000] before:h-full before:w-full before:top-0 before:right-0 before:absolute before:opacity-80 max-[1279px]:hidden">
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

      <section className="py-[100px] explore-slider overflow-hidden relative max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className=" pb-[30px] text-center xl:w-1/2 mx-auto relative">
            <h3 className="text-[#1d1c20] text-[42px] font-bold capitalize leading-[50px] mb-[20px] relative max-xl:text-[30px] max-xl:leading-[42px]">
              Discover Our Expertly Crafted Services for Your Success
            </h3>
            <p className="text-[#3d3c40] font-normal leading-[26px] text-base">
              Explore our carefully curated selection of high-quality services designed to propel your business to the forefront of success.
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
                          className="object-cover w-full h-[600px] object-center max-lg:h-[400px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 relative max-[640px]:col-span-12">
                      <div className="px-10 pt-[4rem] max-sm:pb-[5rem] max-sm:pt-[2rem] max-sm:px-4">
                        <h4 className="text-[32px] font-medium text-[#1d1c20] leading-[40px] max-xl:text-[26px] max-xl:leading-[36px]">
                          MERN Stack Development
                        </h4>
                        <p className="text-base leading-[26px] text-[#a9afa9] font-normal pt-[20px] explore-content">
                          &quot;Leverage the exceptional capabilities of MERN stack development to create highly dynamic and feature-rich web applications. Our dedicated team of experts harnesses the power of MongoDB, Express.js, React, and Node.js to craft solutions that not only meet but exceed your expectations. With MERN stack, innovation is at the forefront, enabling your business to stay ahead in the digital landscape. Scalability is never an issue, as we design applications capable of adapting seamlessly to your growing needs. Embrace the future of web development with WebGlim&apos;s MERN stack expertise.&quot;
                          <br></br>
                          <br></br>
                          <b>Global IT Solutions</b>
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
                          className="object-cover w-full h-[600px] object-center max-lg:h-[400px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 relative max-[640px]:col-span-12">
                      <div className="px-10 pt-[4rem] max-sm:pb-[5rem] max-sm:pt-[2rem] max-sm:px-4">
                        <h4 className="text-[32px] font-medium text-[#1d1c20] leading-[40px] max-xl:text-[26px] max-xl:leading-[36px]">
                          MERN Stack Development
                        </h4>
                        <p className="text-base leading-[26px] text-[#a9afa9] font-normal pt-[20px] explore-content">
                          &quot;At WebGlim, we pride ourselves on offering global IT solutions that transcend boundaries. Our collaborative approach, bringing together international talent with local insights, ensures your business receives tailored strategies to expand its reach and impact. With a finger on the pulse of global markets, we guide you through every step of your international journey. Our solutions are designed to not only meet regulatory requirements but also to thrive in diverse cultural landscapes. Unlock your business&apos;s potential on the world stage with WebGlim&apos;s global IT solutions.&quot;
                          <br></br>
                          <br></br>
                          <b>Centric IT Consultancy</b>
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
                          className="object-cover w-full h-[600px] object-center max-lg:h-[400px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 relative max-[640px]:col-span-12">
                      <div className="px-10 pt-[4rem] max-sm:pb-[5rem] max-sm:pt-[2rem] max-sm:px-4">
                        <h4 className="text-[32px] font-medium text-[#1d1c20] leading-[40px] max-xl:text-[26px] max-xl:leading-[36px]">
                          MERN Stack Development
                        </h4>
                        <p className="text-base leading-[26px] text-[#a9afa9] font-normal pt-[20px] explore-content">
                          &quot;Our client-centric IT consultancy is a partnership built on your unique needs and objectives. We understand that no two businesses are alike, and that&apos;s why we take the time to comprehensively assess your challenges and opportunities. Our experts work closely with you to navigate the ever-changing digital landscape, crafting strategies that are specifically tailored to your success. We don&apos;tjust provide recommendations; we provide actionable plans that empower you to achieve your goals. With WebGlim&apos;s client-centric IT consultancy, your success is our mission.&quot;
                          <br></br>
                          <br></br>
                          <b>Edge Software Solutions</b>
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
                          className="object-cover w-full h-[600px] object-center max-lg:h-[400px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 relative max-[640px]:col-span-12">
                      <div className="px-10 pt-[4rem] max-sm:pb-[5rem] max-sm:pt-[2rem] max-sm:px-4">
                        <h4 className="text-[32px] font-medium text-[#1d1c20] leading-[40px] max-xl:text-[26px] max-xl:leading-[36px]">
                          MERN Stack Development
                        </h4>
                        <p className="text-base leading-[26px] text-[#a9afa9] font-normal pt-[20px] explore-content">
                          &quot;Experience the transformative impact of cutting-edge software solutions, meticulously crafted to streamline your business operations. Our team of seasoned developers and engineers stays at the forefront of technological advancements to deliver software that&apos;s not just up-to-date, but ahead of the curve. We understand that efficiency and productivity are the lifeblood of your business, and our innovative software services are designed to enhance both. From optimizing workflows to enhancing user experiences, our solutions are driven by your success. Embrace the future with WebGlim&apos;s cutting-edge software solutions.&quot;
                          <br></br>
                          <br></br>
                          <b>Edge Software Solutions</b>
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
              </ResponsiveCarousal>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
