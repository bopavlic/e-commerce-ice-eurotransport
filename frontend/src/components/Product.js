import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    //image
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      {/* name */}
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* price */}
        <Card.Text as="h3">
          <div className="my-3">
            {product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            kn
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
