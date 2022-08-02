import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../containers/ItemCart';
import {useCartContext} from "../context/CartContext";
import "./styles/ItemCart.css"

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

if (cart.length === 0) {
  return (
    <>
       <p>Tu carrito está vacío</p> 
       <Link to="/">Ver la colección</Link>
    </>
  );
}

return (
  <>
    {cart.map((product) => (
      <ItemCart key={product.id} product={product} />
    ))}
    <p className="total">total: USD {totalPrice()}</p>
  </>
);
};

export default Cart;
