import React from "react";
import Card from "./Card";
import "./styles/Body.css";
import sharpie from "../assets/sharpie.jpg";
import rollTransfer from "../assets/rollTransfer.jpg";
import vase from "../assets/vase.jpg";
import worthy from "../assets/worthy.jpg";
import braun from "../assets/braun.jpg";
import stapler from "../assets/stapler.jpg";
import shredder from "../assets/shredder.jpg";
import handPenHolder from "../assets/handPenHolder.jpg";
import roller from "../assets/roller.jpg";
import tapeMeasure from "../assets/tape measure.jpg";
import tapeDispenser from "../assets/tape dispenser.jpg";
import eneloop from "../assets/eneloop.jpg";
import rubberBall from "../assets/rubber ball.jpeg";
import backpack from "../assets/backpack.jpg";

export default function Body() {
  return (
    <div className="container">
      <section className="top">
        <p>
          I'm looking for <b>Office Supplies</b> strictly speaking
          <b> Pencils and Markers</b>
        </p>
      </section>
      <section className="content">
        <div className="wrapper">
          <Card src={sharpie} />
          <Card src={rollTransfer} />
          <Card src={vase} />
          <Card src={worthy} />
          <Card src={braun} />
          <Card src={stapler} />
          <Card src={shredder} />
          <Card src={handPenHolder} />
          <Card src={roller} />
          <Card src={tapeMeasure} />
          <Card src={tapeDispenser} />
          <Card src={eneloop} />
          <Card src={rubberBall} />
          <Card src={backpack} />
        </div>
      </section>
      <section className="bottom"></section>
    </div>
  );
}
