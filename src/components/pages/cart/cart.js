
const resetCartQty = () =>{
  localStorage.removeItem("cartQty");
  const qtyCart = document.getElementById('contadorCarrito');
  qtyCart.innerText=0;
}

function Cart({increaseCartQuantity}) {
  
  return (
    <div className="cart">
    <img src="https://thumbs.gfycat.com/AlertAdventurousAngwantibo-max-1mb.gif" height={"600px"} width={"600px"} alt="" />
    <button onClick={increaseCartQuantity}>restart cart quantity</button>
    </div>
    );
}

export default Cart;
