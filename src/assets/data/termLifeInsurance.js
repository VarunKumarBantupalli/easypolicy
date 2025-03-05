export const termLifeInsurance = {
    id: "term-life",
    title: "Term Life Insurance",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500",
    plans: [
      {
        id: "SBI",
        name: "SBI Plan",
        coverAmount: "₹50 Lakhs",
        monthlyPremium: 499,
        yearlyPremium: 5499,
        features: ["Life coverage", "Tax benefits"]
      },
      {
        id: "LIC",
        name: "LIC Plan",
        coverAmount: "₹1 Crore",
        monthlyPremium: 799,
        yearlyPremium: 8999,
        features: ["Life coverage", "Tax benefits", "Critical illness"]
      },
      {
        id: "HDFC",
        name: "HDFC Plan",
        coverAmount: "₹2 Crore",
        monthlyPremium: 1499,
        yearlyPremium: 16999,
        features: ["Life coverage", "Tax benefits", "Critical illness", "Accidental death"]
      }
    ],
    benefits: [
      { icon: "shield", text: "Comprehensive life coverage" },
      { icon: "banknote", text: "Tax benefits under 80C" },
      { icon: "heart", text: "Critical illness coverage" }
    ],
    description: "Secure your family's future with our comprehensive term life insurance plan.",
    eligibility: {
      minAge: 18,
      maxAge: 65,
      minIncome: "₹3 Lakhs/year"
    },
    filters: {
      coverAmount: ["₹50 Lakhs", "₹1 Crore", "₹2 Crore"],
      premium: ["Monthly", "Yearly"],
      features: ["Life coverage", "Tax benefits", "Critical illness", "Accidental death"]
    }
  };