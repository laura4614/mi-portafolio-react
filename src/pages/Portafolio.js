import React, { Component } from "react";
import Navegation from "../components/Navegation";
import Intro from "../components/Intro";
import Projects from "../components/Projects";

const Portafolio = () => {
  return (
    <main className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col col-12 col-md-9 col-lg-9  bg-primary">
          <Navegation />
          <Intro />
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Portafolio;
