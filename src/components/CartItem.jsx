import React from 'react';
import { useDispatch  } from 'react-redux';
import { removeItems } from '../store/CartSlice';

const CartItem = ({id , name, price }) => {


  const dispatch = useDispatch();

  const handleRemoveItem = () =>{
      dispatch(removeItems(id));
  }

  return (
    <div className='flex-wrap'>
    <div className="m-3 bg-gray-100 p-5">
      <p className="text-lg font-semibold ">{name}</p>
      <p className="text-gray-600 ">Price: ${price}</p>
      <button className="bg-red-500 text-white px-3 py-1 mt-2 rounded hover:bg-red-600" onClick={handleRemoveItem} >
        Remove item
      </button>
    </div>
    </div>
    );
};

export default CartItem;
