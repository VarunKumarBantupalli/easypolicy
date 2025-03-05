import { motion } from "framer-motion";

const calculators = [
  {
    title: "Investment calculators",
    image: "https://i.ibb.co/1GBfBVVQ/Screenshot-2025-03-04-235827.png",
    bgColor: "bg-orange-100",
    links: [
      "SIP Calculator", //https://www.policybazaar.com/sip/sip-calculator/
      "Income Tax Calculator",
      "ULIP Calculator",
      "NPS Calculator",
    ],
  },
  {
    title: "Term Insurance calculators",
    image: "https://i.ibb.co/zhQswwGv/Screenshot-2025-03-05-000337.png",
    bgColor: "bg-blue-100",
    links: [
      "Life Insurance Calculator",
      "Term Insurance Calculator",
      "Human Life Value Calculator",
      "NRI Term Insurance Calculator",
    ],
  },
  {
    title: "Policy premium calculators",
    image: "https://i.ibb.co/QF95vPpd/Screenshot-2025-03-05-001010.png",
    bgColor: "bg-purple-100",
    links: [
      "Health Insurance Premium Calculator",
      "Car Insurance Calculator",
      "Bike Insurance Calculator",
      "Travel Insurance Calculator",
    ],
  },
];

export default function PopularCalculators() {
  return (
    <div className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Popular Calculators</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Discover our user-friendly calculators tailored to help you make informed
        financial decisions. Explore the options below to get started.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {calculators.map((calculator, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
          >
            <div className={`${calculator.bgColor} flex items-center p-4`}>
              <h2 className="text-xl font-semibold text-gray-800 flex-1">{calculator.title}</h2>
              <img src={calculator.image} alt={calculator.title} className="w-12 h-12 rounded-full" />
            </div>
            <ul className="p-4 space-y-3">
              {calculator.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="https://www.policybazaar.com/sip/sip-calculator/"
                    className="text-gray-700 font-medium flex items-center hover:text-blue-500 transition"
                  >
                    {link} <span className="ml-2">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
