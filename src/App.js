import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './screens/Shop';
import Layout from './screens/Product';
import Header from './screens/Header';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index path='/' element ={<Shop/>}/>
        <Route exact path='/product' element ={<ProductDetail/>}/>
        <Route exact path='/cart' element ={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
