import React from "react";
import ProjectCard from "./Project";
import fotolaura from "../../imagenes/fotolaura.jpg";
import ProjectsList from "../../datos/datos_projectos";

const Projects = () => {
  return (
    <section className="text-center">
      <h1>Proyectos</h1>
      <div className="row d-flex justify-content-center">
        {ProjectsList.map((project, index) => {
          console.log(index);

          return (
            <ProjectCard
              key={index}
              name={project.name}
              img={project.img}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
