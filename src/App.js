import { useState, useEffect } from 'react'
import './App.css';
import './mystyle.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbars from './components/Navbar'
import MyCart from './pages/MyCart'
import { Container} from 'react-bootstrap'
import Home from './pages/Home';

function App() {
    return ( 
        <Router >
            <Container >
                <div>
                    <Navbars />
                    <Routes >
                        <Route path = "/"
                            element = {<Home/>}
                        /> 
                        <Route path = "/cart" element={<MyCart />} />
                    </Routes> 
                </div>
            </Container> 
        </Router >
    );
}
export default App;