import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import KeepInTouch from "../KeepInTouch/KeepInTouch";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactMe />
      <KeepInTouch />
      <Footer />
    </div>
  );
};

export default Main;
