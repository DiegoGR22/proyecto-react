import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Logo/logo';
import Cart from '../Cart/Cart';
import Contador from '../Contador/Contador';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-3 w-100 d-flex justify-content-evenly">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nuevos Lanzamientos</Nav.Link>
            <NavDropdown title="Catálogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='fs-5'>Marcas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='fs-5'>Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='fs-5'>Resale</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='fs-5'>Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#Cart'><Cart /></Nav.Link>
            <Nav.Link href='#'><Contador /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;