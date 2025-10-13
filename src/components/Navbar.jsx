import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavbarBs from "react-bootstrap/Navbar"
import CartWidget from "./CartWidget"

const Navbar = (addedClasses = '') => {
  return (
    <NavbarBs expand="lg" className={`${addedClasses} navbar-dark bg-dark mb-4`}>
      <Container fluid>
        <NavbarBs.Brand href="#" className='ms-3'>
          <img src="/logo.png" alt="Logo" style={{height: '40px'}} className="d-inline-block align-top"/>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Más vendidos</Nav.Link>
            <Nav.Link href="#">Medicamentos</Nav.Link>
            <Nav.Link href="#">Suministros</Nav.Link>
          </Nav>
          {/* Ejemplo pasando el número de items en el carrito como prop: */}
          <CartWidget addedClasses="me-3" itemsNumber={10}/>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  )
}

export default Navbar
