import CartContext from "./Cart-Context";
import { useReducer } from "react";

const defaultCartstate = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    
    if (action.type === 'ADD') {

        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[existingItemIndex];

        let updatedItem;

        if (existingCartItem)
        {
            const updatedExistingItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount,
            }

            updatedItem = [...state.items];
            updatedItem[existingItemIndex] = updatedExistingItem;
        }
        else
        {
            updatedItem = state.items.concat(action.item);
        }

        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);
        return {
            items: updatedItem,
            totalAmount: updatedAmount,
        };
    }

    if (action.type === 'REMOVE')
    {
        let updatedItem;
        
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);

        const existingCartItem = state.items[existingItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        if (existingCartItem.amount === 1)
        {
            updatedItem = state.items.filter((item) => item.id !== action.id);
        }
        else
        {
            const updateItemOnRemove = {...existingCartItem, amount : existingCartItem.amount - 1};
            updatedItem = [...state.items];
            updatedItem[existingItemIndex] = updateItemOnRemove;
            
        }

        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartstate;
};

const CartProvider = props => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartstate);

    const addItemsInCart = item => {
        
        dispatchCart({
            type: 'ADD',
            item : item,
        })
    };

    const removeItemInCart = id => {
        dispatchCart({
            type: 'REMOVE',
            id : id,
        })
    };

    const Item = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        AddItems: addItemsInCart,
        removeItems: removeItemInCart,
    };

    return (
        <CartContext.Provider value={Item}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;