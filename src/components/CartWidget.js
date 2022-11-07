import newLocal from "../img/cart.png"

const CartWidget = (itemsCarrito) => {
    return (
        <div class="carrito">
            <span id="contadorCarrito">{itemsCarrito}</span>
            <a id="bttCarrito" href="./pages/cart.html"><img className="imgCarrito"
                src={newLocal} alt="carrito" /></a>
        </div>
    )
}

export default CartWidget;