import React from 'react';

const contactForms = [
    {
        title: 'Contact Us',
        fields: [
            { name: 'Full name', type: 'text', id: 'full-name', autoComplete: 'given-name', placeholder: 'John Doe' },
            { name: 'Email', type: 'email', id: 'email', autoComplete: 'email', placeholder: '3r2lA@example.com' },
            { name: 'Phone', type: 'tel', id: 'phone', autoComplete: 'tel', placeholder: '123-456-7890' },
            { name: 'Message', type: 'textarea', id: 'message', placeholder: 'Hi there, I would like to...' },
        ],
        termsLabel: 'I accept the',
        termsLink: '#',
        submitText: 'Submit',
    },
];

const AboutContact = () => {
    return (
        <div className='bg-white'>
            <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                {contactForms.map((form, index) => (
                    <React.Fragment key={index}>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-[28px]">{form.title}</h2>
                        <form className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            {form.fields.map((field, fieldIndex) => (
                                <div key={fieldIndex}>
                                    {field.type === 'textarea' ? (
                                        <div className="sm:col-span-2">
                                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 2xl:text-md">
                                                {field.name}
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id={field.id}
                                                    name={field.id}
                                                    rows={4}
                                                    placeholder={field.placeholder}
                                                    className="block w-full border-gray-300 p-2 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 2xl:text-sm"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 2xl:text-md">
                                                {field.name}
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type={field.type}
                                                    name={field.id}
                                                    id={field.id}
                                                    autoComplete={field.autoComplete}
                                                    placeholder={field.placeholder}
                                                    className="block w-full border-gray-300 p-2 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="sm:col-span-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <input
                                            id={`terms-${index}`}
                                            name={`terms-${index}`}
                                            type="checkbox"
                                            className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <label htmlFor={`terms-${index}`} className="text-sm font-medium text-gray-700">
                                            {`${form.termsLabel} `}
                                            <a href={form.termsLink} className="text-indigo-600 hover:text-indigo-500">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    name="submit"
                                    className="w-[200px] 2xl:w-[200px] inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 2xl:text-sm"
                                >
                                    {form.submitText}
                                </button>
                            </div>
                        </form>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AboutContact;