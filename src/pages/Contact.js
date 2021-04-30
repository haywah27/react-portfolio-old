"i have an art and design background but decided to use those skills toward a technical applicaiton";

import React from "react";
import "./contact.css";
import { Jumbotron, Container, Button, Form } from "react-bootstrap";
import Navigation from "../components/Nav/Nav";
import ContactForm from "../components/Form/Form";
import MediaCard from "../components/MediaCard/MediaCard";

function Contact() {
  return (
    <div>
      <Navigation />
      <Container>
        <Jumbotron className="jumbo ">
          <Container>
            <MediaCard />
            <ContactForm />
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Contact;
