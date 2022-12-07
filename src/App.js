import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/navBar'
import navBar from './components/navBar';
import Cart from './components/pages/cart/cart';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Location from './components/pages/location';


function App() {
  //Si el carrito tiene un valor en el local storage lo tomamos, sino inicializamos en 0

  const [cartQty, setCartQty] = useState(localStorage.getItem("cartQty") == null ? 0 : parseInt(localStorage.getItem("cartQty")));

  function increaseCartQuantity() {
    localStorage.setItem("cartQty", cartQty + 1)
    setCartQty(cartQty + 1);
  }

  function decreaseCartQuantity() {
    localStorage.setItem("cartQty", cartQty - 1)
    setCartQty(cartQty - 1);
  }

  return (
    <BrowserRouter>
      <body>
        {navBar(cartQty)}
        <Routes>
          <Route exact path='/' element={<Home incrCart={() => increaseCartQuantity()} />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/location' element={<Location />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
