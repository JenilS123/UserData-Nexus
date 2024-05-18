import React from 'react'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <main>
        <section className="section-hero section">
          <div className="container grid grid-two-column">
            <div className="section-hero-data">
              <p className="hero-top-data">This is me</p>
              <h1 className="hero-heading">Demo</h1>
              <p className="hero-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                aperiam omnis pariatur, labore cum sapiente non ipsum animi sunt
                ex consectetur quos deserunt quasi, velit ut ab nesciunt nisi
                illo. Dolores eos ab est, officiis ratione nemo tempora, quos
                soluta placeat numquam earum optio nostrum itaque aliquid ea
                quas necessitatibus.
              </p>
              <div>
                <NavLink to="#" className="btn hireme-btn">
                  Hire me
                </NavLink>
              </div>
            </div>
            <div className="section-hero-image">
              <img src="Img/hero Img.jpg" alt="heroImg" className="hero-img" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero
