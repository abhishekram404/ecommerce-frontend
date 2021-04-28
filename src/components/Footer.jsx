import React from "react";
import logo from "../assets/logo.png";
import "./styles/Footer.css";
export default function Footer() {
  return (
    <footer>
      <p>All content copyright PLATFORM &copy; 2014 • All rights reserver.</p>
      <img src={logo} alt="logo" />
      <ul>
        <li>Team</li>
        <li>About us</li>
        <li>Privacy Policy</li>
        <li>Support</li>
      </ul>
    </footer>
  );
}
