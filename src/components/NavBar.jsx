import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './styles/NavBar.css'
import Vitra from "./Vitra";

const NavBar = () => {
        return (
          <>
            <Navbar className="navbar" >
              <NavLink className="logo" to='/'> <Vitra /> </NavLink>
              <Container>
                <Nav className="me-auto">
                  <NavLink className="me-auto" to='/category/receta'>Armazones de Receta</NavLink>
                  <NavLink className="me-auto" to='/category/sol'>Lentes de Sol</NavLink>
                  <NavLink className="me-auto" to='/category/accesorios'>Accesorios</NavLink>
                </Nav>
                <div className="cart">
                 <NavLink className="navlink" to='/cart'><CartWidget />
                 </NavLink>
                </div>
              </Container>
            </Navbar>
          </>
            )
}

export default NavBar;