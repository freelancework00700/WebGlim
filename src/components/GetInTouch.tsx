"use client"

import React, { useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image";
import getInTouch from '../../public/images/getInTouch.jpg'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const GetInTouch = () => {

    useEffect(() => {
        postMessage();
    }, [])

    async function postMessage() {

        await fetch("/api/sendmail", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: "Urvashi",
                email: "urvashi.disolutions@gmail.com",
                business_type: "manager",
                message: "Succes"
            })
        })
    }

    return (
        <Dialog>
            <DialogTrigger>
                Get in touch +
            </DialogTrigger>
            <DialogContent>
                <DialogDescription>
                    <div className='grid grid-cols-12 border-t border-t-4 border-[#10e981]'>
                        <div className='col-span-6 max-md:hidden'>
                            <Image src={getInTouch} alt="getInTouch" className='h-full w-full object-cover object-center'></Image>
                        </div>
                        <div className='col-span-6 max-md:col-span-12'>
                            <div className='p-6 py-10 text-center'>
                                <DialogTitle className='text-3xl text-[#102d5e] mb-4'>Get A Quote</DialogTitle>
                                <DialogDescription className='text-[18px] mb-7 leading-6'>
                                    Let us help you achieve your business goals
                                </DialogDescription>
                                <div className='mb-3'>
                                    <Input type="text" placeholder="Name" />
                                </div>
                                <div className='mb-3'>
                                    <Input type="email" placeholder="Email" />
                                </div>
                                <div className='mb-3'>
                                    <Input type="text" placeholder="Business Type" />
                                </div>
                                <div className='mb-3'>
                                    <Textarea placeholder="Message Here" />
                                </div>
                                <div className='mb-3 pt-3'>
                                    <Link href="#" className="bg-[#10e981] rounded-md uppercase text-sm flex w-full justify-center items-center font-semibold text-[#1d1c20] py-3 px-4 w-fit">
                                        Get A Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default GetInTouch