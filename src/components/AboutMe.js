import React from "react";
import Pdf from '../assets/Harsh_Resume_31_07.pdf';
import {
  aboutDescription,
  aboutHeading
} from '../assets/data.json';

function AboutMe() {
  return (
    <div
      id="about"
      className="jumbotron jumbotron-fluid m-0"
    // style={{ backgroundColor: '#f7f7f7' }}
    >
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 mb-5 text-center title-a">{aboutHeading}
              <div className="line-mf"></div>
            </h1>
            <p className="lead text-center">{aboutDescription}</p>
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={Pdf}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;