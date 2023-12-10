import Image from 'next/image';
import React from 'react';

interface CartProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: CartProduct) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, onAddToCart }) => {
  const [cart, setCart] = React.useState<CartProduct[]>([]);
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="bg-white w-96 h-auto mx-auto my-12 p-6 rounded-lg shadow-lg flex flex-col z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className='text-2xl font-semibold text-black z-10'>Shopping Cart</h2>
          <button onClick={onClose} className='bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none z-10'>
            Close
          </button>
        </div>

        {cart.map((product) => (
          <div key={product.id} className="flex items-center mb-4 z-10">
            <Image
              src={product.image}
              alt="Product Image"
              className="w-24 h-24 object-cover rounded mr-4"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="text-md text-black z-10">{product.name}</p>
              <p className="text-md text-gray-800 z-10">€{product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}

        <div className="mt-auto">
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black z-10">Total:</p>
            <p className="text-lg font-semibold text-black z-10">€{total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;