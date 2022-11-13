import React from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

const Alert = () => {
    return (
        <>
            <div className='form-container'>
                <label for="startTime">Hora inicial:</label>
                <input type="text" name="startTime" id="startTime" />
                <label for="startTime">Hora final:</label>
                <input type="text" name="startTime" id="startTime" />
                <button className='buttonAlert'>Crear Alerta</button>
            </div>
        </>
    )
}

export default Alert;

Alert.propTypes = {

}
