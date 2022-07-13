import React from 'react';
import ItemCount from '../components/ItemCount';
import {Toaster, toast} from 'react-hot-toast';
import { GiShoppingCart } from 'react-icons/gi';


const ItemListContainer = ({greeting}) => {
   
  const onAdd = (param) =>{ 
    console.log ('Compraste '+(param)+ ' unidades');
    toast ('Se agregaron '+(param)+ ' unidades a tu carrito');
  }
  
  return (
      <>
      <div>{greeting}</div>
      <ItemCount initial={1} stock={20} onAdd={onAdd} />
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
      </>
    );
}

export default ItemListContainer;