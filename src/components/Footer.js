import React from "react";
import {
  footer,
  email
} from "../assets/data.json";

function Footer() {
  // const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <div
      id="contact"
      className="jumbotron jumbotron-fluid m-0"
    // style={bgStyle}
    // style={{ backgroundColor: 'white' }}
    >
      <div className="container container-fluid p-5">
        <div className="d-inline align-self-center">
          <h2 className="display-4 pb-3 text-center title-a">Get In Touch
          <div className="line-mf"></div>
          </h2>
          <p className="lead text-center" style={{ fontSize: '22px' }}>{footer}
            <a style={{ fontSize: '1rem' }} href={`mailto:${email}`}>{" "}
            rajharsh81070@gmail.com
            </a>{"."}
          </p>
          <footer
            // style={bgStyle} 
            className="mt-auto py-3 text-center"
          >
            <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> and <i class="fas fa-coffee"></i> by{" "}
            <a
              className="badge badge-dark"
              rel="noopener"
              href="https://github.com/rajharsh81070"
              aria-label="My GitHub"
            >
              Harsh Raj
      </a>{" "}
      using <i className="fab fa-react"></i>
          </footer>
        </div>
      </div>
    </div>

  );
};

export default Footer;