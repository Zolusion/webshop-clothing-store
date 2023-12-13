import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="mx-auto min-h-screen">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <video className="h-full w-full object-cover" src="/videos/home.mp4" autoPlay muted loop/>
            <div className="absolute inset-00 mix-blend-multiply"/>
          </div>
          <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white 2xl:text-7xl">Dive into a World of Exquisite Apparel</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-6xl 2xl:text-[27px]">
                Embark on a sartorial journey and immerse yourself in a world where elegance meets innovation. Our collection invites you to dive into a realm of exquisite apparel, meticulously curated to elevate your style quotient
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="sm:mx-auto mx-auto inline-grid sm:inline-grid grid-cols-2 sm:grid-cols-2 gap-5 sm:gap-5 space-y-0 sm:space-y-0">
                <a href="/ambassadors">
                  <button name="shoppingbutton" type="button" className="2xl:text-[20px] flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">
                    Ambassadors
                  </button>
                </a>
                <a href="/contact">
                  <button name="shoppingbutton" type="button" className="2xl:text-[20px] flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">
                    Contact
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
