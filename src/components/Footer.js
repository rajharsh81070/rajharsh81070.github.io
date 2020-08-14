import React from "react";

function Footer() {
  // const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <div
      id="contact"
      className="jumbotron jumbotron-fluid m-0"
    // style={bgStyle}
    // style={{ backgroundColor: 'white' }}
    >
      <div className="container container-fluid">
        <div className="d-inline align-self-center">
          <h2 className="display-4 pb-3 text-center title-a">Get In Touch
          <div className="line-mf"></div>
          </h2>
          <p className="lead text-center" style={{ fontSize: '22px' }}>I'm currently looking for full-time Software Engineering opportunities! If you know of
          any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at
            <a href="mailto:rajharsh81070@gmail.com">{" "}
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
          {/* <footer style={{backgroundColor:'white'}} className="mt-auto py-3 text-center">
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/anaashrafi"
        aria-label="My GitHub"
      >
        Ana Ashrafi
      </a>{" "}
      using <i className="fab fa-react"></i>
    </footer> */}
        </div>
      </div>
    </div>

  );
};

export default Footer;