import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

//components
import { Navbar } from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import Alert from './components/Alert';
import Modal from './components/Modal';

//icons and scss
import { IconBellRinging } from '@tabler/icons';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import { Accordions } from './components/Accordions';


function App() {
  const [endValue, setEndValue] = useState();
  const [modalState, setModalState] = useState(false);
  const [startValue, setStartValue] = useState();

  let inputsGetItem = JSON.parse(localStorage.getItem('formTimeValues'));
  const navigate = useNavigate();

  useEffect(() => {
    // App como prop
    if (inputsGetItem) {
      setStartValue(inputsGetItem.startTime);
      setEndValue(inputsGetItem.endTime)
    }
  }, [inputsGetItem]);

  const onHandleClickAlert = () => {
    setModalState(!modalState);
  };
  
  const CloseAlertButton = () => {
    navigate(0)
    setModalState(false);
  }
  const convertTimeToMilliseconds = (value) => {
    return (+value[0] * (60000 * 60)) + (+value[1] * 60000)
  }

  let today = new Date();
  let timeNow = today.getHours() + ":" + today.getMinutes();
  let startTimeMilliseconds = (convertTimeToMilliseconds(String(startValue).split(":")));
  let endTimeMilliseconds = (convertTimeToMilliseconds(String(endValue).split(":")));
  let timeNowMilliseconds = (convertTimeToMilliseconds(String(timeNow).split(":")));

  // console.log('startTimeMilliseconds, endTimeMilliseconds, timeNowMilliseconds', startTimeMilliseconds, endTimeMilliseconds, timeNowMilliseconds);

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

  let hoursRange = range(startTimeMilliseconds, endTimeMilliseconds, 60000);

  const foundTimeToRange = () => {
    let foundTimeInRange = hoursRange.find(timeAlert => timeAlert === timeNowMilliseconds);

    if (foundTimeInRange) {
      toast.info('¡¡¡Es hora de descansar tus ojos!!! Recuerda mirar a 6 metros durante 20 segundos', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    console.log('foundTimeInRange', foundTimeInRange)
  }


  useEffect(() => {
    const interval = setInterval(() => {
      foundTimeToRange();
      console.log('foundTimeToRange', foundTimeToRange());
    }, 62000);
    return () => clearInterval(interval);
  });

  return (
    <div className='App'>
      <Navbar />
      <button className='create-alert' onClick={onHandleClickAlert}><IconBellRinging />Crear Alerta</button>
      <Accordions />
      <Modal title='Configurar Alarma' stateModal={modalState} changeModalState={setModalState}>
        <Alert inputValues={inputsGetItem} closeModal={CloseAlertButton} />
      </Modal>
      <ToastContainer
        className="toast-container"
      />
    </div>
  );
}



export default App;
