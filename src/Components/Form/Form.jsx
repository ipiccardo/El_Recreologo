import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import "./styles.css";

const ContactForm = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert show={show} variant="success">
        <Alert.Heading>¡GRACIAS!</Alert.Heading>
        <p>
         ¡¡¡ Pronto nos pondremos en contacto con vos!!!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Volver 
          </Button>
        </div>
      </Alert>
    );
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_gtwrblu",
        e.target,
        "user_NSHvzdV4KM23kqqZqoR3a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="formulario">
      <h1 className="formTitle">Envíanos un mensaje:</h1>
      <Form className="form" onSubmit={sendEmail}>
        <Row>
          <Col>
            <Form.Control
              name="name"
              id="name"
              className="name"
              placeholder="Ingrese su nombre..."
            />
          </Col>
          <Col>
            <Form.Control
              name="email"
              id="email"
              className="email"
              placeholder="Ingrese su email..."
            />
          </Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              name="mensaje"
              id="mensaje"
              className="mensaje"
              placeholder="Ingrese su mensaje..."
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Row>
        <Button
          type="submit"
          className="buttonForm"
          onClick={() => setShow(true)}
        >
          ENVIAR
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
