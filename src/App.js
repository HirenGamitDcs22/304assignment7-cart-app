import {useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter  as Router, Routes,Route} from 'react-router-dom'
import Header  from './components/Header'
import Products from './components/Products'
function App() {
  const [products,setProducts]=useState([])

  useEffect(() => {
    const getProducts=async()=>{
      const res=await featchProducts();
      setProducts(res)
      console.log(res)
    }
    getProducts();
  }, [])
  const featchProducts=async()=>{
    const res= await fetch("http://localhost:5000/prosucts")
    const data=await res.json()
    return data
  }
  const onAddToCart=()=>{
    
  }
  const onRemovefromCart=()=>{

  }
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={
            <>
            {products.length>0 ? (
              <Products 
                products={products} 
                onAddToCart={onAddToCart} 
                onRemovefromCart={onRemovefromCart}
              />) :("No Products Found")}
            </>
          }/>
          <Route path="/cart"/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
