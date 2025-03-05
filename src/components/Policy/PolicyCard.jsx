import React from "react";
import { Shield, Heart, Home, Car, Umbrella, Briefcase, Plane } from "lucide-react";

const iconMap = {
  health: Heart,
  home: Home,
  car: Car,
  umbrella: Umbrella,
  business: Briefcase,
  travel: Plane,
  general: Shield,
};

const PolicyCard = ({ title, description, icon, imageUrl }) => {
  const Icon = iconMap[icon] || Shield;

  return (
    <div className="min-w-[300px] p-6 rounded-xl bg-gradient-to-br from-primary to-secondary transform hover:scale-105 transition-transform duration-300 shadow-xl mx-4">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-10 h-10 text-background" />
        <div className="bg-surface/20 px-3 py-1 rounded-full">
          <span className="text-background text-sm font-medium">Featured</span>
        </div>
      </div>
      <div className="mb-4 overflow-hidden rounded-lg h-40">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold text-background mb-2">{title}</h3>
      <p className="text-background/80 text-sm">{description}</p>
      <button className="mt-4 w-full py-2 px-4 bg-background text-primary rounded-lg font-medium hover:bg-surface transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
};

export default PolicyCard;
