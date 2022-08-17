import React from 'react';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../components/styles/ItemListContainer.css"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import Baner from '../components/Baner';

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "products");
		if (categoryId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoryId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoryId]);
  
  return (
    <>
	<Baner />
    <div className= "cards" >
      <ItemList  data={data} />
    </div>
    </>
    );
}

export default ItemListContainer;