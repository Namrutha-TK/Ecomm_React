import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import Home from './components/home/Home';
import About from './screens/About.js'
import ProductDetail from './screens/ProductDetails.js';
import Contact from './screens/Contact.js';
import Cart from './screens/Cart.js';

function App() {
  return (
    <div className="container-fluid m-0">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
