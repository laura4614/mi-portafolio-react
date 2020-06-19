import React from "react";

const ProjectCard = (props) => {
  console.log(props);

  return (
    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 mt-4 mb-4">
      <div className="card" style={{ width: "15rem" }}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.url} className="btn btn-primary">
            Ir al Proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
