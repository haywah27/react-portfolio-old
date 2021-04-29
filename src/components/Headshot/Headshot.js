import "./headshot.css";
import React from "react";
import { Image } from "react-bootstrap";
import headshot from "./headPhoto.png";

function Headshot() {
  return (
    <>
      <Image src={headshot} roundedCircle alt="headshot" className="head" />
    </>
  );
}

export default Headshot;
