import React from "react";
import {
  certificationsHeading,
  certificationsArray
} from "../assets/data.json";

import udacity from '../assets/udacity.svg';
import codechef from '../assets/codechef.jpeg';
import ReactGa from 'react-ga';

const Analytics = () => {
  ReactGa.initialize("UA-175562091-1 ");
  ReactGa.pageview('Certifications!');
}

function Certifications() {
  Analytics();
  return (
    <div id="work"
      className="jumbotron jumbotron-fluid bg-light m-0">
      <div className="container container-fluid p-5">
        <div className="d-inline align-self-center">
          <h1 className="display-4 pb-5 text-center title-a">{certificationsHeading}
            <div className="line-mf"></div>
          </h1>
          <div className="row">
            {certificationsArray.map((certificate) => {
              return (
                <div key={certificate.id} className="col-md-6">
                  <div className="work-box">
                    <a href={certificate.confirm_url}
                      target="_blank"
                      rel="noreferrer noopener"
                      data-lightbox="gallery-udactiy"
                    >
                      <div className="work-img">
                        <img src={certificate.id === 0 ? udacity : codechef} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <p className="w-ctegory">{certificate.name}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })}
            {/* <div className="col-md-6">
              <div className="work-box">
                <a href="https://confirm.udacity.com/HMSACMVN"
                  target="_blank"
                  rel="noreferrer noopener"
                  data-lightbox="gallery-udactiy"
                >
                  <div className="work-img">
                    <img src={udactiy} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <p className="w-ctegory">Udacity-FSND</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
            {/* <div className="col-md-6" style={{ marginTop: '15px' }}>
              <div className="work-box">
                <a href="https://www.codechef.com/certificates/public/b5136b6"
                  target="_blank"
                  rel="noreferrer noopener"
                  data-lightbox="gallery-codechef"
                >
                  <div className="work-img">
                    <img src={codechef} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <p className="w-ctegory">Codechef-CCDSAP</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Certifications;