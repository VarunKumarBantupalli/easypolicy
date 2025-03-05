import React, { useState } from 'react';
import { Sliders as Slider, Filter } from 'lucide-react';

const Insurance = ({ insuranceData }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    coverAmount: [],
    premium: [],
    features: []
  });

  const [sortBy, setSortBy] = useState('premium-low');

  const filteredPlans = insuranceData.plans.filter(plan => {
    if (selectedFilters.coverAmount.length && !selectedFilters.coverAmount.includes(plan.coverAmount)) {
      return false;
    }
    if (selectedFilters.features.length && !selectedFilters.features.some(f => plan.features.includes(f))) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'premium-low':
        return a.monthlyPremium - b.monthlyPremium;
      case 'premium-high':
        return b.monthlyPremium - a.monthlyPremium;
      case 'cover-low':
        return parseInt(a.coverAmount) - parseInt(b.coverAmount);
      case 'cover-high':
        return parseInt(b.coverAmount) - parseInt(a.coverAmount);
      default:
        return 0;
    }
  });

  const handleFilterChange = (type, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  return (
    <div className="min-h-screen bg-blue-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{insuranceData.title}</h1>
          <p className="mt-2 text-gray-600">{insuranceData.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Filters</h2>
            </div>

            {/* Cover Amount Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Cover Amount</h3>
              {insuranceData.filters.coverAmount.map(amount => (
                <label key={amount} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.coverAmount.includes(amount)}
                    onChange={() => handleFilterChange('coverAmount', amount)}
                    className="rounded text-blue-600"
                  />
                  <span>{amount}</span>
                </label>
              ))}
            </div>

            {/* Features Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Features</h3>
              {insuranceData.filters.features.map(feature => (
                <label key={feature} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.features.includes(feature)}
                    onChange={() => handleFilterChange('features', feature)}
                    className="rounded text-blue-600"
                  />
                  <span>{feature}</span>
                </label>
              ))}
            </div>

            {/* Sort Options */}
            <div>
              <h3 className="font-medium mb-3">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="premium-low">Premium: Low to High</option>
                <option value="premium-high">Premium: High to Low</option>
                <option value="cover-low">Cover: Low to High</option>
                <option value="cover-high">Cover: High to Low</option>
              </select>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPlans.map(plan => (
                <div key={plan.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-600">{plan.name}</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cover Amount</span>
                      <span className="font-semibold">{plan.coverAmount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Premium</span>
                      <span className="font-semibold">₹{plan.monthlyPremium}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Yearly Premium</span>
                      <span className="font-semibold">₹{plan.yearlyPremium}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Features</h4>
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;