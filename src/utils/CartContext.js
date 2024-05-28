import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
const CartContext=createContext({
    totalPrice : 0,
    updateTotalPrice:()=>{},
});
export const CartContextProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);
  
    const updateTotalPrice = (newPrice) => {
      setTotalPrice(newPrice);
    };
  
    return (
      <CartContext.Provider value={{ totalPrice, updateTotalPrice }}>
        {children}
      </CartContext.Provider>
    );
  };
//   export const useCart = () => {
//     return useContext(CartContext);
//   };

export default CartContext;