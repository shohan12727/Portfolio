import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
