"use client"
import { useState } from 'react'
import React from 'react'
import AskedQuestions from '@/content/AskedQuestions.json'

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index: any) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-12 sm:py-16 lg:py-20 lg:max-w-none">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {AskedQuestions.mostAskedQuestions.map((question, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => handleToggle(index)}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{question.question}</h3>
                                    <span className={`transition-transform transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} text-gray-600`}>
                                        &#9662;
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <p className="text-gray-600 mt-2">{question.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-2xl mx-auto py-12 sm:py-16 lg:py-20 lg:max-w-none">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Ask something else</h2>
                    <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(null)}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">I don&quot;t want see the answer to my question. Can you help me?</h3>
                                <span className={`transition-transform transform ${openIndex === null ? 'rotate-180' : 'rotate-0'} text-gray-600`}>
                                    &#9662;
                                </span>
                            </div>
                            {openIndex === null && (
                                <p className="text-gray-600 mt-2">Please contact us and we will do our best to help you.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions