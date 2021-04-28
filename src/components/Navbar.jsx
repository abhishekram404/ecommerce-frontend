import logo from "../assets/logo.png";
import "./styles/Navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav>
      <div className="partitions logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="partitions categories">
        <span className="menu">
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
        </span>
        CATEGORIES
        <FontAwesomeIcon icon={faCaretDown} className="caret" />
      </div>
      <div className="partitions filter">
        FILTER
        <FontAwesomeIcon icon={faCaretDown} className="caret" />
      </div>
      <div className="partitions packages">
        PACKAGES
        <FontAwesomeIcon icon={faCaretDown} className="caret" />
      </div>
      <div className="partitions search">
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </div>
      <div className="partitions login">Login</div>
      <div className="partitions cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cartNumber">1</span>
      </div>
    </nav>
  );
}
