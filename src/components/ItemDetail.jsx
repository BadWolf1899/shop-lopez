import React from 'react';
//import { toast, Toaster } from 'react-hot-toast';
//import ItemCount from './ItemCount';
import './styles/ItemDetail.css';



const ItemDetail = ( {data} ) => {

 // const onAdd = (param) =>{ 
//    console.log ('Compraste '+(param)+ ' unidades');
//    toast ('Agregaste '+(param)+ ' a tu carrito');
//  }

  return (
    <>
      <div className='detailContainer'>
        <div className='detail'>
         <img className='detail_image' src={data.image} alt="" /> 
          <div className='content'>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
    
          </div>
        </div>
      </div>
    </>

  )
}

export default ItemDetail;
