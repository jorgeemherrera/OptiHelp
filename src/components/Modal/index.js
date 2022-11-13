import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { IconPlaystationX } from '@tabler/icons';

const Modal = ({ children, title }) => {
    return (
        <>
            <section className='overlay'>
                <div className='modal-container'>
                    <div className='modal-header'>
                        <h3>{title}</h3>
                    </div>
                    <IconPlaystationX />
                    {children}
                </div>
            </section>
        </>
    )
}

export default Modal;

Modal.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any,
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func
}
