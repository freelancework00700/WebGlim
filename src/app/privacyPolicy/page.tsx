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
              At WebGlim, we are committed to protecting your privacy. This Privacy Policy outlines how we
              collect, use, disclose, and safeguard your personal information when you use our website and
              services. By accessing or using our website and services, you agree to the terms of this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          {/* <div className="text-sm text-[#000] leading-[22px] font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English
          </div> */}
          <div className="mb-8">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Information We Collect</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              We collect various types of information to provide you with our services effectively. The information
              we may collect includes:
              <ul style={{ listStyleType: 'decimal' }} className="pl-4 mt-3">
                <li><b>Personal Information:</b> This may include your name, contact information (email address,
                  phone number), and other details you provide when contacting us or using our services.</li>
                <li><b>Usage Data:</b> We collect information about your interactions with our website, such as your IP
                  address, browser type, pages visited, and referring pages.</li>
                <li><b>Cookies and Similar Technologies:</b>  We may use cookies and similar technologies to enhance
                  your browsing experience. You can control cookie settings through your browser preferences.</li>
              </ul>
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">How We Use Your Information</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              We use the information we collect for various purposes, including:
              <ul style={{ listStyleType: 'decimal' }} className="pl-4 mt-3">
                <li><b>Providing Services:</b> To deliver the services you request, such as web design and
                  development, app development, cloud consultancy, and IT consultancy.</li>
                <li><b>Communication:</b> To respond to your inquiries, provide support, and send important updates
                  and information related to our services.</li>
                <li><b>Improving Our Services:</b> To analyse usage patterns, diagnose technical issues, and enhance
                  the functionality and performance of our website and services.</li>
                <li><b>Legal Compliance:</b> To comply with legal obligations and regulatory requirements, including
                  data retention laws.</li>
              </ul>
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Disclosure of Your Information</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              We may share your information with third parties in the following circumstances:
              <ul style={{ listStyleType: 'decimal' }} className="pl-4 mt-3">
                <li><b>Service Providers:</b> We may engage third-party service providers to assist us in delivering our
                  services, and we may share your information with them as necessary.</li>
                <li><b>Legal Obligations:</b> We may disclose your information to comply with applicable laws,
                  regulations, or legal processes.</li>
              </ul>
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Your Choices</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              You have certain rights concerning your personal information:
              <ul style={{ listStyleType: 'decimal' }} className="pl-4 mt-3">
                <li><b>Access and Correction:</b> You may request access to your personal information and correct
                  inaccuracies.</li>
                <li><b>Opt-Out:</b> You can opt out of receiving promotional communications from us by following the
                  instructions in the communications or by contacting us.</li>
              </ul>
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Security</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              We take reasonable measures to protect your personal information from unauthorized access,
              disclosure, alteration, or destruction. However, no data transmission or storage system can be
              guaranteed to be 100% secure.
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Contact Us</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              If you have any questions or concerns about our Privacy Policy, your personal information, or our
              data practices, please contact us at:
              <ul style={{ listStyleType: 'disc' }} className="pl-4 mt-3">
                <li><b>Email:</b> support@webglim.com.au</li>
              </ul>
            </p>
          </div>
          <div>
            <h4 className="text-[24px] font-bold text-black leading-[30px]">Changes to This Privacy Policy</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              We may update this Privacy Policy periodically to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. The updated Privacy Policy will be posted on our website
              with the &quot;Last Updated&quot; date.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
