export const carInsurance = {
    id: "car",
    title: "Car Insurance",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=500",
    plans: [
      {
        id: "SBI",
        name: "Third Party",
        coverAmount: "₹5 Lakhs",
        monthlyPremium: 299,
        yearlyPremium: 2999,
        features: ["Third party liability"]
      },
      {
        id: "LIC",
        name: "Comprehensive",
        coverAmount: "₹10 Lakhs",
        monthlyPremium: 599,
        yearlyPremium: 6599,
        features: ["Third party liability", "Own damage", "Personal accident"]
      },
      {
        id: "HDFC",
        name: "Zero Dep",
        coverAmount: "₹15 Lakhs",
        monthlyPremium: 899,
        yearlyPremium: 9999,
        features: ["Third party liability", "Own damage", "Personal accident", "Zero depreciation"]
      }
    ],
    benefits: [
      { icon: "car", text: "24/7 roadside assistance" },
      { icon: "wrench", text: "Zero depreciation" },
      { icon: "shield", text: "Third-party liability" }
    ],
    description: "Complete protection for your vehicle with additional benefits.",
    eligibility: {
      vehicleAge: "Up to 15 years",
      validRC: "Required",
      license: "Required"
    },
    filters: {
      coverAmount: ["₹5 Lakhs", "₹10 Lakhs", "₹15 Lakhs"],
      premium: ["Monthly", "Yearly"],
      features: ["Third party liability", "Own damage", "Personal accident", "Zero depreciation"]
    }
  };