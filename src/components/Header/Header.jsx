
import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import carrito  from '../Header/carrito.png'

export const Header = ({ cartCount, cartItems }) => {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
    <Navbar/><br></br>
    
    <button onClick={toggleCart}>
    <div className='w-1/3 p-4 flex justify-end items-center px-100'>
          <img src={carrito} alt="" className='w-44 h-auto' />({cartCount})
        </div>
      </button>
      <strong><h1 className='w-1/2 p-4 text-5xl flex justify-end items-center'>Tienda</h1><br></br></strong>
      {showCart && cartItems.length > 0 && (
        <div>
          <h2>Carrito de compras</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div>{item.title}</div>
                <div>${item.price}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
    
  )
}
