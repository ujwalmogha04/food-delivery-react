import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import {clearCart} from '../store/CartSlice'

function Cart() {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    if (cartItems.length === 0) {
        return (
            <div className='text-center'>
                <img className="mx-auto mt-5 h-72 w-52" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="img"></img>
                <p className='text-red-500 text-3xl p-5 mt-5'>your Cart is Empty</p>
                <p className='pb-10'>You can go to home page to view more restaurants</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md m-4" onClick={() => handleClearCart()}>Clear Cart</button>
                </div>
                <div className='mt-6 ml-5 pb-40 flex flex-wrap'>

                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        );
    }

}

export default Cart;
