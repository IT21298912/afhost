import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { useEffect, useState } from "react";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [mass, setMass] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
      );
      const data = await res.json();
      setMass(data);
    }
  }, []);
  if (!mass) return <div><img src="assets/img/loader.gif" alt="" /></div>;
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/nasa.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 >EMBARK ON AN EPIC SPACE JOURNEY</h1>
            <h3>EXPLORE</h3>
            <br />
            <Button
              href="https://youtu.be/WeA7edXsU40?si=6biefuV1HZay5N6C"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
         
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
