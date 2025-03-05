import React, { useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";
import gsap from "gsap";
import poster from "../../assets/images/talk to expert.jpg";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Phone",
      value: "+91 75695 77777",
      link: "tel:+917569594275",
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email",
      value: "easypolicy.help.@gmail.com",
      link: "mailto:tonetaless04@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 px-6 py-12 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-10" ref={contactRef}>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Connect Now!</h1>
        <p className="text-gray-200 max-w-xl mx-auto mt-2">
          Clarify your doubts, make decisions with expert help, and choose the best policy for you and your family.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Poster */}
        <div className="flex justify-center">
          <img
            src={poster}
            alt="Contact Poster"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Contact Details */}
        <div className="flex flex-col gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-gray-100"
            >
              <div className="p-4 bg-gray-200 rounded-full shadow-md transition-transform duration-300 hover:scale-110">
                {info.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{info.title}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-12">
        <p className="text-gray-200 text-lg font-medium">
          Looking forward to creating a secured Life for you and your Family!
        </p>
      </div>
    </div>
  );
};

export default Contact;
