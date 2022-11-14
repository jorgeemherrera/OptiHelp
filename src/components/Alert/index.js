import React from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

const Alert = ({onClickAlert}) => {

    return (
        <>
            <div className='form-container'>
                <label for="startTime">Hora inicial:</label>
                <input type="text" name="startTime" id="startTime" />
                <label for="startTime">Hora final:</label>
                <input type="text" name="startTime" id="startTime" />
                <button onClick={onClickAlert} className='buttonAlert'>Crear Alerta</button>
            </div>
        </>
    )
}

export default Alert;

Alert.propTypes = {
    onClickAlert: PropTypes.func.isRequired
}
