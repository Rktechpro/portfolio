import React from "react";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
