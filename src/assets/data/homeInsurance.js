export const homeInsurance = {
    id: "home",
    title: "Home Insurance",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500",
    plans: [
      {
        id: "SBI",
        name: "Structure Only",
        coverAmount: "₹25 Lakhs",
        monthlyPremium: 299,
        yearlyPremium: 2999,
        features: ["Structure coverage", "Natural calamities"]
      },
      {
        id: "LIC",
        name: "Structure + Contents",
        coverAmount: "₹50 Lakhs",
        monthlyPremium: 399,
        yearlyPremium: 4499,
        features: ["Structure coverage", "Natural calamities", "Contents protection"]
      },
      {
        id: "HDFC",
        name: "Comprehensive",
        coverAmount: "₹1 Crore",
        monthlyPremium: 799,
        yearlyPremium: 8999,
        features: ["Structure coverage", "Natural calamities", "Contents protection", "Theft protection"]
      }
    ],
    benefits: [
      { icon: "home", text: "Structure coverage" },
      { icon: "package", text: "Contents protection" },
      { icon: "shield", text: "Natural calamities" }
    ],
    description: "Protect your home and belongings with our comprehensive coverage.",
    eligibility: {
      ownership: "Required",
      propertyAge: "Up to 30 years",
      location: "Within municipal limits"
    },
    filters: {
      coverAmount: ["₹25 Lakhs", "₹50 Lakhs", "₹1 Crore"],
      premium: ["Monthly", "Yearly"],
      features: ["Structure coverage", "Natural calamities", "Contents protection", "Theft protection"]
    }
  };