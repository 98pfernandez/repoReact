import { useState } from 'react';
import { useEffect } from 'react';
import App from '../../../App';
import navBar from '../../navBar';
import '../../../App.css'
import {getFirestore, doc, getDocs, collection} from "firebase/firestore"


const carritoQty = (itemsCarrito) => {
  itemsCarrito += 1
  localStorage.setItem("cantidadItemCarrito", itemsCarrito);
  const qtyCart = document.getElementById('contadorCarrito');
  qtyCart.innerText = itemsCarrito;
  return itemsCarrito;
}

function Home({ incrCart }) {
  const [items, setItems]=useState(null);
  useEffect(() => {
    const db = getFirestore();
    const productos =collection(db, 'productosECommerce')
    getDocs(productos)
    .then((snapProductos)=>{
      const productosECommerce= snapProductos.docs.map((doc)=> ({id: doc.id, ...doc.data()}));
      setItems(productosECommerce);
    })
  }, [])


  /*useEffect(()=>{
    const [objectList, setObjectList]=useState([]);
   fetch('https://fakestoreapi.com/products/category/electronics')
   .then(res=>res.json())
   .then(json=>setObjectList(json))
  },[])*/

  return (
    
    <div className='itemListContainer'>  
      {items && items.map(product => (
        <div key={product.id} className='card'>
          <h2 className='cardTitle'>{product.title}</h2>
          <hr className='separador'/>
          <img className='cardImg' src={product.image}></img>
          <p className='cardDescription'>{product.description}</p>

          <div className='decreaseIncreaseButton'>

            <button className='qtyButton'>-</button>
            <input className='qtyInput' type="text" value={"0"} disabled />
            <button className='qtyButton' onClick={() => incrCart()}>+</button>

          </div>

        </div>
      ))};
    </div>
  );
}

export default Home;