import React from 'react'
import Stats from '../components/Home/Stats'
import Allpolicy from '../components/Allpolicy'
import Chatbot from '../components/Home/Chatbot'
import Landing from '../components/Home/Landing'
import Navbar from '../components/Navbar/Navbar'
import PopularCalculators from '../components/PopularCalculators'


const Home = () => {


    return (
        <>
        <Navbar/>
        <Landing/>
        <Allpolicy />
        <Stats/>
        <PopularCalculators/>

        <div className="relative">
      
      <Chatbot />
    </div>

        </>
    )
}

export default Home
