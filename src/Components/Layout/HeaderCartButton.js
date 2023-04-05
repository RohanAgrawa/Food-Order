import CartIcon from '../Cart/CartIcon'
import Classes from './HeaderCartButton.module.css'
import CartContext from '../Store/Cart-Context';
import { useContext, useEffect, useState } from 'react'

const HeaderCartButton = props => {
    const numberOfCartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const { items } = numberOfCartCtx;

    const btnClasses = `${Classes.button} ${btnIsHighlighted ? Classes.bump : ''}`;

    useEffect(() => {
        
        if (items.length === 0) {
        return;
        }
        
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };

        }, [items]);

    const numberOfItem = numberOfCartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0); // number of quantity present in cart


    return (
        <button className= {btnClasses} onClick = {props.onClick}>
            <span className= {Classes.icon}><CartIcon/></span>
            <span>cart</span>
            <span className={Classes.badge}>{numberOfItem}</span>
        </button>
    )
}

export default HeaderCartButton;