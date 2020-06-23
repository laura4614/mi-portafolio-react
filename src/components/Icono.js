import React from "react";

const Icono = ({ icono, link, color }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <i
      className={`fab ${icono} m-3`}
      style={{ fontSize: "50px", color: color ? color : "black" }}
    ></i>
  </a>
);

export default Icono;
