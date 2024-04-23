import React from "react";

const MenuCard = ({ menuItem }) => {
  return (
    <div>
      <p>Name: {menuItem.name}</p>
      <p>Price: ${menuItem.price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default MenuCard;




