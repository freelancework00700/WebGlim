"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Blog_1_image from "../../../public/images/Blog_1_image.jpg";
import Blog_2_image from "../../../public/images/Blog_2_image.jpg";
import Blog_3_image from "../../../public/images/Blog_3_image.jpg";
import Blog_4_image from "../../../public/images/Blog_4_image.jpg";
import like from "../../../public/images/like.png";
import share from "../../../public/images/share.png";
import chat from "../../../public/images/chat.png";
import { useRouter } from "next/navigation";

export default function Blogs() {

  const router = useRouter();

  return (
    <div>
      <Header />
      <div className=" project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
              Blogs
            </h3>
            <p className="w-1/2 mx-auto text-base leading-[26px] text-[#666] text-center mt-4 max-lg:w-full">
            Dive into our Blog for expert insights, valuable tips, and stay up to date with industry trends in IT solutions. Unleash your potential in the realm of technology with our informative content, designed to keep you informed, empowered, and ahead in the digital landscape.
            </p>
          </div>
        </div>
      </div>
      <section className="relative py-[100px] max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-lg:gap-4">
            <div className="shadow-md rounded-lg" onClick={()=>router.push('/blogs/blogcontent')}>
              <div >
                <Image
                  src={Blog_1_image}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px] line-clamp-1">
                Understanding MERN Stack Development
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal blog-text leading-[24px] mt-4 line-clamp-3">
                MERN stands for MongoDB, Express.js, React, and Node.js. These four technologies, when combined, form a comprehensive and highly efficient web development stack. Each component plays a crucial role in the development process, making MERN stack an ideal choice for businesses aiming to build robust web applications.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    26 July
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={Blog_2_image}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px] line-clamp-1">
                Progressive Web Apps (PWAs): A Game Changer for Australian Businesses
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal blog-text leading-[24px] mt-4 line-clamp-3">
                In today&apos;s digital age, the way we access and interact with the web is constantly evolving. With the surge in mobile device usage and the need for faster, more efficient web experiences, businesses are seeking innovative solutions that bridge the gap between traditional websites and mobile apps. This is where Progressive Web Apps (PWAs) come into play, heralding a new era of web technology, and offering a game-changing approach for Australian businesses.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    08 Augst
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={Blog_3_image}
                  alt="all brand logo image"
                  width={200}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px] line-clamp-1">
                The Impact of Cross-Platform Development with React Native on Mobile Apps
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal blog-text leading-[24px] mt-4 line-clamp-3">
                In the fast-paced world of mobile app development, businesses are constantly seeking more efficient ways to reach a broader audience without breaking the bank. With the rise of smartphones and the ever-expanding array of devices, cross-platform development has become a game-changer for many businesses, allowing them to streamline their mobile app development efforts. One of the leading technologies in this space is React Native, a framework developed by Facebook. In this blog, we&apos;ll explore the impact of cross-platform development with React Native on mobile apps and how it can benefit businesses looking to maximize their mobile presence.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    22 September
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={Blog_4_image}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px] line-clamp-1">
                Unveiling the World of High-End Web Solutions
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal leading-[24px] mt-4 blog-text line-clamp-3">
                  <strong>Introduction: The Digital Frontier</strong><br></br>
                In today&apos;s digital landscape, where every pixel counts, your online presence is the gateway to success. To make a lasting impression, you need more than just a website; you need a high-end web solution. Buckle up as we venture into a realm where innovation, customization, and excellence collide.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    15 June
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
