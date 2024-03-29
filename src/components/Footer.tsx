"use client"

import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link'
import upArrow from "../../public/images/up-arrow.png";
import facebookIcon from "../../public/images/social_facebook.png";
import InstagramIcon from "../../public/images/social_instagram.png";
import LinkedInIcon from "../../public/images/social_linkedin.png";
import youtubeIcon from "../../public/images/social_youtube.png";
import tiktokIcon from "../../public/images/social_tiktok.png";
import GetInTouch from './GetInTouch';
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import mainLogo from "../../public/images/main-logo_horizontal.png";

const Footer = () => {
  const { toast } = useToast()
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
  });

  const FormSchema = yup.object().shape({
    name: yup.string().required("Name Should be Required"),
    email: yup
      .string()
      .required("Email address Required")
      .email("Valid email required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let response: any = await axios.post(
          "/api/sendmail",
          values
        );
        resetForm();
        toast({
          description: "Your Request has been sent.",
        })
      } catch (error: any) {
        console.log("error:", error.response.data.message);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }
    },
  });
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
      <footer className="bg-[#212025] pt-[80px] max-lg:pt-[70px] max-sm:pt-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 pb-[100px] max-lg:pb-[70px] max-sm:pb-[50px]">
            <div className="col-span-3 max-lg:col-span-5 max-[640px]:col-span-12">
              <div>
                <Link href="https://webglim.com.au/" className="cursor-pointer">
                  <Image
                    src={mainLogo}
                    alt="menu-icon"
                    height={60}
                    className="cursor-pointer"
                  />
                </Link>
                <p className="text-sm leading-[20px] text-[#a9afa9] font-normal mt-2">
                  Your Trusted Partner in It Excellence.
                  WebGlim delivers cutting-edge solutions in web development, mobile apps and
                  cloud services, driving digital transformation with innovation and expertise.
                </p>
                <div className="pt-[2rem] max-sm:pt-[1rem]">
                  <ul>
                    <li className="uppercase text-sm text-[#a9afa9] font-normal mb-2">
                      <Link href="https://webglim.com.au/contactUs" className="cursor-pointer hover:text-[#10e981]">
                        Contact Us
                      </Link>
                    </li>
                    <li className="uppercase text-sm text-[#a9afa9] font-normal mb-2">
                      <Link href="https://webglim.com.au/termsOfServices" className="cursor-pointer hover:text-[#10e981]">
                        Terms of service
                      </Link>
                    </li>
                    <li className="uppercase text-sm text-[#a9afa9] font-normal mb-2">
                      <Link href="phttps://webglim.com.au/privacyPolicy" className="cursor-pointer hover:text-[#10e981]">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="uppercase text-sm text-[#a9afa9] font-normal mb-2">
                      <Link href="sitemap" className="cursor-pointer hover:text-[#10e981]">
                        Sitemap
                      </Link>
                    </li>
                    <li className="uppercase text-sm text-[#a9afa9] font-normal mb-2">
                      <Link href="javascript: void(0)" className="cursor-pointer hover:text-[#10e981]">
                        ABN 17 924 199 107
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-4 max-lg:col-span-5 max-[640px]:col-span-12">
              <div>
                <h5 className="text-xl text-[#fff] leading-[60px] font-semibold uppercase">
                  OUR newsletter
                </h5>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mt-2">
                    <label className="capitalize text-sm text-[#a9afa9] font-normal">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border-[#3c3c3c] border-b-2 mt-3 bg-transparent w-full text-white max-sm:mt-1"
                    />
                    {formik.errors.name && formik.touched.name && (
                      <p className="alert-text">{formik.errors.name}</p>
                    )}
                  </div>
                  <div className="mt-6">
                    <label className="capitalize text-sm text-[#a9afa9] font-normal">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border-[#3c3c3c] border-b-2 mt-3 bg-transparent w-full text-white max-sm:mt-1"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="alert-text">{formik.errors.email}</p>
                    )}
                  </div>
                  <div className='mb-3 pt-3'>
                    <button
                      type="submit"
                      className="bg-[#10e981] uppercase text-sm flex items-center  font-medium text-[#212527] py-2 mt-[3rem] px-4 rounded-full w-fit max-sm:mt-8">
                      Subscribe
                      <Image
                        src={upArrow}
                        alt="menu-icon"
                        width={16}
                        height={16}
                        className="cursor-pointer rotate-45 ml-1"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 max-lg:col-span-5 max-[640px]:col-span-12">
              <div>
                <h5 className="text-xl text-[#fff] leading-[60px] font-semibold uppercase">
                  help links
                </h5>
                <ul className="mt-2">
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    <Link href="https://webglim.com.au/contactUs" >
                      Customers Service</Link>
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    <Link href="https://webglim.com.au/services" >
                      IT Department</Link>
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    <Link href="https://webglim.com.au/about" >
                      About Our Campain</Link>
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    <Link href="https://webglim.com.au/services" >
                      Business Growth</Link>
                  </li>
                  <li className="capitalize text-sm text-[#a9afa9] font-normal mb-3">
                    <Link href="https://calendly.com/webglim" target='_blank' >
                      Make An Appointment</Link>
                  </li>
                </ul>
              </div>
              <div className='flex gap-2'>
                <Link href='https://www.facebook.com/WebGlim' target='_blank' className='h-[30px] w-[30px] rounded-full bg-[#fff] flex justify-center items-center'>
                  <Image src={facebookIcon} alt='facebook' className='h-[20px] w-[20px]'></Image>
                </Link>
                <Link href='https://www.instagram.com/WebGlim' target='_blank' className='h-[30px] w-[30px] rounded-full bg-[#fff] flex justify-center items-center'>
                  <Image src={InstagramIcon} alt='instagram' className='h-[20px] w-[20px]'></Image>
                </Link>
                <Link href='https://www.linkedin.com/company/WebGlim' target='_blank' className='h-[30px] w-[30px] rounded-full bg-[#fff] flex justify-center items-center'>
                  <Image src={LinkedInIcon} alt='LinkedInIcon' className='h-[20px] w-[20px]'></Image>
                </Link>
                <Link href='https://www.youtube.com/@WebGlim' target='_blank' className='h-[30px] w-[30px] rounded-full bg-[#fff] flex justify-center items-center'>
                  <Image src={youtubeIcon} alt='youtubeIcon' className='h-[20px] w-[20px]'></Image>
                </Link>
                <Link href='https://www.tiktok.com/@WebGlim' target='_blank' className='h-[30px] w-[30px] rounded-full bg-[#fff] flex justify-center items-center'>
                  <Image src={tiktokIcon} alt='tiktokIcon' className='h-[20px] w-[20px]'></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-sm font-normal text-[#a9afa9] pb-[30px] text-center">
            © 2023 WebGlim. All Right Reserved
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer