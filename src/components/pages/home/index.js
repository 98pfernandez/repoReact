import { useState } from 'react';
import { useEffect } from 'react';
import App from '../../../App';
import navBar from '../../navBar';
import '../../../App.css'



const carritoQty = (itemsCarrito)=> {
  itemsCarrito+=1
  localStorage.setItem("cantidadItemCarrito", itemsCarrito);
  const qtyCart = document.getElementById('contadorCarrito');
  qtyCart.innerText=itemsCarrito;
  return itemsCarrito;
}

function Home() {
  const [itemsCarrito, setItemsCarrito]=useState(localStorage.getItem("cantidadItemCarrito")==null ? 0: parseInt(localStorage.getItem("cantidadItemCarrito")));
  const [objectList, setObjectList]=useState([]);

  useEffect(()=>{
   fetch('https://fakestoreapi.com/products/category/electronics')
   .then(res=>res.json())
   .then(json=>setObjectList(json))
  },[])

  return (
    <div className='itemListContainer'>
      {objectList.map(product =>(
        <div key={product.id} className='card'>
        <h2 className='cardTitle'>{product.title}</h2>
        <img className='cardImg' src={product.image}></img>
        <p className='cardDescription'>{product.description}</p>
        <button className='cardButton' onClick={()=>setItemsCarrito(carritoQty(itemsCarrito))}>Add to cart</button>
        </div>
      ))};
       </div>
  );
}

export default Home;