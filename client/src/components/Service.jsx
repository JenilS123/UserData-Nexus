import React, {useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Service = () => {
  const [redirect, setRedirect] = useState(false);
  const accessService = async () => {
    try {
      await axios.get("http://localhost:8000/service");
    } catch (error) {
      setRedirect(true);
      console.log("Service error " + error);
    }
  };
  useEffect(() => {
    accessService();
  }, []);

  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <section className="section service-section">
        <div className="container">
          <h2 className="common-heading">Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quod
            in suscipit totam nemo, dicta impedit atque, omnis aut, rerum quas
            autem ducimus. Corrupti quam error laborum eveniet est! Dolore est
            earum pariatur debitis?
          </p>
        </div>

        {/* Service Card  */}

        <div className="container grid grid-three-column">
          <div className="service-box">
            <ion-icon
              name="desktop-outline"
              className="service-icon"
            ></ion-icon>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid pariatur quia ratione esse distinctio?
            </p>
          </div>

          <div className="service-box">
            <ion-icon
              name="desktop-outline"
              className="service-icon"
            ></ion-icon>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid pariatur quia ratione esse distinctio?
            </p>
          </div>

          <div className="service-box">
            <ion-icon
              name="desktop-outline"
              className="service-icon"
            ></ion-icon>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid pariatur quia ratione esse distinctio?
            </p>
          </div>

          <div className="service-box">
            <ion-icon
              name="desktop-outline"
              className="service-icon"
            ></ion-icon>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid pariatur quia ratione esse distinctio?
            </p>
          </div>

          <div className="service-box">
            <ion-icon
              name="desktop-outline"
              className="service-icon"
            ></ion-icon>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid pariatur quia ratione esse distinctio?
            </p>
          </div>

          <div className="service-box">
            <ion-icon
              name="desktop-outline"
              className="service-icon"
            ></ion-icon>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid pariatur quia ratione esse distinctio?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
