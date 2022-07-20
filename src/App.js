import logo from './logo.svg';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'



import {Products} from './componant/products'
import Product from './componant/product'
import Navbar from './componant/navbar'
import Home from './componant/home'
import Cart from './componant/cart'
import Checkout from './componant/checkout'
import Footer from './componant/footer';
import Users from './componant/users';

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/products/:id' element={<Product/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
