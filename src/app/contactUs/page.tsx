"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mail from "../../../public/images/mail2.png";
import location from "../../../public/images/location2.png";
import user from "../../../public/images/user1.png";
import mailInput from "../../../public/images/mailInput.png";
import business from "../../../public/images/business.png";
import { useToast } from "@/components/ui/use-toast"
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";

const FormSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .required("Required")
    .email("required"),
  business_type: yup.string().required("Required"),
  message: yup.string().required("Required"),
});

export default function ContactUs() {
  const { toast } = useToast()
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    business_type: "",
    message: "",
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
        console.log('response:Hardik ', response);
        toast({
          description: "Your Request has been sent.",
        })
      } catch (error: any) {
        console.log("error:", error.response.data.message);
      }
    },
  });
  return (
    <div className="max-[1024px]:mt-[77px]">
      <Header />
      <section className="project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
              Contact Us
            </h3>
            <p className="w-1/2 mx-auto text-base leading-[26px] text-[#666] text-center mt-4 max-lg:w-full">
              Connect with WebGlim to kickstart your IT Journey. Reach out for inquiries, support or collaboration. We&apos;re here to assist you, 
              committed to transforming your digital aspirations into reality.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[100px] pb-[100px] relative max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 bg-[#212025] p-12 rounded-2xl gap-10 items-center max-sm:p-6 max-lg:gap-4 max-sm:gap-3 max-md:mb-7">
            <div className="col-span-6 max-lg:col-span-12 max-sm:col-span-12 w-full max-lg:mb-10">
              <h3 className="text-start text-[20px] font-bold text-white leading-[24px] text-[24px]">
                Contact Information
              </h3>
              <p className="text-base text-[#999] leading-[22px] font-normal mt-3">
              Connect Seamlessly with WebGlim - Your Premier Gateway to Expert IT Solutions, Support and Innovation. 
              Reach Out Today to Transform Your Digital Journey!
              </p>
              <div className="flex items-start border border-[#484848] rounded-lg p-5 max-sm:p-4 mt-[60px] max-lg:mt-[20px]">
                <div className="pr-5">
                  <Image
                    src={mail}
                    alt="menu-icon"
                    width={40}
                    height={40}
                    className="cursor-pointer mt-[-2px] max-lg:w-[26px] max-lg:h-[26px]"
                  />
                </div>
                <div>
                  <h5 className="text-[18px] text-white font-semibold leading-[22px] capitalize">
                    Email Us Now
                  </h5>
                  <p className="text-sm font-normal leading-[16px] text-[#999] mt-2">
                    info@webglim.com.au
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-[40px] border border-[#484848] rounded-lg p-5 max-sm:p-4 max-sm:mt-[20px]">
                <div className="pr-5 block">
                  <Image
                    src={location}
                    alt="menu-icon"
                    width={60}
                    height={60}
                    className="cursor-pointer max-lg:w-[26px] max-lg:h-[26px] max-w-fit"
                  />
                </div>
                <div>
                  <h5 className="text-[18px] text-white font-semibold leading-[22px] capitalize">
                    Our Location
                  </h5>
                  <p className="text-sm font-normal leading-[22px] text-[#999] mt-2">
                    1-5 Mason St, North Parramatta NSW 2151
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 max-lg:col-span-12 max-sm:col-span-12">
              <div className="shadow-md rounded-xl bg-[#f5fffa] p-12 max-md:p-10 px-20">
                <h3 className="text-start text-[20px] font-bold mb-[30px] text-[#222] leading-[24px] text-[24px]">
                  Connect With Us!
                </h3>
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4 relative">
                      <Image
                        src={user}
                        alt="menu-icon"
                        width={16}
                        height={16}
                        className="cursor-pointer absolute top-[17px] left-[10px]"
                      />
                      <Input type="text"
                        placeholder="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} className="pl-8 py-6" />
                      {formik.errors.name && formik.touched.name && (
                        <p className="alert-text">{formik.errors.name}</p>
                      )}
                    </div>
                    <div className="mb-4 relative">
                      <Image
                        src={mailInput}
                        alt="menu-icon"
                        width={16}
                        height={16}
                        className="cursor-pointer absolute top-[17px] left-[10px]" />
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="pl-8 py-6" />
                      {formik.errors.email && formik.touched.email && (
                        <p className="alert-text">{formik.errors.email}</p>
                      )}
                    </div>
                    <div className="mb-4 relative">
                      <Image
                        src={business}
                        alt="menu-icon"
                        width={16}
                        height={16}
                        className="cursor-pointer absolute top-[17px] left-[10px]"
                      />
                      <Input
                        type="text"
                        placeholder="Business Type"
                        name="business_type"
                        value={formik.values.business_type}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="pl-8 py-6"
                      />
                      {formik.errors.business_type &&
                        formik.touched.business_type && (
                          <p className="alert-text">
                            {formik.errors.business_type}
                          </p>
                        )}
                    </div>
                    <div className="mb-4 relative">
                      <Textarea
                        placeholder="Message Here"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.message && formik.touched.message && (
                        <p className="alert-text">{formik.errors.message}</p>
                      )}
                    </div>
                    <div className="mb-3 pt-3">
                      <button
                        type="submit"
                        className="bg-[#10e981] rounded-md text-end ml-auto uppercase text-sm flex justify-center items-center font-semibold text-[#1d1c20] py-3 px-6 w-fit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative pb-[100px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.82229625000001!3d21.15920015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1692264196594!5m2!1sen!2sin"
              height={500}
              className="w-full col-span-12"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
