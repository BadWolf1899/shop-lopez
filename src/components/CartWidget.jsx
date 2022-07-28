import Container from 'react-bootstrap/Container';
import { GiShoppingCart } from 'react-icons/gi';

const CartWidget = () => {
  
    return (
      <>
          <Container>
            <div className="cart">
             <GiShoppingCart color='white' fontSize='25px'/>
            </div>
          </Container>
      </>
        )
}

export default CartWidget;