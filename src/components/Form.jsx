import React from 'react';

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="min-h-screen bg-blue-200 text-gray-600 flex items-center justify-center p-4">
      {/* Dark Panel */}
      <div className="bg-gray-800 text-gray-100 w-full max-w-md p-6 rounded-md shadow-md">
        {/* Heading */}
        <h1 className="text-xl font-bold mb-1">
          Claim Assistance Program
        </h1>
        <p className="text-sm text-gray-300 mb-4">
          Ensuring peace of mind for your loved ones
        </p>

        {/* Bullet List */}
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Acknowledgment in 24 Hours</li>
          <li>Quick &amp; hassle free claim settlement experience</li>
          <li>Claim status update at every step of process</li>
          <li>365 Days tele-assistance available</li>
        </ul>

        {/* Form */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="insurer"
              className="block mb-1 text-sm font-medium"
            >
              Insurer
            </label>
            <select
              id="insurer"
              className="w-full p-2 bg-blue-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Select an Insurer</option>
              <option value="lic">LIC</option>
              <option value="icici">ICICI</option>
              <option value="hdfc">HDFC</option>
              <option value="sbi">SBI</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="policyNumber"
              className="block mb-1 text-sm font-medium"
            >
              Policy Number
            </label>
            <input
              type="text"
              id="policyNumber"
              placeholder="Enter Policy Number"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="policyHolderName"
              className="block mb-1 text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="policyHolderName"
              placeholder="Enter Policy Holder Name"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block mb-1 text-sm font-medium"
            >
              Date of Birth
            </label>
            <input
              type="text"
              id="dob"
              placeholder="DD-MM-YYYY"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 rounded font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}