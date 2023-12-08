// CartSidebar.js
import Image from 'next/image';
import React from 'react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="bg-white w-96 h-auto mx-auto my-12 p-6 rounded-lg shadow-lg flex flex-col z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className='text-2xl font-semibold text-black z-10'>Shopping Cart</h2>
          <button onClick={onClose} className='bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none z-10'>
            Close
          </button>
        </div>

        <div className="flex items-center mb-4 z-10">
          <Image
            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Product Image"
            className="w-24 h-24 object-cover rounded mr-4"
            width={64}
            height={64}
          />
          <div className="flex flex-col">
            <p className="text-md text-black z-10">Product Name</p>
            <p className="text-md text-gray-800 z-10">$19.99</p>
          </div>
        </div>

        {/* Total Price */}
        <div className="mt-auto">
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black z-10">Total:</p>
            <p className="text-lg font-semibold text-black z-10">$99.99</p>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default CartSidebar;
