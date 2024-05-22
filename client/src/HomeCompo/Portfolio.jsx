import React from 'react'
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <section className="section section-potfolio" id="potfolio-section">
        <div className="container">
          <h2 className="common-heading">Latest Work</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, magnam
            possimus? Est vitae possimus dolore illo at eligendi eos rerum?
          </p>
        </div>

        <div className="p-btns">
          <div className="btn p-btn" data-btn-num="1">
            Website
          </div>
          <div className="btn p-btn" data-btn-num="2">
            Youtube
          </div>
          <div className="btn p-btn" data-btn-num="3">
            Design
          </div>
        </div>

        <div className="container grid grid-three-column potfolio-img">
          <div className="img-overlay p-btn--1">
            <img src="Img/img1.webp" alt="img1" />
            <div className="overlay">
              <NavLink to="#" target="_blank" className="common-heading">
                Project 1
              </NavLink>
            </div>
          </div>
          <div className="img-overlay p-btn--2">
            <img src="Img/img2.png" alt="img2" />
            <div className="overlay">
              <NavLink to="#" target="_blank" className="common-heading">
                Project 2
              </NavLink>
            </div>
          </div>
          <div className="img-overlay p-btn--3">
            <img src="Img/img1.webp" alt="img3" />
            <div className="overlay">
              <NavLink to="#" target="_blank" className="common-heading">
                Project 3
              </NavLink>
            </div>
          </div>
          <div className="img-overlay p-btn--1">
            <img src="Img/img2.png" alt="img4" />
            <div className="overlay">
              <NavLink to="#" target="_blank" className="common-heading">
                Project 4
              </NavLink>
            </div>
          </div>
          <div className="img-overlay p-btn--2">
            <img src="Img/img1.webp" alt="img5" />
            <div className="overlay">
              <NavLink to="#" target="_blank" className="common-heading">
                Project 5
              </NavLink>
            </div>
          </div>
          <div className="img-overlay p-btn--3">
            <img src="Img/img2.png" alt="img6" />
            <div className="overlay">
              <NavLink to="#" target="_blank" className="common-heading">
                Project 6
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio
