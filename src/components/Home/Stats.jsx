import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Users, Clock, Music } from "lucide-react";
import { Shield, FileText, Headset, Briefcase } from "lucide-react";


const statsData = [
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Trusted by 10 Lakh+ Policyholders",
    description:
      "Providing security and peace of mind to over 10 lakh satisfied customers with comprehensive insurance solutions.",
    value: 10,
    suffix: "L+",
  },
  {
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: "5000+ Policies Issued Daily",
    description:
      "Ensuring seamless policy issuance with over 5000 policies processed every day, delivering trust and reliability.",
    value: 5000,
    suffix: "+",
  },
 
  {
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    title: "20+ Years of Industry Expertise",
    description:
      "A legacy of 20+ years in providing top-notch insurance services tailored to customer needs.",
    value: 20,
    suffix: "+",
  },
];

function Stats() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const numbersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards
            gsap.fromTo(
              cardsRef.current,
              { y: 50, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
              }
            );

            // Animate numbers
            numbersRef.current.forEach((numberEl, index) => {
              if (numberEl) {
                gsap.to(numberEl, {
                  duration: 2,
                  innerHTML: statsData[index].value,
                  roundProps: "innerHTML",
                  ease: "power1.inOut",
                  delay: index * 0.2,
                });
              }
            });

            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-[80vh] py-20 overflow-hidden bg-background">
      <div ref={containerRef} className="relative container mx-auto px-4 z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Our Journey in Numbers
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Every number tells a story of dedication, excellence, and memorable
            experiences created together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />

              {/* Card Content */}
              <div className="relative h-full bg-white shadow-lg backdrop-blur-sm rounded-2xl p-8 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 inline-block p-4 rounded-xl bg-yellow-300 text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className="mb-4 flex items-baseline">
                  <span
                    ref={(el) => (numbersRef.current[index] = el)}
                    className="text-4xl font-bold text-primary"
                  >
                    0
                  </span>
                  <span className="text-4xl font-bold text-accent ml-1">
                    {stat.suffix}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-textSecondary leading-relaxed">
                  {stat.description}
                </p>

                {/* Bottom Highlight Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-300 group-hover:w-2/3 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
