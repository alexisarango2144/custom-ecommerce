import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { TbShoppingCart } from "react-icons/tb";
import '../assets/sass/partials/components/_cart.scss'
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = ({ itemsNumber, addedClasses }) => {
    const {cart} = useContext(CartContext)
    console.log(cart)

    return (

        <Dropdown drop="start" autoClose="outside" as={ButtonGroup} className={`${addedClasses}`}>
            <Dropdown.Toggle split variant="outline-secondary" />
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            <Button variant="outline-secondary" className={`position-relative cart-button`}>
                <Badge bg={itemsNumber ? 'primary' : 'secondary'} pill text="dark" className="position-absolute h2 top-100 start-100 translate-middle cart-badge" style={{ zIndex: '1' }}>
                    {itemsNumber || 0}
                    <span className="visually-hidden">Items en el carrito</span>
                </Badge>
                <TbShoppingCart size={24} />
            </Button>
        </Dropdown>
    )
}



export default CartWidget

