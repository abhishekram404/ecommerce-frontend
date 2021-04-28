import React from "react";
import "./styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card">
      <span className="addToCart">
        <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
      </span>{" "}
      <span className="price">49$</span>
      <img src={props.src} alt="" />
      <span className="item-name">Black on a Roll Transfer</span>
    </div>
  );
}
