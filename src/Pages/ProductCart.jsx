import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductCart = () => {
    // const [storeItems, setStoreItems] = useState([]);
    const cartItems = useSelector(state => state.cart.items);
  
    return (
        <>
            <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.thumbnail} alt={item.title} width={100} />
                            <h3>{item.title}</h3>
                            <p>₹{item.price}</p>
                            <p>Rating: {item.rating} ⭐</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default ProductCart;