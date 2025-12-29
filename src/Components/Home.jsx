import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
