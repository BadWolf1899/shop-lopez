import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div>
     <NavBar />
     <ItemDetailContainer />
     <ItemListContainer />
    </div>
  );
}

export default App;