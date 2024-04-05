import React, { useContext, createContext, useState } from "react";

interface OrderData {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
  count: number;
  allprice: number;
}

// OrderContext iin type zaal ogno
interface OrderContextType {
  orderData: OrderData[];
  setOrderData: React.Dispatch<React.SetStateAction<OrderData[]>>;
}
const OrderContext = createContext<OrderContextType>({} as OrderContextType);

// Custom hook uusgej bn useContext ashiglaj
export const useOrderData = () => useContext(OrderContext);

export const OrderContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // useState iin type iin zaaj ogjiin
  const [orderData, setOrderData] = useState<OrderData[]>([]);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
