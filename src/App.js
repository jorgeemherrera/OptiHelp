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
import { Tabs, Tab, TabPanel } from './components/TabsJorge/Tabs';

function App() {
  const [endValue, setEndValue] = useState();
  const [modalState, setModalState] = useState(false);
  const [startValue, setStartValue] = useState();
  const [activeTab, setActiveTab] = useState(1);


  let inputsGetItem = JSON.parse(localStorage.getItem('formTimeValues'));
  const navigate = useNavigate();

  useEffect(() => {
    // App como prop
    if (inputsGetItem) {
      setStartValue(inputsGetItem.startTime);
      setEndValue(inputsGetItem.endTime)
    }
  }, [inputsGetItem]);

  const CloseAlertButton = () => {
    navigate(0)
    setModalState(false);
  }

  const onHandleClickAlert = () => {
    setModalState(!modalState);
  };
  
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

  const handleChange = (e, value) => {
    setActiveTab(value);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      foundTimeToRange();
      console.log('foundTimeToRange', foundTimeToRange());
    }, 62000);
    return () => clearInterval(interval);
  });

  const getDataTraceabilityTab = () => {
    return <Tab id='product-detail-page-tab-data-traceability' key={2} label="Tab 2" value={2} />
  }

  const getDataDefinitionTab = () => {
    return <Tab id='product-detail-page-tab-definitions' key={1} label="Tab 1" value={1} />
  }

  const getProductVersionTab = () => {
    return <Tab id='product-detail-page-tab-product-version' key={3} label="Tab 3" value={3} />;

  }

  return (
    <div className='App'>
      <Navbar />
      <button className='create-alert' onClick={onHandleClickAlert}><IconBellRinging />Crear Alerta</button>
      <Accordions />
      {/* ------------------ TABS ------------------- */}
      {/* <section className='tab'>
        <div className='tab--container'>
          <Tabs id='product-detail-page-tabs' selectedTab={activeTab} onChange={handleChange}>
            {getDataDefinitionTab()}
            {getDataTraceabilityTab()}
            {getProductVersionTab()}
          </Tabs>
        </div>
        <div className='tab--panel-container tab--panel-container'>
          <TabPanel value={activeTab} selectedIndex={1}>
            <p>lorem</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={2}>
            <p>tab 2</p>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={3}>
            <p>tab 3</p>
          </TabPanel>
        </div>
      </section> */}
      {/* ------------------ TABS ------------------- */}

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
