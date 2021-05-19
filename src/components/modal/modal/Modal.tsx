import React from 'react';
import styles from './Modal.module.css';

type ModalProps = {
    visible: boolean,
    onClose?: () => void,
    children: any
}

function Modal(props: ModalProps) {
    return props.visible ? <div className={styles.container}>
        <div className={styles.background} onClick={props.onClose}/>
        <div className={styles.modal}>
            {props.children}
        </div>
    </div> : <></>
}

export default Modal;