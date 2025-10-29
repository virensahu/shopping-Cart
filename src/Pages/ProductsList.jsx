import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/fetchDataSlice";
import { useEffect } from "react";
import './ProductList.css';
import { addItemToCart, removeFromCart } from "../Redux/cartSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { items: data, error, loader } = useSelector(state => state.fetchData);
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
    toast.success(`${item.title} added to cart!`);
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.info(`Item removed from cart.`);
  };

  if (error) return <p>Error: {error}</p>;
  if (loader) return <p>Loading...</p>;

  return (
    <>
      <div className="product-grid">
        {Array.isArray(data) && data.map((item) => {
          const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
          return (
            <div className="product-card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} className="product-image" />
              <h3>{item.title}</h3>
              <p className="price">₹{item.price}</p>
              <p className="rating">Rating: {item.rating} ⭐</p>
              {
                isInCart ? (
                  <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">
                    Remove from Cart
                  </button>
                ) : (
                  <button onClick={() => handleAddToCart(item)} className="buy-button">
                    Add To Cart
                  </button>
                )
              }
            </div>
          );
        })}
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default ProductsList;