import Product from './Product'
const Products=({products,onAddToCart,onRemovefromCart})=>{
    return(
        <>
        {products.map((p)=>(
            <Product key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
        </>
    )
}
export default Products