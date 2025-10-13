import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { TbShoppingCart } from "react-icons/tb";
import '../assets/sass/partials/components/_cart.scss'

const CartWidget = ({ itemsNumber, addedClasses }) => {
    return (
        <Button variant="outline-secondary" className={`${addedClasses} position-relative mb-2 cart-button`}>
            <TbShoppingCart size={24} />
            <Badge bg={itemsNumber ? 'primary' : 'secondary'} pill text="dark" className="position-absolute h2 top-100 start-100 translate-middle cart-badge">
                {itemsNumber || 0}
                <span className="visually-hidden">Items en el carrito</span>
            </Badge>
        </Button>
    )
}



export default CartWidget

