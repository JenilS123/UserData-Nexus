import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Register from "./components/Register";
import Login from "./components/Login";
import Error from "./components/Error";
import axios from "axios";
import { ContextDataProvider } from "./components/Context";
import Layout from "./components/Layout";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <ContextDataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/registers" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </ContextDataProvider>
    </>
  );
};

export default App;
