import React from "react";
import { productJSON } from "./product";
import { Alert, Card, Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";

const firstName = prompt("What's your first name?");
console.log(firstName);

export default function App() {
  const product = JSON.parse(productJSON);
  return (
    <Container>
      {/* Navbar component starts here */}
      <Navbar />
      {/* Product display section starts here*/}
      <Row>
        <Card className="mb-3 mx-auto" style={{ width: "18rem" }}>
          <Image />
          <Card.Body>
            <Name />
            <Description />
            <Price />
          </Card.Body>
        </Card>
      </Row>
      {firstName ? (
        <Alert
          key={"dark"}
          variant={"dark"}
          className="flex-grow-1 d-flex align-items-center bg-dark text-light"
        >
          <img
            src="https://images.unsplash.com/photo-1599475735868-a8924c458792?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
            className="rounded-circle"
            style={{
              width: "75px",
              height: "75px",
              marginRight: 16,
              objectFit: "cover",
            }}
          />
          <h3>Hello {firstName}</h3>
        </Alert>
      ) : (
        <Alert key="dark" variant="dark" className="bg-dark text-light">
          <h3>Hello there!</h3>
        </Alert>
      )}
    </Container>
  );
}
