import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "../pages/home/Home"
import Navbar from "../components/Navbar/Navbar"
import Contact from "../pages/contact/Contact"
import About from "../pages/about/About"
import Projects from "../pages/projects/Projects"


import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>

      <Navbar />


  
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />



      
      </Routes>
  
    </BrowserRouter>
  )
}

export default Router