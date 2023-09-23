import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export const CartWideget = () => {
  const { totalWidget } = useContext(CartContext)
  return (
    <Link to="/cart">
      <div className="cartWideget">
        <BsCart3 style={{ fontSize: '24px' }} />
        <span className="cartNumber">{totalWidget}</span>
      </div>
    </Link>

  )
}