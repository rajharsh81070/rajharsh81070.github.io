import React from "react";

import udactiy from '../assets/udacity.svg';
import codechef from '../assets/codechef.jpeg';

function Certifications() {
  return (
    <div id="work"
      className="jumbotron jumbotron-fluid bg-light m-0">
      <div className="container container-fluid">
        <div className="d-inline align-self-center">
          <h1 className="display-4 pb-5 text-center title-a">Certificates
          <div className="line-mf"></div>
          </h1>
          <div className="row">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6">
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
              </div>
            </div>
            {/* <div className="col-md-4">
            <div className="work-box">
              <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  <img src={aguaDeLuz} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Agua De Luz</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack SmoothScrolling  VanillaJS</span> 
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href={aguaDeLuz1} data-lightbox="gallery-aguadeluz" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={aguaDeLuz2} data-lightbox="gallery-aguadeluz" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={aguaDeLuz3} data-lightbox="gallery-aguadeluz" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={aguaDeLuz4} data-lightbox="gallery-aguadeluz" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
            </div>
          </div> */}
            {/* <div className="col-md-4">
            <div className="work-box">
              <a href={todoList} data-lightbox="gallery-todo">
                <div className="work-img">
                  <img src={todoList} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Todo List</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack  ReactJS</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href={todoList1} data-lightbox="gallery-todo" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={todoList2} data-lightbox="gallery-todo" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={todoList3} data-lightbox="gallery-todo" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
            </div>
          </div> */}
            {/* <div className="col-md-4">
            <div className="work-box">
              <a href={medlingos} data-lightbox="gallery-medlingos">
                <div className="work-img">
                  <img src={medlingos} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Medlingos</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Bootstrap ReactJS GoogleAPI</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href={medlingos1} data-lightbox="gallery-medlingos" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={medlingos2} data-lightbox="gallery-medlingos" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={medlingos3} data-lightbox="gallery-medlingos" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
              <a href={medlingos4} data-lightbox="gallery-medlingos" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
            </div>
          </div> */}
            {/* <div className="col-md-4">
            <div className="work-box">
              <a href={amtbw} data-lightbox="gallery-amtbw">
                <div className="work-img">
                  <img src={amtbw} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">A Mile To Be Wild</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Wordpress  Blogging-Website</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div> */}
            {/* <div className="col-md-4">
            <div className="work-box">
              <a href={product} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={product} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Product Landing Page</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5  CSS3  Bootstrap</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;