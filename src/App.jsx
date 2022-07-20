import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart'
import './App.css';


function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/detail/:detailId" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;