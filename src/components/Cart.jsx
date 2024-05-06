import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../store/CartSlice';

function Cart() {
    const cartItems = useSelector(store => store.cart.items);
    const [showCheckout, setShowCheckout] = useState(false);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    const handlePayNow = () => {
        // Implement pay now functionality
        // For example, you can redirect to a payment gateway or show a success message
        console.log('Pay Now clicked');
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className='text-center'>
                <img className="mx-auto mt-5 h-72 w-52" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="img"></img>
                <p className='text-red-500 text-3xl p-5 mt-5'>your Cart is Empty</p>
                <p className='pb-10'>You can go to home page to view more restaurants</p>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md m-4" onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className='mt-6 ml-14 pb-4 flex flex-wrap'>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className='flex justify-center mb-4'>
                    <button className="bg-blue-500 text-white px-20 py-2 rounded hover:bg-blue-600" onClick={handleCheckout}>CheckOut</button>
                </div>
                {showCheckout && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-8 rounded-md">
                            <p className="text-lg font-semibold mb-4">Total Price: ₹{totalPrice}</p>
                            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mr-4" onClick={handlePayNow}>Pay Now</button>
                            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600" onClick={() => setShowCheckout(false)}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Cart;
