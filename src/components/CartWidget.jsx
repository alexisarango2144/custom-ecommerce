import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { TbShoppingCart } from "react-icons/tb";
import '../assets/sass/partials/components/_cart.scss'
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

const CartWidget = ({ addedClasses }) => {
    const { cart, removeItem } = useContext(CartContext)
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

    return (

        <Dropdown drop="down" autoClose="outside" as={ButtonGroup} className={`${addedClasses}`}>
            <Dropdown.Toggle split variant="outline-secondary" />
            <Dropdown.Menu align={{ lg: 'end' }}>
                {
                    cart.length 
                    ?
                    cart.map((item) => (
                    <Dropdown.Item className={'d-flex'} key={item.id} as={Link} to={`/item/${item.id}`}>
                        <div className="row">
                            <div className="col me-2">
                                <img src={item.image} alt={item.description} style={{ maxWidth: '80px', border: '12px' }} />
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-12">
                                <span>{item.title}</span>
                            </div>
                            <div className="col">
                                <span>{item.quantity} Ud.</span>
                            </div>
                            <div className="col text-end">
                                <span>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.price)} COP</span>
                                <TiDelete className="ms-2 fs-3 text-danger" onClick={() => removeItem(item)} />
                            </div>
                        </div>
                    </Dropdown.Item>))
                    :
                    <Dropdown.Item as={Link} to={'/'}>Sin productos en el carrito</Dropdown.Item>
                }
            </Dropdown.Menu>
            <Button as={Link} to={'/cart'} variant="outline-secondary" className={`position-relative cart-button`}>
                <Badge bg={totalItems ? 'primary' : 'secondary'} pill text="dark" className="position-absolute h2 top-100 start-100 translate-middle cart-badge mb-2">
                    {totalItems || 0}
                    <span className="visually-hidden">Items en el carrito</span>
                </Badge>
                <TbShoppingCart size={24} />
            </Button>
        </Dropdown>
    )
}



export default CartWidget

