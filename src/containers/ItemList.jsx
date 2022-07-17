import React from 'react';
import Item from '../components/Item';

const ItemList = ({data = []}) => {
  return (
      data.map(glass => <Item key={glass.id} info={glass} />)
  )
}

export default ItemList;
