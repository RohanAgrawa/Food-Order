import Input from '../../UI/Input';
import classes from './MealItemFrom.module.css';
import { useRef, useState } from 'react';

const MealItemForm = props => {

    const quantityRef = useRef();
    const [isQuantityValid, setIsQuantityValid] = useState(true);

    const quantitySubmitHandler = (event) => {
        event.preventDefault();

        const enterdQuantity = quantityRef.current.value;
        const Quantity = +enterdQuantity;

        if (enterdQuantity.trim() === 0 || Quantity < 1 || Quantity > 5)
        {
            setIsQuantityValid(false);
            return;
        }

        props.onAddToQuantity(Quantity);
    }

    return (
        <form className= {classes.form} onSubmit = {quantitySubmitHandler}>
            <Input ref = {quantityRef} label="Amount" inputData={{
                type: 'number',
                id: `amount_ ${props.id}`,
                defaultValue: '1',
                max : '5',
                min: '1',
                step : '1'
            }} />
            <button> +Add</button>
            {!isQuantityValid && <p>Add valid Quantity for Item.</p>}
        </form>
    )
}

export default MealItemForm;