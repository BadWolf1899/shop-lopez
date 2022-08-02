import React from "react";
import { Link } from "react-router-dom";
import "./styles/Item.css";

const Item = ({ info }) => {

	return (
	<>  
	<div className="cardsGlass">
			<Link to={`/detail/${info.id}`} className="glass">
		<img className= "glassesimg" src={info.image} alt= "" />
			<p>{info.title}</p>
			</Link>
	</div>
    </>
	);
}

export default Item;
