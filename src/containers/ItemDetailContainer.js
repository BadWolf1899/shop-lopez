import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detailId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", detailId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detailId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;