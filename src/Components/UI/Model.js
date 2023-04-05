import { Fragment } from 'react';
import classes from './Model.module.css';
import ReactDOM from 'react-dom';

const BackDrop = props => {
    return <div className={classes.backdrop} onClick = {props.onClose} />
}

const ModalOverlay = props => {
    return (
        <div className= {classes.modal}>
            <div className= {classes.content}>{props.children}</div>
        </div>
    )
}

const Model = props => {
    const modalId = document.getElementById('modaloverlay');

    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose = {props.onClose} />, modalId)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalId)};
        </Fragment>
    )
}

export default Model;