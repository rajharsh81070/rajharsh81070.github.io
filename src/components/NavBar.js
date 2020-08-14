import React, { useState, useEffect } from "react";
// import Pdf from "../editable-stuff/resume.pdf";
import { FirstName } from "../assets/data.json";

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
      className={`navbar navbar-expand-md fixed-top navbar-light navbar-b ${
        isTop ? "bg-transparent" : "bg-white"
        } `}
      style={{ width: '100%' }}
    >
      <div className="container">
        <a className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}
          style={{ fontSize: 'x-large' }}>
          {`<${FirstName} />`}
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
                className="nav-link lead"
                href={process.env.PUBLIC_URL + "/#about"}
                style={{ fontSize: 'x-large' }}
              >
                <b>About</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link lead"
                href={process.env.PUBLIC_URL + "/#projects"}
                style={{ fontSize: 'x-large' }}
              >
                Projects
            </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link lead"
                href={process.env.PUBLIC_URL + "/#skills"}
                style={{ fontSize: 'x-large' }}
              >
                <b>Skills</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link lead"
                href={process.env.PUBLIC_URL + "/#work"}
                style={{ fontSize: 'x-large' }}
              >
                <b>Certificates</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;