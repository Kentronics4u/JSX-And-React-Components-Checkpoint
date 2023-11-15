import React from "react";
import { Card } from "react-bootstrap";

import { productJSON } from "../product";

export default function Image() {
  const product = JSON.parse(productJSON);
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "200px" }}
      >
        <Card.Img
          className="d-flex justiy-content-center align-items-center bd-dark"
          variant="top"
          src={product.productImage}
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
        />
      </div>
    </>
  );
}
