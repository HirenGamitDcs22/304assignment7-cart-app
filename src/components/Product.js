//import {FaTimes} from 'react-icons/fa'
import Button from "./Button"
import { Container, Card, Row, Col } from "react-bootstrap"
const Product = ({ product, onDelete, onAddToCart }) => {
    return (

        <
        >
        <
        Row md = { 5 }
        sm = { 4 } >
        <
        Col >
        <
        Card style = {
            { width: '18rem' }
        } >
        <
        Card.Body >
        <
        Card.Title > { product.name } < /Card.Title>  <
        Card.Text > { product.price } < /Card.Text > <
        Button color = "blue"
        onClick = {
            () => (onAddToCart({ product.id, product.name, product.name }))
        }
        text = "Add to Cart" / >
        <
        /Card.Body >  < /
        Card >
        <
        /Col> < /
        Row >
        <
        />
    )
}

export default Product