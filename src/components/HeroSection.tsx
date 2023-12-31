"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isSecondVideoPlaying, setIsSecondVideoPlaying] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("heroVideo") as HTMLVideoElement;
    const secondVideoElement = document.getElementById("secondVideo") as HTMLVideoElement;

    const playVideo = (element: HTMLVideoElement) => {
      if (element) {
        const promise = element.play();
        if (promise) {
          promise.catch((error) => {
            console.error("Autoplay prevented:", error);
          });
        }
      }
    };

    if (videoElement) {
      if (isVideoPlaying) {
        playVideo(videoElement);
      } else {
        videoElement.pause();
      }
    }

    if (secondVideoElement) {
      if (isSecondVideoPlaying) {
        playVideo(secondVideoElement);
      } else {
        secondVideoElement.pause();
      }
    }
  }, [isVideoPlaying, isSecondVideoPlaying]);

  const handleInteraction = (
    playFunction: () => void,
    playStateFunction: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    playStateFunction(true);
    playFunction();
  };

  return (
    <div className="bg-white">
      <div className="relative flex mx-auto flex-col md:flex-row">
        <div className="flex-shrink-0 md:w-1/2">
          <Image
            src="/hero-section-images/background2.jpeg"
            alt="hero"
            width={700}
            height={1000}
            loading="lazy"
            className="object-cover w-full h-[800px] md:h-[1200px] opacity-80"
          />
          <span className="absolute inset-0 bg-black bg-opacity-60">
            <p className="2xl:text-7xl text-5xl font-bold text-white uppercase px-6 mt-8">
              We Create
              <br />
              <span className="text-black">Unique</span>
              <br />
              <span className="text-black">Designs</span>
              <br />
              <span className="text-black">For You</span>
            </p>
            <a href="/dresses">
              <button className="text-white uppercase mt-4 ml-8 border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300">
                Shop Now
              </button>
            </a>
          </span>
        </div>
        <div className="flex-shrink-0 flex flex-col md:w-1/2">
          <div className="relative">
            <video
              id="heroVideo"
              src="/hero-section-images/blazer.mp4"
              muted
              loop
              width={680}
              height={300}
              preload="auto"
              className="object-cover w-full h-[600px] md:h-[600px] opacity-80"
              onMouseEnter={() => handleInteraction(() => {}, setIsVideoPlaying)}
              onMouseLeave={() => setIsVideoPlaying(false)}
              onClick={() => handleInteraction(() => {}, setIsVideoPlaying)} // Add click event for mobile devices
            ></video>
            <a href="/blazers" className="hover-link">
              <p className="hover-effect uppercase text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold">
                Blazers
              </p>
            </a>
          </div>
          <div className="relative">
            <video
              id="secondVideo"
              src="/hero-section-images/winter.mp4"
              muted
              loop
              width={680}
              height={300}
              preload="auto"
              className="object-cover w-full h-[600px] md:h-[600px] opacity-80"
              onMouseEnter={() => handleInteraction(() => {}, setIsSecondVideoPlaying)}
              onMouseLeave={() => setIsSecondVideoPlaying(false)}
              onClick={() => handleInteraction(() => {}, setIsSecondVideoPlaying)} // Add click event for mobile devices
            ></video>
            <a href="/winter-collection" className="hover-link">
              <p className="hover-effect uppercase text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold md:w-2/3">
                Winter Collection
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
