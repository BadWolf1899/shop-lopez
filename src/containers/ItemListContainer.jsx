import React from 'react';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';



const glasses = [
  {id: 1, image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/webimage-2692FB16-876C-483B-BCEC1630C1FA2A68_1_800x450.png?v=1627683586", title:"Marco negro"},
  {id: 2, image: "https://ucarecdn.com/567b262b-6873-4496-8825-fb17e015a88d/-/format/auto/-/preview/3000x3000/-/quality/lighter/", title:"Marco Combinado" },
  {id: 3, image:"https://ucarecdn.com/d5fec2d5-308a-45c0-9c54-060cb4153089/-/format/auto/-/preview/3000x3000/-/quality/lighter/", title:"Marco Dorado" },
];

const ItemListContainer = ({greeting}) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve =>{
      setTimeout(()=>{
      resolve(glasses);
      }, 2000);
    });
    getData.then(res=> setData(res));

  },[])


  
  return (
      <>
      <div>{greeting}</div>
      <p><h2>También podría interesarte</h2></p>
      <ItemList data={data} />
      </>
    );
}

export default ItemListContainer;