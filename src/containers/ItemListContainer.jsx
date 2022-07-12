import React from 'react';
import ItemCount from '../components/ItemCount';

const ItemListContainer = ({greeting}) => {
   
  const onAdd = (param) =>{ 
    console.log ('Compraste '+ (param)+ ' unidades');
}
  
  return (
      <>
      <div>{greeting}</div>
      <ItemCount initial={1} stock={20} onAdd={onAdd} />
      </>
    );
}

export default ItemListContainer;