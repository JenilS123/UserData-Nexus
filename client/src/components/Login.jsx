import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ContextData} from "./Context"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(ContextData);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const userDoc = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      setUser(userDoc.data);
      window.alert("login successfull")
      navigate("/");
    } catch (error) {
      window.alert("Login Error");
      console.log(error);
    }
  };

  return (
    <>
      <section className="section section-contact">
        <div className="container">
          <h2 className="common-heading">Login</h2>
        </div>

        <div className="section-contact-main">
          <form method="post">
            <p>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <p>
              <input
                type="submit"
                value="submit"
                className="btn"
                id="submit"
                onClick={loginUser}
              />
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
