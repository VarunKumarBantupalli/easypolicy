export const healthInsurance = {
    id: "health",
    title: "Health Insurance",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500",
    plans: [
      {
        id: "SBI",
        name: "SBI Health",
        coverAmount: "₹5 Lakhs",
        monthlyPremium: 499,
        yearlyPremium: 5499,
        features: ["Hospitalization", "Pre & post care"]
      },
      {
        id: "LIC",
        name: "LIC Health",
        coverAmount: "₹10 Lakhs",
        monthlyPremium: 999,
        yearlyPremium: 10999,
        features: ["Hospitalization", "Pre & post care", "Critical illness"]
      },
      {
        id: "HDFC",
        name: "HDFC Health",
        coverAmount: "₹50 Lakhs",
        monthlyPremium: 1999,
        yearlyPremium: 21999,
        features: ["Hospitalization", "Pre & post care", "Critical illness", "International coverage"]
      }
    ],
    benefits: [
      { icon: "activity", text: "Cashless hospitalization" },
      { icon: "heart", text: "Pre & post hospitalization" },
      { icon: "activity", text: "Annual health checkup" }
    ],
    description: "Comprehensive health coverage for you and your family.",
    eligibility: {
      minAge: 18,
      maxAge: 70,
      preExisting: "Covered after 2 years"
    },
    filters: {
      coverAmount: ["₹5 Lakhs", "₹10 Lakhs", "₹50 Lakhs"],
      premium: ["Monthly", "Yearly"],
      features: ["Hospitalization", "Pre & post care", "Critical illness", "International coverage"]
    }
  };