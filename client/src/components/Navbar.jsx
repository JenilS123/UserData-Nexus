import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ContextData } from "./Context";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useContext(ContextData);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    try {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      }).catch((error) => {
         if (error.response.status === 400) {
           console.log("profile fetch error ", error);
         }
      })
    } catch (error) {
     console.log("catch error ",error);
      
    }
  }, []);

  const handleLogout = () => {
    axios.post("/logout").then(() => {
      setRedirect(true);
    });
  };
  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <header className="header" id="header">
        <div className="header-name">
          <img src="Img/slack_logo.jpg" alt="slack" className="header-img" />
          <h3>UserData - Nexus</h3>
        </div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <NavLink to="/" className="navbar-link home-link">
                Home
              </NavLink>
            </li>

            {!!user ? (
              <>
                <li>
                  <NavLink to="./about" className="navbar-link about-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="./service" className="navbar-link servics-link">
                    Servics
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="navbar-link portfolio-link">
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="./contact" className="navbar-link content-link">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLogout}
                    to="./login"
                    className="navbar-link content-link logout"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="./registers"
                    className="navbar-link content-link"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="./login" className="navbar-link content-link">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        <h3>{user?.names}</h3>

        <div className="mobile-navbar-btn">
          <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
          <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
        </div>
      </header>
    </>
  );
};

export default Navbar;
