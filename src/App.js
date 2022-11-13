import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/navBar'
import navBar from './components/navBar';
import Cart from './components/pages/cart/cart';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Location from './components/pages/location';
//import logoReact from './logo.svg'

function App() {
  const [objectList, setObjectList]=useState([]);
  
  return (
    <BrowserRouter>
    <body>
      {navBar(localStorage.getItem("cantidadItemCarrito")==null ? 0: localStorage.getItem("cantidadItemCarrito"))}
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/location' element={<Location/>} />
      </Routes>
    </body>
    </BrowserRouter>
  );
}

export default App;
