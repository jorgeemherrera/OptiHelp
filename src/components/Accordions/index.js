import React from "react";
import { TabsTemasDeInteres, TabsTipsHigiene } from "../Tabs";
import imageDownloadable from '../../assets/images/downloadable.png'
import './Accordions.scss'
import AccordianItem from "../Accordian/AccordianItem/AccordionItem";
import Accordian from "../Accordian/Accordion";




const Accordions = () => {

  return (
    <div className='body-accordions'>
      <Accordian defaultOpen={0} multiple={false}>
        <AccordianItem
          id={`-product-category`}
          name='¿QUÉ ES HIGIENE VISUAL?'
          value={0}
        >
          <section className='category-grid'>
            <p>La higiene visual se denomina como un conjunto de prácticas diarias enfoncadas en cuidar
              la salud visual y ocular cuando usamos computadores, celulares, tablets, entre otros.
              ¿Quieres saber más? Mira la siguiente información
            </p>
          </section>
        </AccordianItem>

        <AccordianItem
          id={`-product-owners`}
          name='AFECTACIONES OCULARES'
          value={1}
        >
          <section className='owners-grid'>
            <p>sobre uso y abuso de los dispositivos inteligentes hace que nuestros ojos sufran
              efectos secundarios que pueden incluso afectar nuestra calidad de vida, algunos de ellos
              son:
            </p>
            <ul id='ul-afectaciones-oculares'>
              <li>Cansancio visual</li>
              <li>Sequedad ocular</li>
              <li>Dolor de cabeza</li>
              <li>Ojo rojo picor o molestias oculares</li>
              <li>Visión borrosa</li>
              <li>Lagrimeo</li>
            </ul>
          </section>
        </AccordianItem>

        <AccordianItem
          id={`-product-owners`}
          name='TIPS DE HIGIENE VISUAL'
          value={2}
        >
          <section className='owners-grid'>
            <p>Si queremos disminuir o evitar alguno o varios síntomas mencionados anteriormente,
              debemos aprender a cuidar nuestra salud ocular
            </p>
            <TabsTipsHigiene />
          </section>
        </AccordianItem>

        <AccordianItem
          id={`-product-owners`}
          name='STICKER DESCARGABLE'
          value={3}
        >
          <section className='poitns-accordion'>
            <a href={imageDownloadable} download>
              <img src={imageDownloadable} alt='' />
            </a>
            <p>
              Descarga esta imagen y pégala en un lugar visible en tu entorno de trabajo para que te
              ayude a recordar que debes descansar tus ojos.
            </p>
          </section>
        </AccordianItem>

        <AccordianItem
          id={`-product-owners`}
          name='ALARMAS'
          value={4}
        >
          <p>Coloca en práctica la regla 20/20/20. <br /><br />
            <strong>En la parte superior podrás añadir</strong> tu horario de trabajo para que cada 20 minutos la alarma te recuerde que debes descansar durante 20 segundos de la pantalla y mirar el sitio mas lejano que haya a tu alrededor</p>
        </AccordianItem>


        <AccordianItem
          id={`-product-owners`}
          name='TEMAS DE INTERÉS'
          value={5}
        >
          <section className='poitns-accordion'>

            <div>
              <h3 style={{ fontWeight: "bold" }}>¿Qué son los errores refractivos?</h3>
              <p>
                Los errores refractivos ocurren cuando el ojo no enfoca la luz en la retina apropiadamente. Esto es llamado refracción. La mayoría de las personas tienen uno o más de ellos y generalmente son fácilmente corregidos con anteojos o lentes de contacto.
              </p>
            </div>
            <TabsTemasDeInteres />
          </section>
        </AccordianItem>
      </Accordian>
    </div>
  );

}

export { Accordions }