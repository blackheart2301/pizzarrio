import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h2> ABOUT US</h2>
        <h3>
         Welcome to <b>Sawan's Pizzario</b> – Where Culinary Excellence Meets Digital Convenience! 🌐
        </h3>
        <p>
        More than just an app, <b>Sawan's Pizzario</b> is a global community united by a love for extraordinary pizzas. Join us on a gastronomic adventure that transcends borders, connecting pizza enthusiasts worldwide through the universal language of taste.
        Behind every delectable creation is a team of passionate pizzaiolos who bring their expertise to your table. From hand-kneading the dough to perfecting the art of wood-fired ovens, our chefs pour their heart and soul into every pizza, ensuring an unparalleled dining experience.
        Embark on a culinary journey like never before. <a href=" " style={{textDecoration:"none",color:"darkblue"}}>Download</a> our app today and become part of a community that shares a passion for exceptional pizzas, delivered with precision and served with a side of unparalleled convenience. Experience the world on a plate – one pizza at a time.</p>
        <div style={{justifyContent:"center",alignItems:"center"}}>
        <b>Sawan's Pizzario</b> – <i>Where Flavor Knows No Bounds</i>!
        </div>

      </div>
    </div>
  );
}

export default About;
