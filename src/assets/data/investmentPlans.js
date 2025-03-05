export const investmentPlans = {
    id: "investment",
    title: "Investment Plans",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=500",
    plans: [
      {
        id: "SBI",
        name: "Growth Plan",
        coverAmount: "₹10 Lakhs",
        monthlyPremium: 999,
        yearlyPremium: 11999,
        features: ["Life coverage", "Wealth creation"]
      },
      {
        id: "LIC",
        name: "Balanced Plan",
        coverAmount: "₹25 Lakhs",
        monthlyPremium: 1499,
        yearlyPremium: 16999,
        features: ["Life coverage", "Wealth creation", "Tax benefits"]
      },
      {
        id: "HDFC",
        name: "HDFC Growth",
        coverAmount: "₹50 Lakhs",
        monthlyPremium: 2499,
        yearlyPremium: 27999,
        features: ["Life coverage", "Wealth creation", "Tax benefits", "Market-linked returns"]
      }
    ],
    benefits: [
      { icon: "trending-up", text: "Guaranteed returns" },
      { icon: "piggy-bank", text: "Wealth creation" },
      { icon: "shield", text: "Life coverage" }
    ],
    description: "Grow your wealth while staying protected with our investment plans.",
    eligibility: {
      minAge: 18,
      maxAge: 60,
      minInvestment: "₹12,000/year"
    },
    filters: {
      coverAmount: ["₹10 Lakhs", "₹25 Lakhs", "₹50 Lakhs"],
      premium: ["Monthly", "Yearly"],
      features: ["Life coverage", "Wealth creation", "Tax benefits", "Market-linked returns"]
    }
  };