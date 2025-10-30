import { useSelector, useDispatch } from "react-redux";
import "./ProductCart.css";
import { decreseQuantity, increseQuantity, removeFromCart } from "../Redux/cartSlice";

const ProductCart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate subtotal safely
    const subtotal = cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
    );

    return (
        <div className="shopping-cart">
            <h2>🛒 Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-container">
                    {/* Left: Product Details */}
                    <div className="cart-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                {/* Product Image */}
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="cart-img"
                                />

                                {/* Product Details */}
                                <div className="cart-details">
                                    <h3>{item.title}</h3>
                                    <p className="price">₹{(item.price * item.quantity).toFixed(2)}</p>
                                    <p className="rating">Rating: {item.rating} ⭐</p>
                                </div>

                                {/* Quantity Control */}
                                <div className="quantity-control">
                                    <button
                                        onClick={() => dispatch(decreseQuantity(item.id))}
                                        disabled={item.quantity === 1} // Disable when quantity = 1
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(increseQuantity(item.id))}>
                                        +
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    className="remove-btn"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Right: Order Summary */}
                    <div className="cart-summary">
                        <h3 className="orderSummary">Order Summary</h3>
                        <div className="summary-details">
                            <div className="summary-row">
                                <span className="summary-label">Subtotal:</span>
                                <span className="summary-value">₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span className="summary-label">Shipping:</span>
                                <span className="summary-value">₹50</span>
                            </div>
                        </div>
                        <hr />
                        <div className="summary-row total-row">
                            <span className="summary-label">Total:</span>
                            <span className="summary-value">₹{(subtotal + 50).toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCart;