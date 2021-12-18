//import {FaTimes} from 'react-icons/fa'
import Button from "./Button"
const Product=({product, onDelete, onAddToCart})=> {
    return (
        <div className={`task `} >
            <h3>
                {product.name} </h3>
            <p>{product.price}</p>
            <Button color="grean" onClick={()=>(onAddToCart(product.id))} text="Add to Cart"/>
        </div>
    )
}

export default Product