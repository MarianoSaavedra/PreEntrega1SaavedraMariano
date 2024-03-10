import CartWidget from "./CartWidget"

const NavBar = () => (
    <div className="navbar">
        <h1>Molinos Tradicion</h1>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Productos</a></li>        
        </ul>
        <CartWidget />
    </div>
);


export default NavBar;