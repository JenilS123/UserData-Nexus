import React from 'react'
import Hero from "../HomeCompo/Hero"
import About from "./About"
import Contact from "./Contact"
import Portfolio from "../HomeCompo/Portfolio";
import Resume from "../HomeCompo/Resume";
import NumberCount from "../HomeCompo/NumberCount";
import Service from "./Service";
import Swiper from "../HomeCompo/Swiper";
import Freelancing from "../HomeCompo/Freelancing";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <NumberCount />
      <Service />
      <Swiper />
      <Freelancing />
      <Contact />
      <Footer />
    </>
  );
}

export default Home
