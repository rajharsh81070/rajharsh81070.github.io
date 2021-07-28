import React, { useState, useEffect } from "react";
import Pdf from "../assets/harsh_resume.pdf";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark navbar-b ${
        isTop ? "bg-transparent" : "bg-dark"
        } `}
      style={{ width: '100%' }}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href={process.env.PUBLIC_URL + "/#home"}
        // style={{ fontSize: 'x-large' }}
        >
          <img src={logo} alt="<Harsh />" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="navbar-brand lead"
                href={process.env.PUBLIC_URL + "/#about"}
              // style={{ fontSize: 'x-large' }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand lead"
                href={process.env.PUBLIC_URL + "/#experience"}
              // style={{ fontSize: 'x-large' }}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand lead"
                href={process.env.PUBLIC_URL + "/#projects"}
              // style={{ fontSize: 'x-large' }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand lead"
                href={process.env.PUBLIC_URL + "/#skills"}
              // style={{ fontSize: 'x-large' }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand lead"
                href={process.env.PUBLIC_URL + "/#work"}
              // style={{ fontSize: 'x-large' }}
              >
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar-brand lead"
                href={Pdf}
                target="_blank"
                // style={{ fontSize: 'x-large' }}
                rel="noreferrer noopener"
              >
                <b>Resume</b>
              </a>
            </li>
          </ul>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;