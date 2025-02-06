import React from 'react'
import HeroSection from "../../components/Homepage/HeroSection";
import Testimonials from "../../components/Homepage/Testimonials";
import Busineses from "../../components/Homepage/Busineses";
import WhyUs from "../../components/Homepage/Whyus";
import Goals from "../../components/Homepage/Goals";
import Tools from "../../components/Homepage/Tools";
const Home = () => {
  return (
      <>
      <HeroSection/> 
      <Busineses/>
      <WhyUs/>
      <Goals/>
      <Tools/>
      <Testimonials/>
      </>
  )
}

export default Home