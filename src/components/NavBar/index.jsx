import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from '../CartWigat/index';
function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Tienda celulares</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/cart"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;