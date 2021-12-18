import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container, Card } from 'react-bootstrap'

function App() {
    const [products, setProducts] = useState([])
    const [cardProduct, setCardProduct] = useState([])
    useEffect(() => {
        const getProducts = async() => {
            const res = await featchProducts();
            setProducts(res)
            console.log(res)
        }
        getProducts();
    }, [])
    const featchProducts = async() => {
        const res = await fetch("http://localhost:5000/prosucts")
        const data = await res.json()
        return data
    }
    const onAddToCart = async() => {
        const res = await fetch("http://localhost:5000/cardProduct", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardProduct)
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
    return ( <
            Router >
            <
            Container >
            <
            div className = "App" >
            <
            Header / >
            <
            Routes >
            <
            Route path = "/"
            element = { <
                >
                {
                    products.length > 0 ? ( <
                        Products products = { products }
                        onAddToCart = { onAddToCart }
                        onRemovefromCart = { onRemovefromCart }
                        />) :("No Products Found")} < / >
                    }
                    /> <
                    Route path = "/cart" / >
                    <
                    /Routes> < /
                    div >
                    <
                    /Container> < /
                    Router >
                );
            }

            export default App;