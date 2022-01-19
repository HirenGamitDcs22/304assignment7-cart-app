//import {FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import Button from "./Button"
import { Card } from "react-bootstrap"
const Product = ({ product, onDelete, onAddToCart }) => {
   // const [pname,setPname]=useState("")
    const onAdd=()=>{
        const hhhh="hhhh"
        const hyy="hyy"
        const jh="kkk"
        onAddToCart({jh,hhhh,hyy})
    }
    return (
        <>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body >
                    <Card.Title > { product.name}</Card.Title>  
                    <Card.Text > { product.price } </Card.Text> 
                    <p>{product.id}</p>
                    <Button color = "blue"
                        onClick = {onAdd}
                        text = "Add to Cart" />
                </Card.Body>  
            </Card>
        </>
    )
}

export default Product