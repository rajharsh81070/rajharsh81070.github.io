import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import {
  FirstName,
  LastName,
  devDesc,
  icons,
} from "../assets/data.json";
import ReactGa from 'react-ga';

const Analytics = () => {
  ReactGa.initialize("UA-175562091-1 ");
  ReactGa.pageview('Main Body!');
}

const MainBody = () => {
  const [hoverstatus, setHoverstatus] = useState(
    new Array(icons.length).fill("socialicons")
  );

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      return setHoverstatus(newhoverStatus);
    }
  };

  Analytics();

  return (
    <div>
      <div
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <h1 className="display-3">
            {`${FirstName} ${LastName}`}
          </h1>
          {
            count ? (
              <Typist avgTypingDelay={120} onTypingDone={() => setCount(0)} className="lead"> {devDesc}
              </Typist>
            )
              :
              ("")
          }
          < div className="p-4">
            {icons.map((icon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i
                  className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                  onMouseOver={() => toggleHover({ icon, event: "enter" })}
                  onMouseOut={() => toggleHover({ icon, event: "leave" })}
                />
              </a>
            ))}
          </div>
          {/* <a
            className="btn btn-outline-light btn-lg"
            href="#about"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a> */}
          <a
            href="#about"
            rel="noopener"
            aria-label="Learn more about me"
          >
            <div className="scroll-downs">
              <div className="mousey">
                <div className="scroller">
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div >
  );
};

export default MainBody;