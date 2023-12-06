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

import React from 'react'

const Questions = () => {
  return (
    <div className='bg-white'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Frequently asked questions</h2>
                <div className="mt-8 space-y-8">
                    {mostAskedQuestions.map((question, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-medium text-gray-900">{question.question}</h3>
                            <p className="mt-4 text-sm text-gray-500">{question.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions