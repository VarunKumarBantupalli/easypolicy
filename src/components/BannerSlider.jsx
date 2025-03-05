import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    title: "Invest ₹10,000/month & Get ₹1 Crore returns*",
    subtitle: "In-built life cover",
    bgColor: "bg-yellow-300"
  },
  {
    title: "Health Insurance starting at ₹500/month",
    subtitle: "Zero waiting period for COVID-19",
    bgColor: "bg-blue-300"
  },
  {
    title: "Save up to 80% on Car Insurance",
    subtitle: "Zero depreciation cover included",
    bgColor: "bg-green-300"
  }
];

const BannerSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-3/4 mx-auto mt-6">
      <button 
        onClick={prevBanner}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        className={`${banners[currentBanner].bgColor} p-6 rounded-lg transition-all duration-500 transform`}
      >
        <h2 className="text-xl font-semibold">{banners[currentBanner].title}</h2>
        <p className="text-gray-700">{banners[currentBanner].subtitle}</p>
        <a href="#below">
        <button
         
         className="bg-blue-600 text-white px-4 py-2 mt-3 rounded-md hover:bg-blue-700 transition-all duration-300">
          View Plans
        </button>
        </a>
      </div>

      <button 
        onClick={nextBanner}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div id='below' className="flex justify-center mt-4 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
