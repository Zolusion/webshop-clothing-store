import React from 'react'

const aboutContactForm = [
    {
        title: "Contact Us",
        name: "Full name",
        email: "Email", 
        phone: "Phone",
        Optional: "Optional",
        message: "Message",
        submit: "Submit",
    }
]

const AboutContact = () => {
    return (
        <div className='bg-white'>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {aboutContactForm[0].title}
                </h2>
                <form className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                            {aboutContactForm[0].name}
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="given-name"
                                placeholder='John Doe'
                                className="block w-full border-gray-300 p-2 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            {aboutContactForm[0].email}
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder='3r2lA@example.com'
                                className="block w-full border-gray-300 p-2 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                {aboutContactForm[0].phone}
                            </label>
                            <span id="phone-optional" className="text-sm text-gray-500">
                                {aboutContactForm[0].Optional}
                            </span>
                        </div>
                        <div className="mt-1">
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                placeholder='123-456-7890'
                                className="block w-full p-2 border-gray-300 rounded-md text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            {aboutContactForm[0].message}
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder='Hi there, I would like to...'
                                className="block w-full border-gray-300 p-2 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="ml-3">
                                    <label htmlFor="terms" className="text-sm font-medium text-gray-700">
                                        I accept the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            {aboutContactForm[0].submit}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AboutContact