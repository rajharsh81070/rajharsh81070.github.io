import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsArray } from "../assets/data.json";

const Project = () => {
  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-light m-0">
      <div className="container container-fluid p-5">
        <div className="d-inline align-self-center title-box">
          <h1 className="display-4 pb-5 text-center title-a">Projects
          <div className="line-mf"></div>
          </h1>
          <div className="row">
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;