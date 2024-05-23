import React, {useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

const About = () => {
  const [redirect, setRedirect] = useState(false);
  const getAboutData = async () => {
    try {
      await axios.get("http://localhost:8000/about");
    } catch (error) {
      console.log("about client error " + error);
    }
  };
  useEffect(() => {
    getAboutData();
  }, []);

   if (redirect) {
     return <Navigate to="/login" />;
   }
  return (
    <>
      <section className="section-bioData section">
        <div className="container grid grid-two-column">
          <div className="bio-img">
            <img src="Img/bio data.png" alt="Brige" />
          </div>
          <div className="bio-data">
            <h2 className="common-heading">My Bio Data</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              quidem quis eveniet vero. Adipisci, quia excepturi. Reprehenderit
              at vero tempora nihil nobis, voluptate modi error, accusamus
              beatae deleniti praesentium repudiandae illo alias facilis quae
              odit dolor sequi exercitationem? Nemo non culpa et ea error
              reiciendis at necessitatibus numquam ad maiores.
            </p>
            <div className="bio-data-stats">
              <div className="bio-stats">
                <h3>Design</h3>
                <div className="bio-progress-bar">
                  <span>80%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>HTML</h3>
                <div className="bio-progress-bar bio-progress-2">
                  <span>99%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>CSS</h3>
                <div className="bio-progress-bar bio-progress-3">
                  <span>90%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>JavaScript</h3>
                <div className="bio-progress-bar bio-progress-4">
                  <span>85%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>MERN</h3>
                <div className="bio-progress-bar bio-progress-5">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div className="bio-data-btn">
              <NavLink to="#" className="btn">
                Download CV
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
