import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
        <div
          className="navbar-brand"
        >
          <img src={logo} alt="<Harsh />" />
        </div>
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
              <Link
                className="navbar-brand lead"
                to="#about"
                smooth
              // style={{ fontSize: 'x-large' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navbar-brand lead"
                to={"#experience"}
                smooth
              // style={{ fontSize: 'x-large' }}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navbar-brand lead"
                to={"#projects"}
                smooth
              // style={{ fontSize: 'x-large' }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navbar-brand lead"
                to={"#skills"}
                smooth
              // style={{ fontSize: 'x-large' }}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navbar-brand lead"
                smooth
                to={"#work"}
              // style={{ fontSize: 'x-large' }}
              >
                Certificates
              </Link>
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