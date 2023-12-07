"use client"
import { useState } from 'react'
import React from 'react'

const mostAskedQuestions = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept all credit cards, debit cards, PayPal, Apple Pay, Google Pay"
    },
    {
        question: "Can I modify or cancel my order after it has been placed?",
        answer: "Yes, you can modify or cancel your order within 30 days of placing it."
    },
    {
        question: "What is your standard shipping time for clothing orders?",
        answer: "Our standard shipping time for clothing orders is 3-5 business days."
    },
    {
        question: "What is your return policy for clothing items?",
        answer: "We offer a 30-day return policy for all clothing items."
    },
    {
        question: "Are there any items that cannot be returned or exchanged?",
        answer: "All items can be returned within 30 days of purchase."
    },
    {
        question: "Is the return shipping cost covered by the customer or your company?",
        answer: "The return shipping cost is covered by the customer."
    },
    {
        question: "How long does it take to process a return and receive a refund?",
        answer: "The process takes 3-5 business days."
    },
    {
        question: "Can I return an online purchase to a physical store location?",
        answer: "No, we don't have a physical store location. If you need assistance, please contact us."
    },
    {
        question: "What should I do if I receive a damaged or defective item?",
        answer: "If you receive a damaged or defective item, please contact us and we will do our best to resolve the issue."
    },
    {
        question: "What is the typical response time for email inquiries?",
        answer: "We try to respond to all email inquiries within 24 hours."
    }
]

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index : any) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-12 sm:py-16 lg:py-20 lg:max-w-none">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {mostAskedQuestions.map((question, index) => (
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
            </div>
        </div>

    )
}

export default Questions