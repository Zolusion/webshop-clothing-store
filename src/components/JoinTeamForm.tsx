import React from 'react';
import TeamformData from '@/content/TeamformData.json';

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
                        {TeamformData.jobDetails.map((detail, index) => (
                            <li key={index} className="text-black">
                                {detail}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-black 2xl:text-lg">
                        Perks and Benefits:
                        <ul className="list-disc ml-6 mt-2">
                            {TeamformData.perksAndBenefits.map((perk, index) => (
                                <li key={index}>{perk}</li>
                            ))}
                        </ul>
                    </p>
                </div>

                <form>
                    {TeamformData.formFields.map((field) => (
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
