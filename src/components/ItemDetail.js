import React from 'react';
import './styles/ItemDetail.css';


const ItemDetail = ( {data} ) => {
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
