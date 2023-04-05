import Model from '../UI/Model';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../Store/Cart-Context';
import CartItem from './CartItem';

const Cart = props => {
    
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const numberOrder = cartCtx.items.length < 1;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItems(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.AddItems({...item, amount: 1});
      };
    
    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
          ))}
        </ul>
    );
    
    return (
        <Model onClose = {props.onClose}>
            {cartItems}
            <div className= {classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div >
            <div className = {classes.actions}>
                <button className= {classes['button--alt'] } onClick = {props.onClose}>close</button>
                {!numberOrder && <button className= {classes.button}>order</button>}
            </div>
        </Model>
    )
}

export default Cart;