export const Card = ({product, incrCart}) => {
  
    return (
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
    )
  }
  
  export default Card;