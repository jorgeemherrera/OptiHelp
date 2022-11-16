/*jshint esversion: 6 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tab = ({ id, label, active, onClick }) => {
    return (
        <>
            <button
                id={id}
                data-testid={id}
                role="tab"
                active={active ? 1 : 0}
                className={active ? 'active' : null}
                onClick={onClick}>
                {label}
            </button>
        </>
    );
};

export const Tabs = ({ id, selectedTab, onChange, children }) => {
    const tabs = React.Children.map(children, child => {
        if (child) {
            const handleClick = (e) => {
                onChange(e, child.props.value);
            };
            return React.cloneElement(child, {
                active: child.props.value === selectedTab,
                onClick: handleClick
            })
        }
    });

    return (
        <div id={id} data-testid={id} className='tab--header-container'>
            <div className='tab--holder'>
                {tabs}
            </div>
        </div>
    );
};

export const TabPanel = ({ id, children, value, selectedIndex }) => {
    const [animate, setAnimate] = useState(true);
    const hidden = value !== selectedIndex;

    useEffect(() => { if (value === selectedIndex) setAnimate(true); }, [hidden]);
    return (
        <>
            <div id={id} data-testid={id} className={!hidden && animate ? 'tab--panel animate__animated animate__fadeIn' : 'tab--panel'}
                onAnimationEnd={() => setAnimate(false)}
                hidden={hidden} active={(hidden ? 0 : 1)}>
                {children}
            </div>
        </>
    );
};

Tab.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

Tabs.propTypes = {
    id: PropTypes.string,
    selectedTab: PropTypes.any,
    onChange: PropTypes.any,
    children: PropTypes.any
};

TabPanel.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any,
    value: PropTypes.any,
    selectedIndex: PropTypes.any
};