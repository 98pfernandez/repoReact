import { useEffect, useState, useRef } from 'react';
import Card from './card.js';
import '../../../App.css'
import { getFirestore, doc, getDocs, collection } from "firebase/firestore"
import React from 'react'


export const Home = ({ incrCart }) => {
  const
   [items, setItems] = useState(null);
  const [categorias, setCategorias] = useState(null);
  const [isFiltering, setFiltering] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0)

  useEffect(() => {
    const db = getFirestore();
    const productos = collection(db, 'productosECommerce')
    getDocs(productos)
      .then((snapProductos) => {
        const productosECommerce = snapProductos.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(productosECommerce);
      })


    const categorias = collection(db, 'categories')
    getDocs(categorias)
      .then((snapProductos) => {
        const categorias = snapProductos.docs.map((doc) => ({ id: doc.data().id, name: doc.data().name }));

        setCategorias(categorias.reverse());
      })

  }, [])



  const changeCategory = (newCategory) => {
    setCurrentCategory(newCategory)

    //Si la categoría es 0 corresponde al category ID de todos los productos. Por lo tanto no se filtra.
    newCategory == "0" ? setFiltering(false) : setFiltering(true);
  }


  return (
    <div className='products'>
      <select className='dropDown'
        onChange={(event) => changeCategory(event.target.value)}>
        <option value="" disabled selected hidden>Pulse para filtrar..</option>
        {categorias && categorias.map((categoria) => (
          <option value={categoria.id}>{categoria.name}</option>
        ))}
      </select>
      <div className='itemListContainer'>

         {/*Todos los productos...*/} 
        {(!isFiltering && items) && items.map(product => (
          <Card product={product} incrCart={() => incrCart()}> </Card>
        ))};

        {/*Filtrando...*/}
        {(isFiltering && items) && items.map(product => {
          console.log(product.categoryID == currentCategory);
          if (product.categoryID == currentCategory) {
            return <Card product={product} incrCart={() => incrCart()}> </Card>
          }
        })};

      </div>
    </div>
  )
}

export default Home;