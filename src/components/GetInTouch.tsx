"use client"

import React, { useState, useEffect } from 'react'
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
import { useToast } from "@/components/ui/use-toast"
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

const FormSchema = yup.object().shape({
    name: yup.string().required("Name Should be Required"),
    email: yup
        .string()
        .required("Email address Required")
        .email("Valid email required"),
    business_type: yup.string().required("Business Type Should be Required"),
    message: yup.string().required("Message Should be Required"),
});

const GetInTouch = () => {
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
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='mb-3'>
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}

                                        />
                                        {formik.errors.name && formik.touched.name && (
                                            <p className="alert-text">{formik.errors.name}</p>
                                        )}
                                    </div>
                                    <div className='mb-3'>
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <p className="alert-text">{formik.errors.email}</p>
                                        )}
                                    </div>
                                    <div className='mb-3'>
                                        <Input
                                            type="text"
                                            placeholder="Business Type"
                                            name="business_type"
                                            value={formik.values.business_type}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.business_type &&
                                            formik.touched.business_type && (
                                                <p className="alert-text">
                                                    {formik.errors.business_type}
                                                </p>
                                            )}
                                    </div>
                                    <div className='mb-3'>
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
                                    <div className='mb-3 pt-3'>
                                        <button
                                            type="submit"
                                            className="bg-[#10e981] rounded-md uppercase text-sm flex w-full justify-center items-center font-semibold text-[#1d1c20] py-3 px-4 w-fit">
                                            Get A Quote
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default GetInTouch