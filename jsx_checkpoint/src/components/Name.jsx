import { Card } from "react-bootstrap";
import { productJSON } from "../product";

export default function Name() {
  const product = JSON.parse(productJSON);
  return (
    <Card.Title className="text-primary-emphasis" style={{ height: "50px" }}>
      {product.productName}
    </Card.Title>
  );
}
