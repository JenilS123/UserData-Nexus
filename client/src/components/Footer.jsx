import React from 'react'
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <footer className="section-footer section">
        <div className="container grid grid-four-column">
          <div className="f-about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              pariatur dolores rerum omnis fugiat magnam quos atque cupiditate
              animi totam!
            </p>
          </div>

          <div className="f-links">
            <h3>Links</h3>
            <ul>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="/">home</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="/about">about</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="/service">services</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="portfolio">portfolio</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="/">home</NavLink>
              </li>
            </ul>
          </div>

          <div className="f-services">
            <h3>Services</h3>
            <ul>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="#">web Design</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="#">web devlopment</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="#">mern project</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="#">online claases</NavLink>
              </li>

              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <NavLink to="/">home</NavLink>
              </li>
            </ul>
          </div>

          <div className="f-address">
            <h3>Have a Questions ?</h3>
            <address>
              <div>
                <p>
                  <span>
                    <ion-icon name="location-outline"></ion-icon>
                  </span>
                  India
                </p>
              </div>

              <div>
                <p>
                  <span>
                    <ion-icon name="call-outline"></ion-icon>
                  </span>
                  <NavLink to="tel:+919876543210">9876543210</NavLink>
                </p>
              </div>

              <div>
                <p>
                  <span>
                    <ion-icon name="mail-outline"></ion-icon>
                  </span>
                  <NavLink to="mailto:xyz@gmail.com">xyz@gmail.com</NavLink>
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="container">
          <div className="f-social-icons">
            <NavLink to="#" target="_blank">
              <ion-icon name="logo-linkedin" className="icons"></ion-icon>
            </NavLink>
            <NavLink to="#" target="_blank">
              <ion-icon name="logo-facebook" className="icons"></ion-icon>
            </NavLink>
            <NavLink to="#" target="_blank">
              <ion-icon name="logo-twitter" className="icons"></ion-icon>
            </NavLink>
          </div>

          <div className="f-credits">
            <p>Copyright 2023 All rights reserve</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
