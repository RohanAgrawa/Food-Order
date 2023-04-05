import React from "react";
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    AddItems: () => { },
    removeItems: () => { },
});

export default CartContext;