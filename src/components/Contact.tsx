import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto my-8 max-w-7xl">
      <div className="grid grid-cols-2 gap-8 container mx-auto px-6 py-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-white mb-4">
            We love to hear from you. Please fill out the form below and we get
            back to you as soon as possible.
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center h-[500px] relative">
          <img
            src="https://images.unsplash.com/photo-1614177919002-8b868f0ac5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image Description"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-white text-3xl font-bold px-4 ">
              Our customers are our top priority
              if you have any advices or questions
              feel free to contact us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
