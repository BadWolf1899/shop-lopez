import React from 'react';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../components/styles/ItemListContainer.css"



const glasses = [
  {Id: "1", price:"USD 150", image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/webimage-2692FB16-876C-483B-BCEC1630C1FA2A68_1_800x450.png?v=1627683586", title:"Galapagos", category: "receta", description:"Una breve descripción" },
  {Id: "2", price:"USD 70", image: "https://ucarecdn.com/567b262b-6873-4496-8825-fb17e015a88d/-/format/auto/-/preview/3000x3000/-/quality/lighter/", title:"Marco Combinado", category: "receta", description:"Una breve descripción"  },
  {Id: "3", price:"USD 100", image:"https://ucarecdn.com/d5fec2d5-308a-45c0-9c54-060cb4153089/-/format/auto/-/preview/3000x3000/-/quality/lighter/", title:"Marco Dorado", category: "receta", description:"Una breve descripción"  },
  {Id: "4", price:"USD 130", image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-8719154774034-angle-03-unofficial-unof0215-eyewear-violet-gold_626x353.png?v=1632766614", title:"Blanca patagonia", category: "receta", description:"Una breve descripción"},
  {Id: "5", price:"USD 95", image: "https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-827886113194-angle-01-carrera-ca6195-eyewear-grnhvturq_626x309.png?v=1637692863", title:"Carrera Sky", category: "receta" , description:"Una breve descripción"},
  {Id: "6", price:"USD 120", image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/8719154734243s_1050x700_1_627x418.png?v=1623948041", title:"Heritage float", category: "receta" },
  {Id: "7", price:"USD 84", image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-716736139876-angle-03-marc-jacobs-marc_daisy_2_s-eyewear-palladium_626x353.png?v=1657574393", title:"Marc Jacobs Daisy", category: "sol", description:"Una breve descripción"},
  {Id: "8", price:"USD 145", image: "https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-716736202266-angle-03-marc-jacobs-marc-445-s-eyewear-cherry_626x353.png?v=1657573907", title:"Marc Jacobs Red", category: "sol", description:"Una breve descripción" },
  {Id: "9", price:"USD 120", image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-716736245034-angle-03-marc-jacobs-marc_486_s-eyewear-gold_626x353.png?v=1657572884", title:"Blue view", category: "sol" , description:"Una breve descripción"},
  {Id: "10", price:"USD 110", image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-8719154813603-angle-03-unofficial-unsm0092p-eyewear-black-navy_626x353.png?v=1656702534", title:"Esate al lungomare", category: "sol", description:"Una breve descripción"},
  {Id: "11", price:"USD 115", image: "https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-8719154842993-angle-03-unofficial-unsf0151-eyewear-havana-havana_626x353.png?v=1656701629", title:"Aloha Honua", category: "sol", description:"Una breve descripción" },
  {Id: "12", price:"USD 144", image:"https://cdn.shopify.com/s/files/1/0015/7610/8121/products/original_png-8719154769061-angle-03-sensaya-sysm0004-eyewear-brown-brown_626x353.png?v=1656698856", title:"Sensaya Sysm", category: "sol", description:"Una breve descripción" },
  {Id: "13", price:"USD 113", image:"https://f.fcdn.app/imgs/a104bd/opticaestelajinchuk.com/opejuy/d989/webp/catalogo/67114-0_1/2000-2000/saju-sport-antartida-acqua-accesorios.jpg", title:"Correa Sport", category: "accesorios", description:"Una breve descripción"},
  {Id: "14", price:"USD 20", image: "https://f.fcdn.app/imgs/ce3655/opticaestelajinchuk.com/opejuy/db1a/webp/catalogo/40165-0_1/2000-2000/estuche-l-c-emoji-colores-ref-25980-accesorios.jpg", title:"Estuche CrazyFace", category: "accesorios", description:"Una breve descripción" },
  {Id: "15", price:"USD 15", image:"https://f.fcdn.app/imgs/09ce77/opticaestelajinchuk.com/opejuy/5156/webp/catalogo/43036-0_1/2000-2000/estuche-twin-cuero-blanco-y-negro-armazones-y-l-c-balvi-ref-26222-accesorios.jpg", title:"Estuche Blanco", category: "accesorios" , description:"Una breve descripción"},
  {Id: "16", price:"USD 5", image:"https://f.fcdn.app/imgs/b7fe0e/opticaestelajinchuk.com/opejuy/2cec/webp/catalogo/43036-0_2/2000-2000/estuche-twin-cuero-blanco-y-negro-armazones-y-l-c-balvi-ref-26222-accesorios.jpg", title:"Estuche Twin", category: "accesorios", description:"Una breve descripción"},
  {Id: "17", price:"USD 7", image: "https://f.fcdn.app/imgs/0e6303/opticaestelajinchuk.com/opejuy/04af/webp/catalogo/67103-0_1/2000-2000/saju-wayuu-desierto-accesorios.jpg", title:"Correa SajuWayu", category: "accesorios", description:"Una breve descripción" },
  {Id: "18", price:"USD 8", image:"https://f.fcdn.app/imgs/b6d886/opticaestelajinchuk.com/opejuy/515e/webp/catalogo/59864-0_1/2000-2000/microfibra-fog-free-antiempanante-accesorios.jpg", title:"Microfibra FogFree", category: "accesorios", description:"Una breve descripción" },
];

const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoryId } = useParams();
  
  useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(glasses);
			}, 1000);
		});

    if (categoryId) {
			getData.then((res) =>
				      setData(res.filter((glass) => glass.category === categoryId)),
			);
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoryId]);


  
  return (
    <>
    <div className= "cards" >
      <ItemList  data={data} />
    </div>
    </>
    );
}

export default ItemListContainer;