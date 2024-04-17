import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import NotFound from "../components/Error/NotFound";

import React from "react";
import Footer from "../components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
