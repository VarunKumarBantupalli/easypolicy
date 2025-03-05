export const travelInsurance = {
    id: "travel",
    title: "Travel Insurance",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=500",
    plans: [
      {
        id: "SBI",
        name: "Domestic Travel",
        coverAmount: "₹2 Lakhs",
        monthlyPremium: 199,
        yearlyPremium: 1999,
        features: ["Trip cancellation", "Lost baggage"]
      },
      {
        id: "LIC",
        name: "International SBI",
        coverAmount: "₹5 Lakhs",
        monthlyPremium: 299,
        yearlyPremium: 2999,
        features: ["Trip cancellation", "Lost baggage", "Medical coverage"]
      },
      {
        id: "HDFC",
        name: "HDFC International Premium",
        coverAmount: "₹10 Lakhs",
        monthlyPremium: 499,
        yearlyPremium: 4999,
        features: ["Trip cancellation", "Lost baggage", "Medical coverage", "Adventure sports"]
      }
    ],
    benefits: [
      { icon: "plane", text: "Trip cancellation" },
      { icon: "first-aid-kit", text: "Medical emergencies" },
      { icon: "luggage", text: "Baggage loss" }
    ],
    description: "Travel worry-free with comprehensive coverage worldwide.",
    eligibility: {
      minAge: 1,
      maxAge: 70,
      passport: "Required for international"
    },
    filters: {
      coverAmount: ["₹2 Lakhs", "₹5 Lakhs", "₹10 Lakhs"],
      premium: ["Monthly", "Yearly"],
      features: ["Trip cancellation", "Lost baggage", "Medical coverage", "Adventure sports"]
    }
  };