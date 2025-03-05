import React from 'react';
import { Shield, Heart, Banknote, Activity, Car, Home, PiggyBank, Plane, Users, GraduationCap, Package, Bike } from 'lucide-react';

const iconMap = {
  shield: Shield,
  heart: Heart,
  banknote: Banknote,
  activity: Activity,
  car: Car,
  home: Home,
  "piggy-bank": PiggyBank,
  plane: Plane,
  users: Users,
  "graduation-cap": GraduationCap,
  package: Package,
  bike: Bike
};

const InsuranceCard = ({ policy, onCompare, onProceed }) => {
  const renderIcon = (iconName) => {
    const Icon = iconMap[iconName] || Shield;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={policy.image} 
          alt={policy.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-blue-600">{policy.title}</h3>
      <div className="mt-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Cover Amount</span>
          <span className="font-semibold">{policy.coverAmount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Monthly Premium</span>
          <span className="font-semibold">₹{policy.monthlyPremium}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Yearly Premium</span>
          <span className="font-semibold">₹{policy.yearlyPremium}</span>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3">Benefits</h4>
        <ul className="space-y-2">
          {policy.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              {renderIcon(benefit.icon)}
              <span>{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 space-y-2">
        <button
          onClick={() => onCompare(policy)}
          className="w-full bg-yellow-400 text-gray-800 py-2 rounded-md hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
        >
          Add to Compare
        </button>
        <button
          onClick={() => onProceed(policy)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default InsuranceCard;