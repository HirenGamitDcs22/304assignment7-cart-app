import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../components/Products'
const Home = () => {
    const [products, setProducts] = useState([])
    const [cardProduct, setCardProduct] = useState([])
    useEffect(() => {
        const getProducts = async() => {
            const res = await featchProducts();
            setProducts(res)
            console.log(res)
        }
        getProducts();
    },[])
    const featchProducts = async() => {
        const res = await fetch("http://localhost:5000/prosucts")
        const data = await res.json()
        return data
    }
    const onAddToCart = async(product) => {
        const res = await fetch("http://localhost:5000/cardProduct", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const newCartPro = await res.json();
        setCardProduct([...cardProduct, newCartPro])
    }
    const onRemovefromCart = async(id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        });
        setCardProduct(cardProduct.filter((cardp) => cardp.id !== id))
    }
    return (
        <>
            {products.length > 0 ? ( 
                <Products products = { products }
                    onAddToCart = { onAddToCart }
                    onRemovefromCart = { onRemovefromCart }
                />) 
                :(
                    "No Products Found"
                )
            } 
        </>
    )
}

export default Home
