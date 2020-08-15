import React from "react";

const ProjectCard = ({ value }) => {
  const { name, description, github_url, technologies, live_demo
  } = value;
  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h4 style={{ textDecoration: 'underline' }} className="card-title">{name}</h4>
          <p className="card-text">{description} </p>
          <a
            href={github_url}
            target=" _blank"
            className="btn btn-outline-secondary mb-3  mr-3"
          >
            <i className="fab fa-github" /> Repo
          </a>
          <a
            href={live_demo}
            target=" _blank"
            className="btn btn-outline-secondary mb-3"
          >
            <i className="fab fa-chrome" /> Live
          </a>
          <hr />
          <div className="">
            Technologies-Used:{" "}
            {technologies.map((technology) => (
              <p key={technology} className="badge badge-dark card-link">
                {technology}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;