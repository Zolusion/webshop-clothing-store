// apply.js

import React from 'react';

const AmbassadorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto p-8 max-w-7xl 2xl:max-w-[2200px] w-full mt-8 mb-8">
        <h1 className="text-3xl font-semibold mb-4 text-black">Instagram Ambassador Program</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-black">Job Details:</h2>
          <p className="text-black">
            Join our Instagram Ambassador program to represent our brand and enjoy exclusive perks.
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li className='text-black'>Create engaging content showcasing our products/services.</li>
            <li className='text-black'>Regularly post on Instagram and use relevant hashtags.</li>
            <li className='text-black'>Engage with your followers and respond to comments/questions.</li>
            <li className='text-black'>Provide feedback and ideas to improve our brand presence.</li>
          </ul>
          <p className="mt-4 text-black">
            Perks and Benefits:
            <ul className="list-disc ml-6 mt-2">
              <li>Exclusive discounts on our products/services.</li>
              <li>Opportunity to be featured on our official social media channels.</li>
              <li>Access to new product launches before the public.</li>
            </ul>
          </p>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='John Doe'
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-600">
              Instagram Handle
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='@example'
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='w9Ezy@example.com'
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='City, State'
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="why-ambassador" className="block text-sm font-medium text-gray-600">
              Why do you want to be an ambassador?
            </label>
            <textarea
              id="why-ambassador"
              name="why-ambassador"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='Why do you want to be an ambassador?'
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-600">
              Relevant Experience or Skills
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='Relevant Experience or Skills'
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="promotion-plan" className="block text-sm font-medium text-gray-600">
              How do you plan to promote our brand?
            </label>
            <textarea
              id="promotion-plan"
              name="promotion-plan"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='How do you plan to promote our brand?'
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="comments-questions" className="block text-sm font-medium text-gray-600">
              Any Additional Comments or Questions
            </label>
            <textarea
              id="comments-questions"
              name="comments-questions"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder='Do you have any Comments or Questions'
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AmbassadorPage;
