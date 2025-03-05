import React from 'react';
import { X } from 'lucide-react';

const CompareModal = ({ policies, onRemove, onClose }) => {
  if (policies.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 transform transition-transform">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Compare Policies ({policies.length})</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {policies.map(policy => (
            <div key={policy.id} className="bg-gray-50 p-4 rounded-lg relative">
              <button
                onClick={() => onRemove(policy.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h4 className="font-semibold text-blue-600">{policy.title}</h4>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-600">Cover: {policy.coverAmount}</p>
                <p className="text-sm text-gray-600">Monthly: ₹{policy.monthlyPremium}</p>
                <p className="text-sm text-gray-600">Yearly: ₹{policy.yearlyPremium}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareModal;