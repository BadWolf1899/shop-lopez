import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './styles/NavBar.css'

const NavBar = () => {
        return (
          <>
            <Navbar expand="lg" bg="dark" variant="dark">
              <Container>
                <NavLink to='/'>VITRA</NavLink>
                <Nav className="me-auto">
                  <NavLink to='/'>Inicio</NavLink>
                  <NavLink to='/category/receta'>Armazones de Receta</NavLink>
                  <NavLink to='/category/sol'>Lentes de Sol</NavLink>
                  <NavLink to='/category/accesorios'>Accesorios</NavLink>
                </Nav>
                <div className="cart">
                 <NavLink className="navlink" to='/cart'><CartWidget />
                 <span className="cart_badge">0</span>
                 </NavLink>
                </div>
              </Container>
            </Navbar>
          </>
            )
}

export default NavBar;