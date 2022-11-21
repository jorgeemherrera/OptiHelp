import React, { useState } from "react";
import { TabsRecyclable } from "../TabsRecyclable";
import { DownloadPdf } from "../DownloadPdf";
import { ImageParentSlide } from "../imagesParentSlide";
// import { Tabs, Tab, TabPanel } from '../TabsJorge/Tabs';


//images
import hipermetropia from '../../assets/images/hipertrofia.png'
import miopia from '../../assets/images/miopia.png'
import astigmatismo from '../../assets/images/astigmatismo.png'
import presbicia from '../../assets/images/presbicia.png'
import parpadeo from '../../assets/images/parpadeo.png'
import twentyMinutes from '../../assets/images/20M.png'
import calefactor from '../../assets/images/calefactor.png'
import codoMovil from '../../assets/images/harmon.png'
import distanciaMonitor from '../../assets/images/postura.png'
import food from '../../assets/images/food.png'
import glassesFirst from '../../assets/images/glassesFirstPoint.png'
import Lantern from '../../assets/images/lampara.png'
//icons and css
import { IconLink } from '@tabler/icons';
import './Tabs.scss'
import AccordianItem from "../Accordian/AccordianItem/AccordionItem";
import Accordian from "../Accordian/Accordion";


const TabsTipsHigiene = () => {

    return (
        <div id="tabs-parent-div">
            <Accordian defaultOpen={0} multiple={false}>

                <AccordianItem
                    id={`optic-prescription`}
                    name='Usar prescripción óptica'
                    value={1}
                >
                    <section className='category-grid'>
                        <p>No olvides asistir al optómetra una vez al año para actualizar tu fórmula de gafas.</p>
                        <img src={glassesFirst} alt='girl-with-glasses' />
                        <DownloadPdf />
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`glass-antiglare`}
                    name='Las gafas deben contar con antirreflejo'
                    value={2}
                >
                    <section className='category-grid'>
                        <p>
                            El tratamiento antirreflejo consiste en un revestimiento que se hace al lente, por medio de una
                            delgada película de varias capas que se aplica sobre el mismo para reducir los reflejos y eliminar el
                            deslumbramiento. Esto te ayudará a tener una visión de mayor calidad. (AR convencional)
                        </p>
                        <p>
                            Además, existen AR que protegen los ojos de la luz azul de las pantallas reduciendo la
                            cantidad de luz que reciben los ojos.
                        </p>
                        <ImageParentSlide />
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`illumination`}
                    name='Mantener buena iluminación'
                    value={3}
                >
                    <section className='category-grid'>
                        <img src={Lantern} alt='' className='lantern-image' />
                        <DownloadPdf />
                        <p>
                            Evita trabajar en lugares con baja iluminación para evitar fatiga visual
                            y otras alteraciones producidas por la radiación azul.
                            ¡Esto se logra prendiendo las luces…!
                        </p>
                        <p>
                            Esta
                            <a style={{ marginRight: "7px" }} rel="noopener noreferrer" target="_blank" href='https://play.google.com/store/apps/details?id=crunchybytebox.lightmeter'>
                                <IconLink />
                                App
                            </a>
                            te muestra la cantidad de iluminación en el lugar donde estás:
                            <br />
                            <p>Lo que te ayudará a saber si cuentas con la iluminación adecuada en tu lugar de trabajo.</p>
                        </p>
                        <p>
                            Si ingresas al siguiente link, te va a indicar las diferentes longitudes de onda que generan las pantallas de diferentes dispositivos:
                            <a rel="noopener noreferrer" target="_blank" href='https://fluxometer.com/rainbow/#!id=iPad%20Pro/2300K-iPad%20Pro'>
                                <IconLink />
                                Fluxometer
                            </a>
                        </p>
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`harmon`}
                    name='Distancia de Harmon'
                    value={4}
                >
                    <section className='category-grid'>
                        <p>Consiste en distanciar la pantalla en el espacio existente entre el codo y la muñeca.</p>
                        <img src={codoMovil} alt='' />
                        <DownloadPdf />
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`position`}
                    name='Postura'
                    value={5}
                >
                    <section className='category-grid'>
                        <ul type="circle" className="ul-tabs">
                            <li>-La espalda debe estar en posición recta apoyada al respaldo de la silla.</li>
                            <li>
                                -Se debe formar un ángulo de 90° entre la parte inferior del cuerpo y la parte superior, los pies deben estar apoyados sobre el suelo.
                            </li>
                            <li>
                                - Evitar malas posturas de la cabeza y flexiones de cuello no mayores a 10° controlando la posición de la pantalla la cual debe estar posicionada frente a los ojos de forma paralela. Para prevenir alteraciones musculares causadas por las malas posiciones y las jornadas laborales extensas.
                            </li>
                        </ul>
                        <img src={distanciaMonitor} alt='' />
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`ambient`}
                    name='Ambiente'
                    value={6}
                >
                    <section className='category-grid'>

                        <p>La temperatura en el lugar de trabajo debe estar entre 17° y 27°. Es necesario evitar ambientes con temperaturas elevadas y exposición directa al aire acondicionado ya que desencadenan cansancio ocular y un aumento en la evaporación lagrimal.</p>
                        <img src={calefactor} alt='' />
                        <DownloadPdf />
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`active breaks`}
                    name='Pausas activas'
                    value={7}
                >
                    <section className='category-grid'>
                        <p> Es necesario hacer pausas activas para disminuir el uso excesivo de
                            la visión próxima y así se permite relajar la acomodación y disminuir el estrés
                            visual
                        </p>
                        <img src={twentyMinutes} alt='' />
                        <DownloadPdf />
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`blink`}
                    name='No olvides parpadear'
                    value={8}
                >
                    <section className='category-grid'>
                        <p> Cuando nos concentramos, disminuimos el parpadeo hasta
                            5 veces por minuto, lo ideal es que parpadeemos entre 15 y 20 veces por minuto,
                            con el fin de proveer lubricación al ojo.
                        </p>
                        <img src={parpadeo} alt='' />
                        <DownloadPdf />
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`feeding`}
                    name='Alimentación'
                    value={9}
                >
                    <section className='category-grid'>
                        <p>
                            Alimentarnos va mucho más allá que consumir alimentos, es
                            necesario adquirir alimentos sanos y equilibrados, por ejemplo, la dieta
                            mediterránea, ha sido declarada como Patrimonio Cultural Inmaterial de la
                            Humanidad.
                            <p>La Dieta Mediterránea incluye:</p>
                            <ul className="ul-tabs">
                                <li>Vegetales de hojas verdes y frutas coloridas</li>
                                <li>Frutos secos como almendras y nueces</li>
                                <li>Mariscos como la principal fuente de carne</li>
                                <li>Grasas saludables. Elija aceite de oliva en vez de la mantequilla</li>
                                <li>Pan, cereales y pastas integrales</li>
                                <li>Agregar muchas hierbas y especias a los alimentos para reducir la ingesta de</li>
                                sal
                                <li>Cantidad moderada de lácteos (yogurt y queso) y huevos.</li>
                            </ul>
                        </p>
                        <img src={food} alt='' />
                        <p>Cuidarnos con la alimentación nos proporciona una salud ocular efectiva a largo plazo</p>
                        <p>Para mayor información… </p>
                        <a href="https://www.aao.org/salud-ocular/consejos/dieta-nutricion" rel="noopener noreferrer" target='_blank'> <IconLink /> Dieta y nutrición </a><br />
                        <a href="https://nutricion.org/wp-content/uploads/2019/04/Dieta-Mediterranea-Avances-2014.pdf " rel="noopener noreferrer" target='_blank'> <IconLink /> Dieta mediterranea avances </a>
                    </section>
                </AccordianItem>

            </Accordian>
        </div>
    );

}

const TabsTemasDeInteres = () => {
    return (
        <div id="tabs-parent-div">
            <Accordian>
                <AccordianItem
                    id={`miopia`}
                    name='¿QUÉ ES LA MIOPÍA?'
                    value={1}
                >
                    <section className='category-grid'>
                        <p>Es uno de los defectos refractivos más frecuentes que produce una visión borrosa al mirar de lejos.</p>
                        <img src={miopia} alt='' />
                        <p>Para mayor información:</p>
                        <a href='https://www.aao.org/salud-ocular/enfermedades/miopia' rel="noopener noreferrer" target="_blank">  <IconLink /> miopia </a>
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`hipermetropia`}
                    name='¿QUÉ ES LA HIPERMETROPÍA?'
                    value={2}
                >
                    <section className='category-grid'>
                        <p>Es menos frecuente que la miopía y produce una mayor visión borrosa al mirar en cerca que en lejos.</p>
                        <img src={hipermetropia} alt='' />
                        <p>Para mayor información:</p>
                        <a rel="noopener noreferrer" href='https://www.aao.org/salud-ocular/enfermedades/hipermetropia' target="_blank">  <IconLink /> hipermetropia </a>
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`astigmatismo`}
                    name='¿QUÉ ES EL ASTIGMATISMO?'
                    value={3}
                >
                    <section className='category-grid'>
                        <p>Con el astigmatismo, el ojo tiene forma de huevo,  Puede ir asociado a miopía, hipermetropía o ser un astigmatismo puro, es decir, no ir asociado a ningún otro defecto refractivo. Produce visión borrosa tanto de lejos como de cerca.</p>
                        <img src={astigmatismo} alt='' />
                        <p>Para mayor información:</p>
                        <a rel="noopener noreferrer" href='https://www.aao.org/salud-ocular/enfermedades/astigmatismo' target="_blank">   <IconLink /> astigmatismo </a>
                    </section>
                </AccordianItem>

                <AccordianItem
                    id={`presbicia`}
                    name='¿QUÉ ES LA PRESBICIA?'
                    value={4}
                >
                    <section className='category-grid'>
                        <p>Es un defecto refractivo que aparece a partir de los 43-45 años y que produce una mala visión en cerca</p>
                        <img src={presbicia} alt='' />
                        <p>Para mayor información:</p>
                        <a rel="noopener noreferrer" href='https://www.aao.org/salud-ocular/enfermedades/presbicia' target="_blank">  <IconLink /> presbicia </a>
                    </section>
                </AccordianItem>
            </Accordian>
        </div>
    )
}

export {
    TabsTemasDeInteres,
    TabsTipsHigiene
}