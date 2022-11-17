import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconChevronDown, IconChevronUp } from '@tabler/icons';


import './AccordianItem.scss';

const AccordianItem = ({ id, type, name, children, onToggle, active, multiple, openbydefault }) => {
    const [visiblity, setVisiblity] = useState(openbydefault ? openbydefault : false);

    const isActive = multiple ? visiblity : active;

    const updateVisiblity = () => {
        setVisiblity(!visiblity);
        onToggle();
    };

    const getHeader = (type) => {
        switch (type) {
            case 'accordian-lg':
                return (
                    <div className='item-select-lg' onClick={updateVisiblity} >
                        <span className='lg-title'>
                            {name}
                        </span>
                        <span className='lg-caret'>
                            {isActive ?
                                <IconChevronDown />
                                : <IconChevronDown />}
                        </span>
                    </div>
                )
            default:
                return (
                    <div className='item-select-default' onClick={updateVisiblity} >
                        <span className='default-title'>
                            {name}
                        </span>
                        <span className='default-caret' data-testid={`${id}-caret`}>
                            {isActive ?
                                <IconChevronUp/>
                                : <IconChevronDown />}
                        </span>
                    </div>
                )
        }
    }

    return (
        <li id={id} data-testid={id}  className={isActive ? "accordian-item p-active" : "accordian-item p-inactive"}>
            {getHeader(type)}
            {isActive &&
                children
            }
        </li>
    )
}

AccordianItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    onToggle: PropTypes.any,
    active: PropTypes.bool,
    multiple: PropTypes.bool,
    openbydefault: PropTypes.bool,
    value: PropTypes.number
}

export default AccordianItem;