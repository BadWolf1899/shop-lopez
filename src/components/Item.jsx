import React from "react";
import { Link } from "react-router-dom";
import "./styles/Item.css";

const Item = ({ info }) => {
	return (
		<Link to={`/detail/${info.Id}`} className="glass">
			<img className="glassesimg" src={info.image} alt="" />
			<p>{info.title}</p>
		</Link>
	);
};

export default Item;
