import { useState } from "react";

import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import PerformanceGallery from "./components/PerformanceGallery";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


export default function App() {

  const [loading, setLoading] = useState(true);


  return (
    <>

      {loading && (
        <IntroAnimation
          onFinish={() => setLoading(false)}
        />
      )}



      {!loading && (

        <div 
          className="
          relative 
          min-h-screen 
          text-white 
          overflow-x-hidden
          "
        >


          {/* Particle Background */}

          <ParticleBackground />



          {/* Custom Cursor */}

          <CustomCursor />





          {/* Main Website */}

          <div className="relative z-10">


            <Navbar />


            <Home />


            <About />


            <Skills />


            <Project />


            <Experience />


            <Testimonials />

            <PerformanceGallery />

            <Contact />


            <Footer />


          </div>



        </div>

      )}

    </>
  );
}