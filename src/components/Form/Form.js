import React from "react";
import { Jumbotron, Container, Button, Form } from "react-bootstrap";
import "./form.css";

function ContactForm() {
    function handleSumbit() {}

    function cancelForm() {}

  return (
    <>
      <Jumbotron className="formContainer">
        <h2>Direct Message</h2>
        <hr />
        <Form>
          <Form.Group controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Anything specific?" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Ex: name@website.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="What's up?" />
          </Form.Group>
          <Button variant="primary" type="submit" className="submitBtn" onClick={handleSumbit()}>
            Submit
          </Button>
          <Button variant="primary" type="submit" className="cancelBtn" onClick={cancelForm()}>
            Cancel
          </Button>
        </Form>
      </Jumbotron>
    </>
  );
}

export default ContactForm;
