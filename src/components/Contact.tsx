import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto my-8 max-w-7xl lg:max-w-[2200px]">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 container mx-auto px-6 py-12 lg:max-w-[2200px]">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 2xl:text-5xl">Contact Us</h1>
          <p className="text-white mb-4 2xl:text-2xl">
            We love to hear from you. Please fill out the form below and we get
            back to you as soon as possible.
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2 2xl:text-2xl"
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
                className="block text-white text-sm font-bold mb-2 2xl:text-2xl"
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
                className="block text-white text-sm font-bold mb-2 2xl:text-2xl"
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
                name="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline 2xl:text-2xl"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center h-[500px] relative">
          <Image
            src="https://images.unsplash.com/photo-1614177919002-8b868f0ac5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image Description"
            layout="fill"
            sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
            className="object-cover object-center"
            loading="lazy"
            quality={100}
            unoptimized
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-white text-3xl font-bold px-4 text-center 2xl:text-4xl">
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
