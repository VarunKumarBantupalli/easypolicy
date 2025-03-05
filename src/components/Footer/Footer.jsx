import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">EasyPolicy</h2>
            <p className="mt-3 text-gray-300">
              Your trusted partner for easy and secure insurance policies. Get the best coverage with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {["Home", "About Us", "Services", "Contact", "FAQ"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href="#below" className="text-gray-300 hover:text-yellow-400 transition">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400">Our Policies</h3>
            <ul className="mt-3 space-y-2">
              {["Health Insurance", "Car Insurance", "Life Insurance", "Travel Insurance"].map(
                (policy, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1, x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <a href="#below" className="text-gray-300 hover:text-yellow-400 transition">
                      {policy}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400">Subscribe to Newsletter</h3>
            <p className="mt-2 text-gray-300">Stay updated with our latest policies and offers.</p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-black"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-yellow-400 px-4 py-2 text-blue-900 font-semibold rounded-r-md"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <motion.a
                key={index}
                href="#below"
                className="p-3 bg-yellow-400 text-blue-900 rounded-full text-lg transition hover:bg-yellow-500"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mt-4 md:mt-0">© {new Date().getFullYear()} EasyPolicy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
