import React from 'react';
import {
  Umbrella,
  HeartPulse,
  Car,
  Bike,
  Plane,
  Phone,
} from 'lucide-react'; // or any other icon library
import { Link } from 'react-router-dom';  

// Example data for your product cards
const products = [
  {
    icon: Umbrella,
    title: 'Term Insurance',
    availability: 'Available 24x7',
  },
  {
    icon: HeartPulse,
    title: 'Health Insurance',
    availability: 'Available 24x7',
  },
  {
    icon: Car,
    title: 'Motor Insurance',
    availability: 'Available 24x7',
  },
  {
    icon: Bike,
    title: '2 Wheeler Insurance',
    availability: '',
  },
  {
    icon: Plane,
    title: 'Travel Insurance',
    availability: '',
  },
];

export default function Claim() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-200">


      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Column: Headline & Product Grid */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Do you Need Insurance Claim Assistance?
            </h1>
            <p className="text-gray-600 mb-4">
              Don’t worry, we are here to help you.
            </p>
            <p className="text-gray-700 mb-6">
              To learn more about the claim process, please select a product:
            </p>

            {/* Product Grid */}
            <Link to='/form'> <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md cursor-pointer"
                >
                  <product.icon
                    className="mx-auto mb-2 text-blue-600"
                    size={36}
                  />
                  <h3 className="font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  {product.availability && (
                    <span className="block text-green-600 text-sm mt-1">
                      {product.availability}
                    </span>
                  )}
                </div>
              ))}
            </div>
            </Link>
          </div>

          {/* Right Column: CTA Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <img
                  src="./sample2.jpg"
                  alt="Claim Assistance"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-gray-800 font-semibold text-sm">
                    Got questions regarding Insurance Claim?
                  </h4>
                  <p className="text-green-600 text-xs">
                    Our claims assistance experts are available 24x7
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-700 mb-2">
                  For Motor, Health, Travel & Term Insurance claim related queries
                </p>
                <div className="flex items-center justify-center text-blue-600 mb-2">
                  <Phone className="mr-2" />
                  <span className="font-bold text-lg">Call at 1800-258-5881</span>
                </div>
                <p className="text-xs text-gray-500">
                  *24x7 claim assistance available for Health & Motor insurance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer / Footer Note */}
        <div className="mt-6 text-xs text-gray-500 text-center leading-relaxed">
          *The claims assistance app features provide facility to our customers who voluntarily opt for the
          same. PolicyBazaar is acting only as a facilitator and does not act as a surveyor. Decision on
          settlement or rejection of your claim shall be taken solely by the insurer in accordance with IRDAI
          applicable laws/regulations.
        </div>
      </main>
    </div>
  );
}