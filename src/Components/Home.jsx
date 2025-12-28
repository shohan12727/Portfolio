import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Banner from "./Banner";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
