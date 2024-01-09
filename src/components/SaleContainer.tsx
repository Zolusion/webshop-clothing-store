"use client";
import React, { useState, useEffect } from 'react';

const SaleContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/about-images/salebackground.png',
    '/ambassadors-image/hijab-model.jpeg',
    '/about-images/salebackground-3.png',
  ];

  const slideTexts = [
    'sale',
    'Ambassadors',
    'Our Team',
  ];

  const slideLinks = [
    '/sale',
    '/ambassadors',
    '/our-team',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="h-[700px] 2xl:h-[900px] bg-cover bg-center bg-no-repeat relative flex items-center justify-end" style={{ backgroundImage: `url("${slides[currentSlide]}")` }}>
      <div className="bg-red-500 p-8 text-center text-white">
        <a href={slideLinks[currentSlide]} className='text-5xl uppercase font-bold'>{slideTexts[currentSlide]}</a>
      </div>
    </div>
  );
}

export default SaleContainer;
