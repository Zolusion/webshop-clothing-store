"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import Router from "next/router";

const data = [
    {
        title: "Contact Us",
        subTitle: "We love to hear from you. Please fill out the form below and we get back to you as soon as possible.",
    },
    {
        title: "Name",
    },
    {
        title: "Surname",
    },
    {
        title: "Email",
    },
    {
        title: "Phone",
        subTitle: "Optional",
    },
    {
        title: "How can we help you?",
        subTitle: "Max 500 characters",
    },
];

export default function ClientComponent() {
    const [success, setSuccess] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const contactFormSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("Name is required")
            .test(
                "max-length",
                "Name must be at most 50 characters",
                (value) => {
                    return value ? value.length <= 50 : true;
                }
            ),
        lastName: Yup.string()
            .required("Surname is required")
            .test(
                "max-length",
                "Surname must be at most 50 characters",
                (value) => {
                    return value ? value.length <= 50 : true;
                }
            ),
        email: Yup.string()
            .email("Email is not valid")
            .required("email is required")
            .test("email", "Email is not valid", (value) => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                return emailRegex.test(value);
            }),
        phone: Yup.string()
            .required("Phone number is required")
            .test("phone-number", "Phone number is not valid", (value) => {
                const phoneNumberRegex = /^(\+?)([0-9]{9,12})$/;
                return phoneNumberRegex.test(value);
            }),
        message: Yup.string()
            .required("Message is required")
            .test(
                "max-length",
                "Message must be at most 500 characters",
                (value) => {
                    return value ? value.length <= 500 : true;
                }
            ),
    });

    console.log(formValues);
    const [terms, setTerms] = useState(false);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                email: formValues.email,
                phone: formValues.phone,
                message: formValues.message,
            },
            onSubmit: async (values, actions) => {
                try {
                    const formValues = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        phone: values.phone,
                        message: values.message,
                    };

                    const response = await fetch(
                        "${process.env.API_BASE}/contact",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formValues),
                        }
                    );

                    if (response.status === 200) {
                        setSuccess(true);
                        Router.push("/Success"); // Navigate to a success page
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            validationSchema: contactFormSchema,
        });

    const { firstName, lastName, email, phone, message } = values;

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerms((prev) => !prev);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative bg-white min-h-screen flex flex-col justify-center">
                <div className="lg:absolute lg:inset-0 lg:left-1/2">
                    <img
                        className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
                        src="/contact-image/team.jpeg"
                        alt=""
                    />
                </div>
                <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                    <div className="px-6 lg:px-8">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                {data[0].title}
                            </h2>
                            <p className="mb-4 mt-4 text-lg leading-8 text-gray-600">
                                {data[0].subTitle}
                            </p>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        {data[1].title}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            autoComplete="given-name"
                                            placeholder="First name"
                                            className={`block w-full rounded-md border ${touched["firstName"] && errors["firstName"]
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                } px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                        />
                                        {touched["firstName"] && errors["firstName"] && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors["firstName"]}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        {data[2].title}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            autoComplete="family-name"
                                            placeholder="Surname"
                                            className={`block w-full rounded-md border ${touched.lastName && errors.lastName
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                } px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                        />
                                        {touched.lastName && errors.lastName && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.lastName}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        {data[3].title}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="Email"
                                            className={`block w-full rounded-md border ${touched.email && errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                } px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                        />
                                        {touched.email && errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label
                                            htmlFor="phone"
                                            className="block font-semibold text-gray-900"
                                        >
                                            {data[4].title}
                                        </label>
                                        <p id="phone-description" className="text-gray-400">
                                            {data[4].subTitle}
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            placeholder="Phone number"
                                            className={`block w-full rounded-md border ${touched.phone && errors.phone
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                } px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                        />
                                        {touched.phone && errors.phone && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.phone}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            {data[5].title}
                                        </label>
                                        <p id="message-description" className="text-gray-400">
                                            {data[5].subTitle}
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="message"
                                            rows={4}
                                            aria-describedby="message-description"
                                            placeholder="Message"
                                            className={`block w-full rounded-md border ${touched.message && errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                } px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                            defaultValue={""}
                                        />
                                        {touched.message && errors.message && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                                <Button
                                    disabled={
                                        !firstName || !lastName || !email || !phone || !message
                                    }
                                    type="submit"
                                    className="rounded-md bg-[#218DBD] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1A759F]"
                                >
                                    {success ? "Success" : "Send"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
