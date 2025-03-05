import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import img3 from '../../assets/images/life.jpg';
import img2 from '../../assets/images/business.jpg';
import img1 from '../../assets/images/car.jpg';
import img4 from '../../assets/images/travel.jpg';

const images = [img1, img2, img3, img4];

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );

    gsap.fromTo(
      '.subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[30vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Image Container */}
      <img
        src={images[currentIndex]}
        alt="Insurance Slide"
        className="absolute w-full h-full object-contain repeat-none transition-opacity duration-1000"
      />

      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/50 p-3 rounded-full text-blue-900 hover:bg-white transition z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/50 p-3 rounded-full text-blue-900 hover:bg-white transition z-10"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Text Content */}
      <div className="absolute text-center z-10">
        <h4 className="subtitle text-white text-xl md:text-2xl font-bold">Welcome to</h4>
        <h1 className="title text-white text-4xl md:text-7xl font-bold my-2">
          PolicyProvider
        </h1>
        <h2 className="subtitle text-lg md:text-2xl text-white font-semibold">
          "Ensuring a secure future, one policy at a time."
        </h2>
        <h2 className="subtitle text-lg md:text-2xl text-white font-semibold">
          "Trust us to safeguard what matters most."
        </h2>
      </div>
    </div>
  );
}

export default Landing;
