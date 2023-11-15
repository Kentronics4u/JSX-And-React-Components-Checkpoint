import { Card } from "react-bootstrap";

import { productJSON } from "../product";

export default function Description() {
  const product = JSON.parse(productJSON);
  return (
    <Card.Text style={{ height: "180px" }}>
      {product.productDescription}
    </Card.Text>
  );
}
