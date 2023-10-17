"use client";

import Image from "next/image";
import project from "../../../public/images/project.png";
import project1 from "../../../public/images/project1.png";
import project2 from "../../../public/images/project2.png";
import project3 from "../../../public/images/project3.png";
import project4 from "../../../public/images/project4.png";
import project5 from "../../../public/images/project5.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className="max-[1024px]:mt-[77px]">
      <Header />
      <div className=" project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
              WebGlim Portfolio
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
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div>
                <Image
                  src={project}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[300px] object-cover max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div>
                <Image
                  src={project1}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[300px] object-cover max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div>
                <Image
                  src={project2}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[300px] object-cover max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div>
                <Image
                  src={project3}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[300px] object-cover max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div>
                <Image
                  src={project4}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[300px] object-cover max-sm:h-[200px]"
                />
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12">
              <div>
                <Image
                  src={project5}
                  alt="all brand logo image"
                  width={300}
                  height={200}
                  className="cursor-pointer w-full h-[300px] object-cover max-sm:h-[200px]"
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
