import React from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

const PaymentGateway = ({ policy, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Back to Policies
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Policy Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Policy Details</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">{policy.title}</h3>
              <p className="text-gray-600">{policy.description}</p>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cover Amount</span>
                  <span className="font-semibold">{policy.coverAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Premium</span>
                  <span className="font-semibold">₹{policy.monthlyPremium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Yearly Premium</span>
                  <span className="font-semibold">₹{policy.yearlyPremium}</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {policy.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      • {benefit.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Details</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                  <CreditCard className="absolute right-3 top-2.5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <div className="mt-1 relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="MM/YY"
                    />
                    <Calendar className="absolute right-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <div className="mt-1 relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="123"
                    />
                    <Lock className="absolute right-3 top-2.5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
                <input
                  type="text"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                Pay ₹{policy.monthlyPremium}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;