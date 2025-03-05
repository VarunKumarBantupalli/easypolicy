import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Contact from './components/Navbar/Contact';

import Insurance from './components/Insurance';
import { termLifeInsurance } from './assets/data/termLifeInsurance.js';
import { healthInsurance } from './assets/data/healthInsurance';
import { carInsurance } from './assets/data/carInsurance';
import { travelInsurance } from './assets/data/travelInsurance';
import { homeInsurance } from './assets/data/homeInsurance';
import { investmentPlans } from './assets/data/investmentPlans';

import Claim from './components/Claim.jsx'
import Form from './components/Form.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/form" element={<Form />} />

          <Route path="/insurance/term-life" element={<Insurance insuranceData={termLifeInsurance} />} />
        <Route path="/insurance/health" element={<Insurance insuranceData={healthInsurance} />} />
        <Route path="/insurance/car" element={<Insurance insuranceData={carInsurance} />} />
        <Route path="/insurance/travel" element={<Insurance insuranceData={travelInsurance} />} />
        <Route path="/insurance/home" element={<Insurance insuranceData={homeInsurance} />} />
        <Route path="/insurance/investment" element={<Insurance insuranceData={investmentPlans} />} />

   

        </Routes>
          <Footer/>
      </Router> 



    </>
  );
}

export default App;


//   <Route path="/" element={<Home />} />
//   <Route path="/login" element={<Auth />} />
//   <Route path="/shop" element={<Merchandise />} />
//   <Route path="/booking" element={<Booking />} />
