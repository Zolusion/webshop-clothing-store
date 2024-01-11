"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "@/@types/product";

const persistedCartItems = localStorage.getItem("cartItems");
const persistedWishlistItems = localStorage.getItem("wishlistItems");
const initialState: any = {
  items: persistedCartItems ? JSON.parse(persistedCartItems) : [],
  wishlist: persistedWishlistItems ? JSON.parse(persistedWishlistItems) : [],
  cart: "cart",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
      if (existingItem) {
        console.log("newItem quantity", action.payload);

        existingItem.quantity = action.payload.quantity;
      } else {
        let cartnewItem = { ...action.payload, quantity: 1 };
        if (action.payload.price) {
          cartnewItem = {
            id: cartnewItem.id,
            productName: cartnewItem.productName,
            description: cartnewItem.description,
            imageUrl: cartnewItem.imageUrl,
            quantity: 1,
            price: cartnewItem.price,
          };
        }
        state.items.push(cartnewItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },

    addToWishlist: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const existingItem = state.wishlist.find((item: any) => item.id === id);

      if (!existingItem) {
        const wishlistNewItem = { ...action.payload, quantity: 1 };
        if (action.payload.price) {
          state.wishlist.push({
            id: wishlistNewItem.id,
            productName: wishlistNewItem.productName,
            description: wishlistNewItem.description,
            imageUrl: wishlistNewItem.imageUrl,
            quantity: 1,
            price: wishlistNewItem.price,
          });
        } else {
          state.wishlist.push(wishlistNewItem);
        }

        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.removeItem("wishlistItems");
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;