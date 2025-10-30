import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
    try {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
        return [];
    }
};

// Save cart to localStorage
const saveCartToLocalStorage = (items) => {
    try {
        localStorage.setItem("cart", JSON.stringify(items));
    } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromLocalStorage(),
    },
    reducers: {
        addItemToCart: (state, action) => {
            const itemExists = state.items.find((item) => item.id === action.payload.id);
            if (!itemExists) {
                state.items.push({
                    ...action.payload,
                    price: Number(action.payload.price), // Ensure numeric
                    quantity: Number(action.payload.quantity || 1), // Default to 1
                });
                saveCartToLocalStorage(state.items);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
            saveCartToLocalStorage(state.items);
        },
        increseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                saveCartToLocalStorage(state.items);
            }
        },
        decreseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                saveCartToLocalStorage(state.items);
            }
        },
    },
});

export const { addItemToCart, removeFromCart, increseQuantity, decreseQuantity } = cartSlice.actions;
export default cartSlice.reducer;