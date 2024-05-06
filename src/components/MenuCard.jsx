import React from "react";
import { addItem } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ menuItem }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(menuItem));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-5 ml-3 hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300 w-72 mt-5" >
      <div className="m-5">
        <p className="text-gray-800 text-lg font-semibold truncate">{menuItem.name}</p>
        <p className="text-gray-600">Price:₹{menuItem.price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
