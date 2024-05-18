import React from 'react'
import { NavLink } from "react-router-dom";

const Freelancing = () => {
  return (
    <>
     <section className="section section-freelancing">
      <div className="overlay"></div>
      <div className="container">
        <h2>I am <span>available</span> for Freelancing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          provident consectetur, mollitia ipsam alias nostrum.
        </p>
        <NavLink to="#" className="btn">Hire Me</NavLink>
      </div>
    </section> 
    </>
  )
}

export default Freelancing
