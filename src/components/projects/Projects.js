import React from "react";
import ProjectCard from "./Project";
import fotolaura from "../../imagenes/fotolaura.jpg";

const ProjectsList = [
  {
    name: "pagina tributo",
    description: "la descripcion",
    url: "www.google.com",
    img: { fotolaura },
  },
  {
    name: "pagina tributo",
    description: "la descripcion",
    url: "www.google.com",
    img: { fotolaura },
  },
];

const Projects = () => {
  console.log(ProjectsList);

  return (
    <section className="text-center">
      <h1>Proyectos</h1>
      <div className="row d-flex justify-content-center">
        {ProjectsList.map((project) => {
          console.log(project.name);
        })}
      </div>
    </section>
  );
};

export default Projects;
