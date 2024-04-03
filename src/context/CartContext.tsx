import React, { useContext, createContext, useState } from "react";
interface CartData {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
  count: number;
}

// FoodContext iin type iin zaaf ugnu
interface CartContextType {
  cartData: CartData[];
  setCartData: React.Dispatch<React.SetStateAction<CartData[]>>;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

// Custom hook uusgej bn useContext ashiglaj
export const useCartData = () => useContext(CartContext);

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    // ?type iin zaaj ogjiin
  const [cartData, setCartData] = useState<CartData[]>([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};
