import React, { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Banner = () => {
  const banners = [
    '/images/Banner/SLIDER01.webp',
    '/images/Banner/SLIDER02.webp',
    '/images/Banner/SLIDER03.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-screen overflow-hidden mx-0 px-0 
      h-[110px] sm:h-[200px] lg:h-[290px] xl:h-[460px]">

      {/* Imagens */}
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-3000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Botão Esquerdo */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 cursor-pointer 
        text-white font-black p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all"
      >
        <SlArrowLeft className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px]" />
      </button>

      {/* Botão Direito */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 cursor-pointer 
        text-white font-black p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all"
      >
        <SlArrowRight className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px]" />
      </button>

      {/* Indicadores (pontinhos) */}
      <div className="absolute bottom-3 sm:bottom-4 w-full flex justify-center gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-gray'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
