import React from 'react';
import {useCartContext} from "../context/CartContext"
import "../components/styles/ItemCart.css"

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="comprafinal">
            <img className="imgproduct" src={product.image} alt="" />
            <div className="detalle">
                <p className="title">{product.title}</p>
                <p className="quantity">Unidades: {product.quantity}</p>
                <p className="price">Precio USD {product.price}</p>
                <p className="subtotal">Subtotal USD {product.quantity * product.price}</p>
                <button className="quitar" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart
