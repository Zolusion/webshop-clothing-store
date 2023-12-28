'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '@/@types/product';

const persistedCartItems = localStorage.getItem('cartItems');
const initialState: any = {
  items: persistedCartItems ? JSON.parse(persistedCartItems) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        let cartnewItem = { ...action.payload, quantity: 1 };
        if(action.payload.newPrice){
            cartnewItem = {
                id: cartnewItem.id,
                productName: cartnewItem.productName,
                description: cartnewItem.description,
                imageUrl: cartnewItem.imageUrl,
                quantity: 25,
                oldPrice: cartnewItem.oldPrice,
                newPrice: cartnewItem.newPrice,
            }
        }
        state.items.push(cartnewItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item: any) => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: state => {
      state.items = [];
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;