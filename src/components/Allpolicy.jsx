import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerSlider from './BannerSlider';
import { Shield, Heart, TrendingUp, Car, Plane, Home } from 'lucide-react';

const insuranceTypes = [
  { id: 'term-life', title: 'Term Life Insurance', icon: Shield, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500" },
  { id: 'health', title: 'Health Insurance', icon: Heart, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500" },
  { id: 'investment', title: 'Investment Plans', icon: TrendingUp, image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=500" },
  { id: 'car', title: 'Car Insurance', icon: Car, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=500" },
  { id: 'travel', title: 'Travel Insurance', icon: Plane, image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=500" },
  { id: 'home', title: 'Home Insurance', icon: Home, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500" }
];

const AllPolicy = () => {
  const navigate = useNavigate();

  return (
    <div id='policy' className="font-sans bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold">Let's find you the <span className="text-blue-600">Best Insurance</span></h1>
        <p className="text-gray-600 mt-2">easypolicy.com | Quick, easy & hassle-free</p>
        
        <BannerSlider />
      </section>

      {/* Insurance Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((insurance) => {
            const Icon = insurance.icon;
            return (
              <div
                key={insurance.id}
                onClick={() => navigate(`/insurance/${insurance.id}`)}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={insurance.image} 
                    alt={insurance.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-3 text-white">
                      <Icon className="w-6 h-6" />
                      <h3 className="text-xl font-bold">{insurance.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AllPolicy;