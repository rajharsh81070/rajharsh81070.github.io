import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactGa from 'react-ga';

const Analytics = () => {
  ReactGa.initialize("UA-175562091-1 ");
  ReactGa.pageview('Skills!');
}

const Skills = () => {
  Analytics();
  return (
    <div
      id="skills"
      className="jumbotron jumbotron-fluid m-0"
    >
      <div className="container container-fluid p-5">
        {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}
        <div className="d-inline align-self-center">
          <h1 className="display-4 pb-5 text-center title-a">Skills
          <div className="line-mf"></div>
          </h1>
          <div className="row">
            <div className="col">
              {/* <br /> */}
              <p className="lead">C/C++
                  <ProgressBar now={81} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">Data Structures
                <ProgressBar now={84} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">Java
                  <ProgressBar now={36} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">Python
                  <ProgressBar now={45} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">JavaScript
                <ProgressBar now={60} style={{ backgroundColor: 'white' }} />
              </p>
            </div>
            <div className="col">
              {/* <br /> */}
              <p className="lead">Git
                  <ProgressBar now={60} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">Algorithms
                <ProgressBar now={87} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">HTML/CSS
                <ProgressBar now={66} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">Node.js
                <ProgressBar now={69} style={{ backgroundColor: 'white' }} />
              </p>
              <p className="lead">React js
                <ProgressBar now={75} style={{ backgroundColor: 'white' }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

