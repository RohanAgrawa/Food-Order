import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    return (
        <div className={classes.input}>
            <label htmlFor={props.inputData.id}> {props.label}</label>
            <input ref = {ref} {...props.inputData} />
        </div>
    );
});

export default Input;