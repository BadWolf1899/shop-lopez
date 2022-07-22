import React from 'react';
import Item from '../components/Item';
import '../components/styles/ItemListContainer.css';


const ItemList = ({data = []}) => {

  return (
      data.map((glass) => <Item key={glass.Id} info={glass} />)
  )
};

export default ItemList;
