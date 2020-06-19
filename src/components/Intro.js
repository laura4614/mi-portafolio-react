import React from "react";
import foto from "../imagenes/fotolaura.jpg";
const Intro = () => {
  return (
    <section>
      <div className="mi-description">
        <p>
          Hola mi nombre es Laura vargas sanchez soy apasionada por el
          desarrollo frontend me encantan los videojuegos sueño con algun dia
          desarrollar uno
        </p>
      </div>
      <div className="foto">
        <img src={foto} className="img-fluid" alt="foto-Laura" width="100%" />
      </div>
    </section>
  );
};

export default Intro;
