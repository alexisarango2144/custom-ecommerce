import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavbarBs from "react-bootstrap/Navbar"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const Navbar = ({addedClasses = ''}) => {
  return (
    <NavbarBs expand="lg" className={`${addedClasses} navbar-dark bg-dark mb-4`}>
      <Container fluid>
        <NavbarBs.Brand as={NavLink} to={'/'} className='ms-3'>
          <img src="/logo.png" alt="Logo" style={{height: '40px'}} className="d-inline-block align-top"/>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/'}>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to={'/category/mas vendidos'}>Más vendidos</Nav.Link>
            <Nav.Link as={NavLink} to={'/category/medicamentos'}>Medicamentos</Nav.Link>
            <Nav.Link as={NavLink} to={'/category/suministros'}>Suministros</Nav.Link>
          </Nav>
          {/* Ejemplo pasando el número de items en el carrito como prop: */}
          <CartWidget addedClasses={"me-3"} itemsNumber={10}/>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  )
}

export default Navbar
