import React from "react";
import "./about.css";
import { Jumbotron, Container, Card } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";
import Headshot from "../components/Headshot/Headshot";

function About() {
  return (
    <div>
      <Navigation />

      <Container>
        <Jumbotron className="dimension text-center">
          <Container>
            <Container className="alignGreeting">
              <Headshot />
              <span className="titleMessage">Hello!</span>
            </Container>
            <Card className="cardCss">
              <Card.Body>
                My name is Hayley. I graduated from the University of Oregon with an art and technology degree and have recentley shifted my focus to full stack development. I love dogs, learning new things and exploring the outdoors!
              </Card.Body>
            </Card>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default About;
