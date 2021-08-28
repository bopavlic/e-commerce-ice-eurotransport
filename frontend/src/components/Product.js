import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    //image
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>

      {/* name */}
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        {/* price */}
        <Card.Text as="h3">
          <div className="my-3">
            {product.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            kn
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
