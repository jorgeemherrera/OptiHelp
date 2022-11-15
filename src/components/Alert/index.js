import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import './alert.scss';

const Alert = ({ inputValues }) => {
    // Formulario
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [formTimeValues, setFormTimeValues] = useState({});
    // GetItem de Local Storage
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
        // App como prop
        if (inputValues) {
            setStartValue(inputValues.startTime);
            setEndValue(inputValues.endTime)
        }
    }, [inputValues]);

    // Esta funcion convierte el tiempo 4:34 en milisegundos
    const convertTimeToMilliseconds = (value) => {
        return (+value[0] * (60000 * 60)) + (+value[1] * 60000)
    }

    let today = new Date();
    let timeNow = today.getHours() + ":" + today.getMinutes();
    let startTimeMilliseconds = (convertTimeToMilliseconds(String(startValue).split(":")));
    let endTimeMilliseconds = (convertTimeToMilliseconds(String(endValue).split(":")));
    let timeNowMilliseconds = (convertTimeToMilliseconds(String(timeNow).split(":")));

    console.log('startTimeMilliseconds, endTimeMilliseconds, timeNowMilliseconds', startTimeMilliseconds, endTimeMilliseconds, timeNowMilliseconds);

    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

    let hoursRange = range(startTimeMilliseconds, endTimeMilliseconds, 120000); // 120000 -> este lo puede cambiar por lo quiera en milisegundos

    let foundTimeInRange = hoursRange.find(timeAlert => timeAlert === timeNowMilliseconds);

    if (foundTimeInRange) {
        //TODO: crear componente custom para un toaster o alerta // investigar en google
        toast.info('¡¡¡Es hora de descansar tus ojos!!! Recuerda mirar a 6 metros durante 20 segundos', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    console.log('found', foundTimeInRange)

    return (
        <>
            <div className='form-container'>
                <label for="startTime">Hora inicial:</label>
                <input type="time" name="startTime" id="startTime" value={startValue} onChange={e => onChangeInputTime(e.target.value, 'startTime')} />
                <label for="endTime">Hora final:</label>
                <input type="time" name="endTime" id="endTime" value={endValue} onChange={e => onChangeInputTime(e.target.value, 'endTime')} />
                <button className='buttonAlert' >Crear Alerta</button>
            </div>
            <ToastContainer
                className="toast-container"
            />
        </>
    )
}

export default Alert;

Alert.propTypes = {
    inputValues: PropTypes.object.isRequired
}
