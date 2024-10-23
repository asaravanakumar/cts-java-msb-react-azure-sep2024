// Step 1: Let's create the context with createContext
// Step 2: is here -- see in line number 22
// Step 3: is in App comp
// * Let's share the data to the necessary components through context provider
// Step 4: Get the data from the context using react hook called useContext in the header comp and products comp

import { createContext, useState } from "react";
import { IProduct } from "../models/IProduct";

export interface CartContextProps {
  cartItems: IProduct[]; // Needed for Header, ProductsPage
  addToCart: (cartItems: IProduct[]) => void; // Needed for ProductsPage
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  return (
    <CartContext.Provider
      value={{ cartItems: cartItems, addToCart: setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
