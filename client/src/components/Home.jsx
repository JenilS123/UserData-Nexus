import React from 'react'
import Hero from "../HomeCompo/Hero"
import About from "./About"
import Contact from "./Contact"
import Portfolio from "../HomeCompo/Portfolio";
import Resume from "../HomeCompo/Resume";
import Service from "./Service";
import Freelancing from "../HomeCompo/Freelancing";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Service />
      <Freelancing />
      <Contact />
      <Footer />
    </>
  );
}

export default Home
