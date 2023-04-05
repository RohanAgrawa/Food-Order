import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../Store/Cart-Context';

const MealItem = props => {

    const price = `$${props.meal.price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const QuantityAddHandler = (quantity) => {
        
        cartCtx.AddItems({
            name: props.meal.name,
            amount: quantity,
            id: props.meal.id,
            price: props.meal.price,
            
        });
    };

    return (
        <li className= {classes.meal}>
            <div >
                <h3>{props.meal.name}</h3>
                <div className= {classes.description}>{props.meal.description}</div>
                <div className= {classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToQuantity = {QuantityAddHandler} id= { props.meal.id} />
            </div>
        </li>
    )
}

export default MealItem;