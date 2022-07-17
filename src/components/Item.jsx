import React from 'react';
import './styles/Item.css';

const Item = ({info}) => {
  return (
    <div className='glasses'>
        <img className='glassesimg' src= {info.image} alt='' />
        <p>{info.title}</p>
    </div>
  );
}

export default Item;
