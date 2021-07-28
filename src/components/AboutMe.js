import React from "react";
import Pdf from "../assets/harsh_resume.pdf";
import {
  aboutDescription,
  aboutHeading
} from '../assets/data.json';
import ReactGa from 'react-ga';

const Analytics = () => {
  // Tracking ID - UA-175562091-1
  ReactGa.initialize("UA-175562091-1");
  ReactGa.pageview('About Me!');
}

function AboutMe() {
  Analytics();
  return (
    <div
      id="about"
      className="jumbotron jumbotron-fluid bg-light m-0">
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