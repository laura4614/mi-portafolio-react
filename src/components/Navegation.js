import React from "react";

const Navegation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-">
      <a className="navbar-brand" href="#">
        Laura Vargas
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Trabajos <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navegation;
