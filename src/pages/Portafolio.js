import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Portafolio = () => {
  return (
    <main className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col col-12 col-md-9 col-lg-9 portafolio-container">
          <Intro />
          <Projects />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Portafolio;
