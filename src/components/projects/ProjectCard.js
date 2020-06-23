import React from "react";

const ProjectCard = ({ name, description, img, url }) => {
  console.log(img);

  return (
    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 mt-4 mb-4">
      <div className="card m-auto project-card" style={{ width: "15rem" }}>
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir al Proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
