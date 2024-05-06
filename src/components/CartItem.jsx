import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../store/CartSlice';

const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
   
      dispatch(removeItem(id));
    
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = () => {
    if(quantity > 1){
      dispatch(decreaseQuantity(id));
    }
    else{
      dispatch(removeItem(id))
    }
    
  };

  return (
    <div className='flex-wrap'>
      <div className="m-3 bg-gray-100 p-5 w-64">
        <p className="text-lg font-semibold ">{name}</p>
        <p className="text-gray-600 ">Price: ₹{price}</p>
        <div className="flex items-center mt-2">
          <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600" onClick={handleDecreaseQuantity}>
            -
          </button>
          <p className="mx-2">{quantity}</p>
          <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <button className="bg-red-500 text-white px-3 py-1 mt-2 rounded hover:bg-red-600" onClick={handleRemoveItem}>
          Remove item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
