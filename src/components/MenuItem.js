import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h3> {name} </h3>
      <p> ${price} </p>
      <button className="cart-btn">Add to cart</button>
    </div>
  );
}

export default MenuItem;
