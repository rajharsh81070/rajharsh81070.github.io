import React from "react";

const ProjectCard = ({ value }) => {
  const { name, description, github_url, languages, live_demo } = value;
  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p className="card-text">{description} </p>
          <a
            href={live_demo}
            className="btn btn-outline-secondary mr-3"
          >
            <i className="fab fa-github" /> Live Demo
          </a>
          <a
            href={github_url}
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i className="fab fa-github" /> Repo
          </a>
          <hr />
          <div className="">
            Languages:{" "}
            {languages.map((language) => (
              <p key={language} className="badge badge-light card-link">
                {language}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;