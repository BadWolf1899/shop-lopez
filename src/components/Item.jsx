import React from 'react';
import './styles/Item.css';

const Item = ({info}) => {
  return (
    <a href='' className='glasses'>
        <img className='glassesimg' src= {info.image} alt='' />
        <p>{info.title}</p>
    </a>
  );
}

export default Item;
