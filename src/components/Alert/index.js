import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

const Alert = () => {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [formTimeValues, setFormTimeValues] = useState({});

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
        const inputs = JSON.parse(localStorage.getItem('formTimeValues'));
        console.log('inputs--->', inputs)
        if (inputs) {
            console.log('inputs', inputs)
            setFormTimeValues(inputs);
        }
    }, []);

    return (
        <>
            <div className='form-container'>
                <label for="startTime">Hora inicial:</label>
                <input type="time" name="startTime" id="startTime" onChange={e => onChangeInputTime(e.target.value, 'startTime')} />
                <label for="endTime">Hora final:</label>
                <input type="time" name="endTime" id="endTime" onChange={e => onChangeInputTime(e.target.value, 'endTime')} />
                <button className='buttonAlert' >Crear Alerta</button>
            </div>
        </>
    )
}

export default Alert;

Alert.propTypes = {
}
