import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import './App.css';
import React from "react";
import CartProvider from "./context/CartContext";


function App() {
	return (
		<BrowserRouter>
			<CartProvider> 
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/detail/:detailId" element={<ItemDetailContainer />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;