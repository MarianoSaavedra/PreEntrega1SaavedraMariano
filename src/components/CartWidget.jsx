import cart from "../assets/cart.png"

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="Carrito" />
            <span className="carritoNumber">3</span>       
        </div>
    );
}

export default CartWidget;




