import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';

  const glass = {id: 1, image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/webimage-2692FB16-876C-483B-BCEC1630C1FA2A68_1_800x450.png?v=1627683586", title:"Modelo Galapagos", description:"Armazón de acetato diseño carey estilo rectangular."};

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout (() => {
                resolve(glass);
            }, 3000);
        });
        getItem.then(res => setData(res));
    }, [])

  return (
    <>
        <ItemDetail data ={data} />
    </>
  )
}

export default ItemDetailContainer;
