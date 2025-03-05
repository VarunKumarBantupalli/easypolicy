import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PolicyCard } from './PolicyCard';

const policies = [
  {
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for individuals and families',
    icon: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Home Insurance',
    description: 'Protect your home and belongings with our premium coverage',
    icon: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Auto Insurance',
    description: 'Complete protection for your vehicles with 24/7 support',
    icon: 'car',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Umbrella Insurance',
    description: 'Additional liability coverage for complete peace of mind',
    icon: 'umbrella',
    imageUrl: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Business Insurance',
    description: 'Comprehensive coverage solutions for your business needs',
    icon: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Travel Insurance',
    description: 'Worry-free travel with worldwide coverage and assistance',
    icon: 'travel',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=500',
  },
];

export const PolicyProvider = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = scrollerRef.current;
    const scrollerWidth = scrollerContent.offsetWidth;
    
    // Clone the content for seamless scrolling
    const clonedContent = scrollerContent.cloneNode(true);
    containerRef.current.appendChild(clonedContent);

    gsap.to(containerRef.current.children, {
      x: -scrollerWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(containerRef.current.children);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-skyToDeep-0 to-skyToDeep-1 py-16">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-background mb-4">
          Our Insurance Solutions
        </h2>
        <p className="text-background/80 text-lg max-w-2xl mx-auto">
          Discover our comprehensive range of insurance policies designed to protect what matters most to you
        </p>
      </div>
      
      <div className="overflow-hidden">
        <div ref={containerRef} className="flex">
          <div ref={scrollerRef} className="flex">
            {policies.map((policy, index) => (
              <PolicyCard
                key={index}
                title={policy.title}
                description={policy.description}
                icon={policy.icon}
                imageUrl={policy.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};