import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"

const NavBar = () => (
    <div className="navbar">
        <ul>
            <NavLink to={"/"}>
                Molinos Tradicion
            </NavLink>
            <NavLink to={"/category/smartphones"}>
                Smartphones
            </NavLink>
            <NavLink to={"/category/fragrances"}>
                Fragrances
            </NavLink>
            <NavLink to={"/category/groceries"}>
                Groceries
            </NavLink>
        </ul>
        <CartWidget />
    </div>
);


export default NavBar;