
const resetCartQty = () =>{
  localStorage.removeItem("cantidadItemCarrito");
  const qtyCart = document.getElementById('contadorCarrito');
  qtyCart.innerText=0;
}

function Cart() {
  
  return (
    <div className="cart">
    <img src="https://thumbs.gfycat.com/AlertAdventurousAngwantibo-max-1mb.gif" height={"600px"} width={"600px"} alt="" />
    <button onClick={() =>resetCartQty()}>restart cart quantity</button>
    </div>
    );
}

export default Cart;
