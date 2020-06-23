import React from "react";
import foto from "../imagenes/fotolaura.jpg";
import Icono from "./Icono";

const Intro = () => {
  return (
    <section>
      <div className="mi-description">
        <h1 className="text-center mt-2 mb-1">Laura Vargas</h1>
        <p className="text-center">
          Hola, mi nombre es Laura Vargas Sanchez. Soy apasionada por el
          desarrollo frontend. Me encantan los videojuegos sueño con algún día
          desarrollar uno. <br /> Soy amante a los caballos, amo la naturaleza y
          la luna.
        </p>
      </div>

      <div className="foto">
        <img src={foto} className="img-fluid" alt="foto-Laura" />
      </div>
      <div className="text-center mt-3 mb-5">
        <h3>Habilidades</h3>
        <Icono icono="fa-html5" color="orange" />
        <Icono icono="fa-js" color="yellow" />
        <Icono icono="fa-css3" color="blue" />
        <Icono icono="fa-react" color="blue" />
        <Icono icono="fa-github" color="black" />
      </div>
    </section>
  );
};

export default Intro;
