import React from 'react';
import {useCartContext} from "../context/CartContext"

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext ();
  return (
    <div>
    <img src={product.image} width="200" alt=""/>
    <div>
        <p>Producto: {product.title} </p>
        <p>Cantidad: {product.quantity} </p>
        <p>Precio u.: {product.price} </p>
        <button onClick={() => removeProduct (product.Id)} >Quitar</button>
    </div>
    </div>
  )
}

export default ItemCart
