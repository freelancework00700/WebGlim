"use client";

import Image from "next/image";
import { useState } from "react";
import mobileApp from "../../../public/images/mobileApp.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServices() {
  const [menuShowResponsive, setMenuShowResponsive] = useState(false);
  return (
    <div>
      <Header />
      <section className="project-bg py-[100px] max-lg:py-[70px] max-sm:py-[50px] overflow-hidden">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center text-[42px] font-bold text-[#222] leading-[50px] max-xl:text-[30px] max-xl:leading-[42px]">
            Terms and Conditions
            </h3>
            <div className="w-1/2 mx-auto text-base leading-[26px] text-[#666] text-center mt-4 max-lg:w-full">
              <b className="text-[#000] text-[24px] leading-[30px]">Welcome to WebGlim!</b><br></br>
              <div className="mt-3">These terms and conditions outline the rules and regulations for the use of WebGlim&apos;s website,
                located at www.webglim.com.au.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px] relative max-lg:py-[70px] max-sm:py-[50px]">
        <div className="container mx-auto">
          <div className="text-sm text-[#000] leading-[22px] font-normal">
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use
            WebGlim if you do not agree to take all of the terms and conditions stated on this page.
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Definitions</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3 pl-[36px]">
              <ul style={{ listStyleType: 'disc' }} className="pl-1 mt-3">
                <li>&quot;WebGlim,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot; refers to WebGlim and its affiliates.</li>
                <li>&quot;You&quot; or &quot;user&quot; refers to the individual or entity accessing this website.</li>
                <li>&quot;Services&quot; refers to the IT services, solutions, and information provided by WebGlim.</li>
              </ul>
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Modification of Terms</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              WebGlim reserves the right to modify, amend, or update these terms and conditions at any time.
              Changes will be effective immediately upon posting. It is your responsibility to review these terms
              periodically for updates.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Links to Third-Party Sites</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              Our website may contain links to third-party websites or resources. These links are provided for your
              convenience. WebGlim is not responsible for the content, privacy policies, or practices of any linked
              websites. Accessing third-party websites is at your own risk.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">No Unlawful Use</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              You agree not to use our website or services for any unlawful or prohibited purposes. This includes
              but is not limited to:
              <ul style={{ listStyleType: 'disc' }} className="pl-9 mt-3">
                <li>Violating any applicable laws or regulations.</li>
                <li>Interfering with the proper functioning of our website.</li>
                <li>Attempting to gain unauthorized access to our systems or user accounts.</li>
              </ul>
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Use of User-Generated Content</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              WebGlim may allow users to submit content or materials through specific features on the website. By
              submitting such content, you grant WebGlim a non-exclusive, worldwide, royalty-free license to use,
              reproduce, modify, and distribute the content for the purpose of providing our services.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Liability Disclaimer</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              The information, services, and resources provided on our website are offered &quot;as is&quot; and without
              warranties of any kind. WebGlim and its affiliates disclaim all warranties, including but not limited to,
              implied warranties of merchantability and fitness for a particular purpose.<br></br><br></br>
              WebGlim and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential,
              or punitive damages arising out of or relating to the use or inability to use our website or services.
              This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if
              WebGlim has been advised of the possibility of such damages.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Termination/Access Restriction</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              WebGlim reserves the right, in its sole discretion, to terminate your access to the website and
              services or any portion thereof at any time, without notice.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Governing Law and Jurisdiction</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              These terms and conditions are governed by and construed in accordance with the laws of the State
              of New South Wales, Australia. You agree to submit to the exclusive jurisdiction of the courts located
              within the State of New South Wales for the resolution of any disputes arising under these terms and
              conditions.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Copyright and Trademark Notices</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              All contents of the WebGlim website are Copyright © 2023 WebGlim and/or its suppliers. All rights
              reserved.<br></br>
              Trademarks: The names of actual companies and products mentioned herein may be the trademarks
              of their respective owners.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Notices and Procedure for Copyright Infringement</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              WebGlim respects the intellectual property rights of others. If you believe that your copyrighted
              work has been copied in a way that constitutes copyright infringement and is accessible on our
              website, please contact us with the necessary information for resolution.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Contact Us</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              If you have any questions or concerns about these terms and conditions, please contact us at
              support@webglim.com.au.
            </p>
          </div>
          <div className="mt-8 max-sm:mt-6">
            <h4 className="text-[24px] font-bold text-black leading-[26px] flex">Last Updated</h4>
            <p className="text-sm text-[#000] leading-[22px] font-normal mt-3">
              These terms and conditions were last updated on 29/09/2023.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
