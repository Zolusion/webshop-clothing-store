import React from 'react';

const jobDetails = [
    'Create engaging content showcasing our products/services.',
    'Regularly post on Instagram and use relevant hashtags.',
    'Engage with your followers and respond to comments/questions.',
    'Provide feedback and ideas to improve our brand presence.'
];

const perksAndBenefits = [
    'Exclusive discounts on our products/services.',
    'Opportunity to be featured on our official social media channels.',
    'Access to new product launches before the public.'
];
const formFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
    { id: 'instagram', label: 'Instagram Handle', type: 'text', placeholder: '@example', required: true },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'w9Ezy@example.com', required: true },
    { id: 'location', label: 'Location', type: 'text', placeholder: 'City, State', required: true },
    { id: 'why-ambassador', label: 'Why do you want to be an ambassador?', type: 'textarea', rows: 4, placeholder: 'Why do you want to be an ambassador?', required: true },
    { id: 'experience', label: 'Relevant Experience or Skills', type: 'textarea', rows: 4, placeholder: 'Relevant Experience or Skills', required: true },
    { id: 'promotion-plan', label: 'How do you plan to promote our brand?', type: 'textarea', rows: 4, placeholder: 'How do you plan to promote our brand?', required: true },
    { id: 'comments-questions', label: 'Any Additional Comments or Questions', type: 'textarea', rows: 4, placeholder: 'Do you have any Comments or Questions', required: true }
];

const JoinTeamForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="container mx-auto p-8 max-w-7xl 2xl:max-w-[1800px] w-full mt-8 mb-8">
                <h1 className="text-3xl font-semibold mb-4 text-black 2xl:text-5xl">Join Our Team</h1>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-black 2xl:text-2xl">Job Details:</h2>
                    <p className="text-black 2xl:text-lg">
                        Join our team for becoming a part of our program to represent our brand and enjoy exclusive perks.
                    </p>
                    <ul className="list-disc ml-6 mt-2 2xl:text-lg">
                        {jobDetails.map((detail, index) => (
                            <li key={index} className="text-black">
                                {detail}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-black 2xl:text-lg">
                        Perks and Benefits:
                        <ul className="list-disc ml-6 mt-2">
                            {perksAndBenefits.map((perk, index) => (
                                <li key={index}>{perk}</li>
                            ))}
                        </ul>
                    </p>
                </div>

                <form>
                    {formFields.map((field) => (
                        <div key={field.id} className="mb-4 2xl:text-[18px]">
                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-600 2xl:text-[18px]">
                                {field.label}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    name={field.id}
                                    rows={field.rows}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    placeholder={field.placeholder}
                                    required={field.required}
                                ></textarea>
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    placeholder={field.placeholder}
                                    required={field.required}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-[150px] bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Apply Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinTeamForm;
