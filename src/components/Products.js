import Product from './Product'
import {Container,Card,Row,Col } from "react-bootstrap"
const Products=({products,onAddToCart,onRemovefromCart})=>{
    return(
        <>
            {products.map((p)=>{
                    return( 
                        <Col sm={4} md={6} xs={10}>
                            <Product 
                                product={p} 
                                onAddToCart={onAddToCart} 
                            />
                        </Col>
                    )
   
            })} 
        </>
    )
}
export default Products