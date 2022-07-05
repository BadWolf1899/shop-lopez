import react from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


const NavBar = () => {
        return (
          <>
            <Navbar expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">VITRA</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#features">Estilos</Nav.Link>
                  <Nav.Link href="#pricing">Modelos</Nav.Link>
                </Nav>
                <div className="cart">
                 <CartWidget />
                </div>
              </Container>
            </Navbar>
          </>
            )
}

export default NavBar;