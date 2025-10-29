import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import './NavBar.css';

const NavBar = () => {
    const productCount = useSelector(state => state.cart.items.length);
    console.log("count:", productCount);
    return (
        <nav className="navbar">
            <img src='https://marketplace.canva.com/EAFMGznsS_U/3/0/1600w/canva-black-white-minimalist-modern-aesthetic-initials-font-logo-kCRpIPeR7gs.jpg' alt="logo" />
            <ul className="nav-links">
                <li><NavLink to="/" end>Home </NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
            <button className="cart-button">
                <NavLink to="/cart" className="cart-link">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="cart-count">{productCount}</span>
                </NavLink>
            </button>
        </nav>
    );
};

export default NavBar;