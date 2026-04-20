import React, { useReducer, useState } from "react";
import { AppContext } from "./AppContext";



const AppProvider = ({children}) => {
    const InitialValue = []
    const CartReducer = (state, action) => {3
        switch (action.type) {
            case "Add_To_Cart":
                return [...state, action.payload];
                
                break;
        
            default:
                break;
        }
    };
    const [cart, dispatch] = useReducer(CartReducer, InitialValue);
    console.log(cart)
  return (
    <>
       <AppContext.Provider value={{cart, dispatch}} >
           {children}
       </AppContext.Provider>
    </>
  )
}

export default AppProvider