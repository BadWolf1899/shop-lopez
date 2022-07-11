import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
   
  const onAdd = (param) => {console.log ('La cantidad comprada es' + param)}
  
  return (
      <>
      <div>{greeting}</div>
      <ItemCount initial={100} stock={1500} onAdd={onAdd} />
      </>
    )
}

export default ItemListContainer;