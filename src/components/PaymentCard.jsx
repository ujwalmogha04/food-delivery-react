import React from 'react';

function PaymentCard({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div>
            <h2 className="text-xl mb-4">Enter Payment Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Card Number</label>
                    <input type="text" className="border rounded w-full py-2 px-3 text-gray-700" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Expiry Date</label>
                    <input type="text" className="border rounded w-full py-2 px-3 text-gray-700" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">CVV</label>
                    <input type="text" className="border rounded w-full py-2 px-3 text-gray-700" required />
                </div>
                <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mr-4">Pay</button>
                <button type="button" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default PaymentCard;




    