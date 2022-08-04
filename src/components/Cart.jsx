import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../containers/ItemCart';
import {useCartContext} from "../context/CartContext";
import "./styles/ItemCart.css"
import {addDoc, collection, getFirestore} from "firebase/firestore";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

  const order = {
    buyer:{
      name: "Andrea",
      email: "andreagarcia@gmail.com",
      phone: "095456321",
      address: "Bv. Artigas 1234",
    },
    items: cart.map (product => ({id: product.id, title:product.title, price:product.price, quantity:product.quantity})),
    total: totalPrice(),
  }

	const handleClick = () => {
		const db = getFirestore();   
		const ordersCollection = collection(db, "orders");
    addDoc (ordersCollection, order)
    .then (({id})=>console.log(id)) 
  };

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
    <button onClick={handleClick}>Confirmar compra</button>
  </>
);
};

export default Cart;
