import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Accordian = ({ id, defaultOpen, multiple, children }) => {
    const [clicked, setClicked] = useState(defaultOpen !== undefined ? defaultOpen : -1);

    const accordianItems = React.Children.map(children, child => {
        if (child) {
            const handleToggle = (idx) => {
                if (clicked === idx) {
                    return setClicked(-1);
                }
                setClicked(idx);
            }

            return React.cloneElement(child, {
                active: child.props.value === clicked,
                onToggle: () => handleToggle(child.props.value),
                multiple: multiple,
                openbydefault: child.props.value === defaultOpen
            });
        }
    });

    return (
        <ul id={id} data-testid={id}>
            {accordianItems}
        </ul>
    )
}

Accordian.propTypes = {
    id: PropTypes.string,
    defaultOpen: PropTypes.number,
    multiple: PropTypes.bool,
    children: PropTypes.any
}

export default Accordian;