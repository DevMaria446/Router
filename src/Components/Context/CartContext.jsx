// import { createContext, useReducer } from "react";

// export const CartContext = createContext();
// const initialCartState =[];
// const cartReducer =(state, action) =>{
//     switch(action.type){
//         case 'ADD_TO_CART':{
//             const existingInCart = state.findIndex(product=> product.id === action.payload.id )
//             if (existingInCart === -1){
//                 const newItem = {...action.payload, quantity: 1}
//                 return [...state,newItem]
//             }else{
//                 const updatedCart= state[existingInCart];
//                 updatedCart.quantity += 1;
//                 return [...state]
//             }
//         }
        
            
//             case 'REMOVE_FROM_CART':
//                 return state.filter(product=> product.id !== action.payload);
//                 default:
//                     return state;
            
//     }
// }

// export const CartProvider = ({ children }) => {
//     const [state,dispatch]=useReducer(cartReducer,initialCartState);
//   return (
//     <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
//   );
// };

// export default CartProvider


import { createContext, useReducer } from "react";

export const CartContext = createContext();
const initialCartState =[ 
//     id: 1,
//     name: "Yam - Grade B",
//     price: 900,
//     quantity: 1,
//     weight: "500kg",
//     image: "/src/assets/yam.png",
//   },
//   {
//     id: 2,
//     name: "Rice - Premium",
//     price: 1200,
//     quantity: 2,
//     weight: "1kg",
//     image: "/src/assets/yam.png", 
//   }];
]
const cartReducer =(state, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':{
            const existingInCart = state.findIndex(product=> product.id === action.payload.id )
            if (existingInCart === -1){
                const newItem = {...action.payload, quantity: 1}
                return [...state,newItem]
            }else{
                // const updatedCart= state[existingInCart];
                // updatedCart.quantity += 1;
                // return [...state]
                return state.map((product, index) =>
  index === existingInCart
    ? { ...product, quantity: product.quantity + 1 }
    : product
);
            }
        }

    
        case 'DECREASE_FROM_CART':{
            return state
                .map(product =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
                .filter(product => product.quantity > 0);
        }

        case 'REMOVE_FROM_CART':
            return state.filter(product=> product.id !== action.payload);

        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state,dispatch]=useReducer(cartReducer,initialCartState);
  return (
    <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
  );
};

export default CartProvider


