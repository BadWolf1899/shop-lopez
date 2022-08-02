import Container from 'react-bootstrap/Container';
import { GiShoppingCart } from 'react-icons/gi';
import { useCartContext } from '../context/CartContext';
import './styles/NavBar.css'

const CartWidget = () => {
  const {totalProducts} = useCartContext();
  
    return (
      <>
          <Container>
            <div className="cart">
             <GiShoppingCart color='white' fontSize='29px'/>
             <span className="cart_badge">{totalProducts() || ""}</span>
            </div>
          </Container>
      </>
        )
}

export default CartWidget;