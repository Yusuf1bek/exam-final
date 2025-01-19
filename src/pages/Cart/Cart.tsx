import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '@/redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { MdDelete } from "react-icons/md";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrease = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">Your Cart</h1>
      {cartItems.length === 0 ? (
        <img 
          className="mx-auto w-3/4 sm:w-1/2" 
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=" 
          alt="Empty Cart" 
        />
      ) : (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <ul className="p-4 bg-[#F0EEED] rounded-xl flex-1">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row bg-white p-4 rounded-xl mb-4 border-b pb-4 sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                  />
                  <div className='w-[500px]'>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-500 mb-[20px]">{item.desc}</p>
                    <p className="text-green-400">{item.price} сум</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className='flex justify-between items-center gap-2'>
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded-full"
                    >
                      -
                    </button>
                    <span className="text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded-full"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    <MdDelete className='text-2xl'/>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center sm:items-start gap-4">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-6 py-2 rounded w-full sm:w-auto"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto"
            >
              Go to Checkout
            </button>
            <p className="text-xl font-bold mt-4 sm:mt-0 text-center sm:text-left">
              Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} сум
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
