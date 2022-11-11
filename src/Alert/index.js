import React from 'react';
import PropTypes from 'prop-types';

const Alert = () => {
    return (
        <>
        <label for="startTime">Hora inicial:</label>
        <input type="text" name="startTime" id="startTime"/>
        <label for="startTime">Hora final:</label>
        <input type="text" name="startTime" id="startTime"/>
        <button className='buttonAlert'>Crear Alerta</button>
        </>
    )
}

export default Alert;

Alert.propTypes = {

}
