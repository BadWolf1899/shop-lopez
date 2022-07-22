import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import ItemCount from './ItemCount';
import './styles/ItemDetail.css';
import {Link} from 'react-router-dom';



const ItemDetail = ( {data} ) => {
  const[goToCart, setGoToCart] = useState(false);

  const onAdd = (param) =>{ 
    setGoToCart (true);
    toast ('Agregaste '+(param)+ ' a tu carrito');
  }

  return (
    <>
      <div className='detailContainer'>
        <div className='detail'>
         <img className='detail_image' src={data.image} alt="" /> 
          <div className='content'>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            { 
            goToCart ? <Link to="/cart">Ir al carrito</Link>
            : <ItemCount initial={1} stock={30} onAdd={onAdd}/>
            }
            <Toaster
        position="bottom-right"
        reverseOrder={true}/>
          </div>
        </div>
      </div>
    </>

  )
}

export default ItemDetail;
