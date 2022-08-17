import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import ItemCount from './ItemCount';
import './styles/ItemDetail.css';
import {Link} from 'react-router-dom';
import {useCartContext} from "../context/CartContext";

const ItemDetail = ( {data} ) => {
  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) =>{ 
    setGoToCart (true);
    toast ('Agregaste '+(quantity)+ ' a tu carrito');
    addProduct (data, quantity);
  }

  return (
    <>
      <div className='cardsglass'>
         <img className='detail_image' src={data.image} alt="" width="300px"/> 
          <div >
            <p className="title">{data.title}</p>
            <p className="description">{data.description}</p>
            <p className="price">USD {data.price}</p>
          
            { 
            goToCart ? <Link className="compra" to="/cart">Terminar compra</Link>
            : <ItemCount className="compra" initial={1} stock={15} onAdd={onAdd}/>
            }
            < Toaster className="toaster"
        position="bottom-right"
        reverseOrder={true}/>
          </div>
        </div>
    </>

  )
}

export default ItemDetail;
