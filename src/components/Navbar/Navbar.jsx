import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <header ref={navRef} className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}> 
          easypolicy<span className="text-yellow-300">.com</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">

          
           <a href="#policy">
             <span
           
          className="text-white text-lg transition-all duration-300 hover:text-yellow-300">
            All Policies
          </span>
          </a>

          <span
           onClick={() => navigate("/claim")}
          className="text-white text-lg transition-all duration-300 hover:text-yellow-300">
            Claim
          </span>

          <button
           onClick={() => navigate("/contact")}
          className="bg-yellow-300 text-blue-900 px-4 py-2 rounded-md font-semibold transition-transform duration-300 transform hover:scale-105">
            Talk to Expert
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 bg-blue-600 py-4 w-full mt-4 rounded-lg shadow-lg">
          {['All Insurances', 'Claim', 'Support'].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white text-lg transition-all duration-300 hover:text-yellow-300"
            >
              {item}
            </a>
          ))}
          <button
          onClick={() => navigate("/contact")}
           className="bg-yellow-300 hover:bg-black text-blue-900 px-4 py-2 rounded-md font-semibold transition-transform duration-300 transform hover:scale-105">
            Talk to Expert
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
