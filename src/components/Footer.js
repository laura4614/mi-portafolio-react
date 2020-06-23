import React from "react";
import Icono from "./Icono";

const Footer = () => {
  return (
    <footer className="row mt-5 p-5">
      <div className="col col-12 text-center">
        <h2>Contactame</h2>
      </div>
      <div className="col col-12 text-center">
        <Icono
          icono="fa-facebook-square"
          link="https://www.facebook.com/laura.vargas.167/"
        />
        <Icono
          icono="fa-whatsapp"
          link="https://api.whatsapp.com/send?phone=+573008720156"
        />
        <Icono
          icono="fa-linkedin"
          link="https://www.linkedin.com/in/laura-vargas-sanchez-3a653017b/"
        />
        <Icono icono="fa-github" link="https://github.com/laura4614" />
      </div>
    </footer>
  );
};

export default Footer;
