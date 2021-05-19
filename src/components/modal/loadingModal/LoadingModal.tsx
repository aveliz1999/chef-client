import React from 'react';
import styles from './LoadingModal.module.css';
import Modal from "../modal/Modal";

type ModalProps = {
    visible: boolean,
    onClose?: () => void
}

function LoadingModal(props: ModalProps) {
    return <Modal visible={props.visible} onClose={props.onClose}>
        <div className={styles.loader}/>
    </Modal>
}

export default LoadingModal;