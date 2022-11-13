import newLocal from "../img/cart.png"

const CartWidget = (itemsCarrito) => {
    return (
        <div class="carrito">
            <span id="contadorCarrito">{itemsCarrito}</span>
            <a id="bttCarrito" href="cart"><img className="imgCarrito"
                src={newLocal} alt="carrito" /></a>
        </div>
    )
}

export default CartWidget;