import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    names: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleInput = (e) => {
    let namess = e.target.name;
    let valuess = e.target.value;
    setUser({ ...user, [namess]: valuess });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const { names, email, age, phone, address, password } = user;
      await axios.post("http://localhost:8000/register", {
        names,
        email,
        age,
        phone,
        address,
        password,
      });
      navigate("/login");
    } catch (error) {
      window.alert("UnRegister");
      console.log(error);
    }
  };
  return (
    <>
      <section className="section section-contact">
        <div className="container">
          <h2 className="common-heading">Register</h2>
        </div>

        <div className="section-contact-main">
          <form method="post">
            <div className="grid grid-two-column">
              <p>
                <input
                  type="text"
                  name="names"
                  onChange={handleInput}
                  placeholder="Enter Your Name "
                />
              </p>
              <p>
                <input
                  type="email"
                  name="email"
                  onChange={handleInput}
                  placeholder="Enter Your Email "
                />
              </p>
              <p>
                <input
                  type="number"
                  name="age"
                  onChange={handleInput}
                  placeholder="Enter Your Age "
                />
              </p>
              <p>
                <input
                  type="number"
                  name="phone"
                  onChange={handleInput}
                  placeholder="Enter Your Phone no. "
                />
              </p>
            </div>
            <p>
              <textarea
                cols="30"
                rows="10"
                name="address"
                onChange={handleInput}
                placeholder="Enter Your Address "
              ></textarea>
            </p>
            <p>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                placeholder="Enter Your Password "
              />
            </p>
            <p>
              <input
                type="submit"
                value="submit"
                className="btn"
                id="submit"
                onClick={formSubmit}
              />
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
