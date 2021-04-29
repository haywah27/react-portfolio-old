import React from "react";
import "./about.css";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";

function About() {
  return (
    <div>
      <Navigation />

      <Container className="dimension">
        <div className="nameBorder">
            Hayley<br />Wahlroos
        </div>
        {/* "i have an art and design background but decided to use those skills
          toward a technical applicaiton" */}
      </Container>
    </div>
  );
}

export default About;
