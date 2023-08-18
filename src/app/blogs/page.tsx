"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import image1 from "../../../public/images/image1.jpg";
import image2 from "../../../public/images/image2.png";
import image3 from "../../../public/images/image3.png";
import image4 from "../../../public/images/image4.jpg";
import like from "../../../public/images/like.png";
import share from "../../../public/images/share.png";
import chat from "../../../public/images/chat.png";

export default function Blogs() {
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the industry standard dummy text
              ever when an unknown printer took.
            </p>
          </div>
        </div>
      </div>
      <section className="relative py-[100px] max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-lg:gap-4">
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={image3}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px]">
                  Lorem Ipsum is simply
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal blog-text leading-[24px] mt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the suffered alteration in dont look even
                  slightly believable.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    26 July
                  </div>
                  {/* <div className="flex items-center">
                    <Image
                      src={like}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={share}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={chat}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={image1}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px]">
                  Lorem Ipsum is simply
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal blog-text leading-[24px] mt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the suffered alteration in dont look even
                  slightly believable.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    08 Augst
                  </div>
                  {/* <div className="flex items-center">
                    <Image
                      src={like}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={share}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={chat}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={image4}
                  alt="all brand logo image"
                  width={200}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px]">
                  Lorem Ipsum is simply
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal blog-text leading-[24px] mt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the suffered alteration in dont look even
                  slightly believable.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    22 September
                  </div>
                  {/* <div className="flex items-center">
                    <Image
                      src={like}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={share}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={chat}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={image2}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px]">
                  Lorem Ipsum is simply
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal leading-[24px] mt-4 blog-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the suffered alteration in dont look even
                  slightly believable.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    15 June
                  </div>
                  {/* <div className="flex items-center">
                    <Image
                      src={like}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={share}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={chat}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={image4}
                  alt="all brand logo image"
                  width={200}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px]">
                  Lorem Ipsum is simply
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal blog-text leading-[24px] mt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the suffered alteration in dont look even
                  slightly believable.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    22 September
                  </div>
                  {/* <div className="flex items-center">
                    <Image
                      src={like}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={share}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={chat}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg">
              <div>
                <Image
                  src={image2}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[250px] object-cover rounded-t-lg max-sm:h-[200px]"
                />
              </div>
              <div className="p-5 bg-[#ebfff5]">
                <h5 className="text-[20px] font-bold text-[#222] leading-[22px]">
                  Lorem Ipsum is simply
                </h5>
                <p className="text-base text-[#b1b1b1] font-normal leading-[24px] mt-4 blog-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the suffered alteration in dont look even
                  slightly believable.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-base text-[#a1a1a1] leading-[18px] font-normal">
                    15 June
                  </div>
                  {/* <div className="flex items-center">
                    <Image
                      src={like}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={share}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover me-3"
                    />
                    <Image
                      src={chat}
                      alt="all brand logo image"
                      width={16}
                      height={16}
                      className="cursor-pointer object-cover"
                    />
                  </div> */}
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
