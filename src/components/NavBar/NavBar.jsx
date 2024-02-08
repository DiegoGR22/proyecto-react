import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Logo/logo';
import Cart from '../Cart/Cart';
import Contador from '../Contador/Contador';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
            {/* <Navbar.Brand href="#home"><Logo /></Navbar.Brand> */}
            <Link to="/"><Logo /></Link> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-3 w-100 d-flex justify-content-evenly">
            <NavLink to="/" className={"nav-link"}>Home</NavLink>
            <NavLink to="/nuevos-lanzamientos/" className={"nav-link"}>Nuevos Lanzamientos</NavLink>
            <NavDropdown title="Catálogo" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1" className='fs-5'>Marcas</NavDropdown.Item> */}
              <NavLink to={"/catalogo/marcas"} className='fs-5 dropdown-item'>Marcas</NavLink>
              <NavLink to={"/catalogo/accesorios"} className='fs-5 dropdown-item'>Accesorios</NavLink>
              <NavLink to={"/catalogo/resale"} className='fs-5 dropdown-item'>Resale</NavLink>
              {/* <NavDropdown.Item href="#action/3.2" className='fs-5'>Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='fs-5'>Resale</NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4" className='fs-5'>Ofertas</NavDropdown.Item> */}
              <NavLink to={"/catalogo/ofertas"} className='fs-5 dropdown-item'>Ofertas</NavLink>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink to={"/cart/"} className={"nav-link"}><Cart /></NavLink>
            <NavLink to="/cart/" className={"nav-link"}><Contador /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;