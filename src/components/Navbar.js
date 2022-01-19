import { NavLink } from "react-router-dom"
import * as Bs from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import {FaShoppingCart} from 'react-icons/fa'
const Navbars=({cartItemCount})=>{
    return(
        <Bs.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Bs.Navbar.Brand href="#home" className="ms-4">My Cart App</Bs.Navbar.Brand>
            <Bs.Nav className="me-auto">
                    <NavLink to="/" className="active mt-2">Home</NavLink>
            </Bs.Nav>
            <Bs.Nav className="ml-auto me-5 pe-5">
                <NavLink to="/cart" className="outline-primary justify-content-end  add-to-cart">
                    <FaShoppingCart size={35} /> 
                    <Badge pill bg="success" className="cart-count">{cartItemCount}1</Badge>
                </NavLink>  
            </Bs.Nav>
        </Bs.Navbar>
    )
}
export default Navbars;