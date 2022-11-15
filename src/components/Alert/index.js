import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './alert.scss';

const Alert = ({ inputValues }) => {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [formTimeValues, setFormTimeValues] = useState({});
    const [startValue, setStartValue] = useState();
    const [endValue, setEndValue] = useState();

    const onChangeInputTime = (value, name) => {
        if (name === 'startTime') {
            setStartTime(value)
        } else {
            setEndTime(value)
        }
        setFormTimeValues(Object.assign({ startTime, endTime }));
        const filteredState = { startTime, endTime };
        localStorage.setItem('formTimeValues', JSON.stringify(filteredState))
    }

    useEffect(() => {
        if (inputValues) {
            setStartValue(inputValues.startTime);
            setEndValue(inputValues.endTime)
        }
    }, [inputValues]);

    return (
        <>
            <div className='form-container'>
                <label for="startTime">Hora inicial:</label>
                <input type="time" name="startTime" id="startTime" value={startValue} onChange={e => onChangeInputTime(e.target.value, 'startTime')} />
                <label for="endTime">Hora final:</label>
                <input type="time" name="endTime" id="endTime" value={endValue} onChange={e => onChangeInputTime(e.target.value, 'endTime')} />
                <button className='buttonAlert' >Crear Alerta</button>
            </div>
        </>
    )
}

export default Alert;

Alert.propTypes = {
    inputValues: PropTypes.object.isRequired
}
