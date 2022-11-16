import React from "react";
import { TabsRecyclable } from "../TabsRecyclable";
import { DownloadPdf } from "../DownloadPdf";
import { ImageParentSlide } from "../imagesParentSlide";

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


const TabsTipsHigiene = () => {
    return (
        <div className="poitns-accordion">
            <section className='section first-point'>
                <TabsRecyclable
                    titleTab='Usar prescripción óptica'
                    paragraphTab='No olvides asistir al optómetra una vez al año para actualizar tu fórmula de gafas.'
                    index="0"
                >
                    <img src={glassesFirst} alt='girl-with-glasses' />
                    <DownloadPdf />
                </TabsRecyclable>
                <TabsRecyclable
                    titleTab='Las gafas deben contar con antirreflejo'
                    paragraphTab='
                Las gafas deben contar con antirreflejos…
                El tratamiento antirreflejo consiste en un revestimiento que se hace al lente, por medio de una
                delgada película de varias capas que se aplica sobre el mismo para reducir los reflejos y eliminar el
                deslumbramiento. Esto te ayudará a tener una visión de mayor calidad. (AR convencional)
                '
                    index="1"
                >
                    <br />
                    <p>
                        Además, existen AR que protegen los ojos de la luz azul de las pantallas reduciendo la
                        cantidad de luz que reciben los ojos.
                    </p>
                    <ImageParentSlide />
                </TabsRecyclable>
            </section>

            <section className='section second-point'>
                <TabsRecyclable
                    titleTab='Mantener buena iluminación'
                    paragraphTab='Evita trabajar en lugares con baja iluminación para evitar fatiga visual.'
                >
                    <img src={Lantern} alt='' className='lantern-image' />
                    <p>Trabaja en ambientes con iluminación artificial y natural, evitando el cansancio ocular</p>
                    <DownloadPdf />
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
                        <br />
                        <br />
                        Lo que te ayudará a saber si cuentas con la iluminación adecuada en tu lugar de trabajo.
                    </p>
                </TabsRecyclable>
            </section>

            <section className='section third-point'>
                <TabsRecyclable
                    titleTab='Distancia de Harmmon'
                    paragraphTab='Consiste en distanciar la pantalla en el espacio existente entre el codo y la muñeca.'
                >
                    <img src={codoMovil} alt='' />
                    <DownloadPdf />
                </TabsRecyclable>
            </section>

            <section className='section fourth-point'>
                <TabsRecyclable
                    titleTab='Postura'
                >
                    <ul>
                        <li>La espalda debe estar en posición recta apoyada al respaldo de la silla.</li>
                        <li>
                            Se debe formar un ángulo de 90° entre la parte inferior del cuerpo y la parte superior, los pies deben estar apoyados sobre el suelo.
                        </li>
                        <li>
                            Evitar malas posturas de la cabeza y flexiones de cuello no mayores a 10° controlando la posición de la pantalla la cual debe estar posicionada frente a los ojos de forma paralela. Para prevenir alteraciones musculares causadas por las malas posiciones y las jornadas laborales extensas.
                        </li>
                    </ul>
                    <img src={distanciaMonitor} alt='' />
                    <DownloadPdf />
                </TabsRecyclable>
            </section>

            <section className='section five-point'>
                <TabsRecyclable
                    titleTab='Ambiente'
                    paragraphTab='La temperatura en el lugar de trabajo debe estar entre 17° y 27°. Es necesario evitar ambientes con temperaturas elevadas y exposición directa al aire acondicionado ya que desencadenan cansancio ocular y un aumento en la evaporación lagrimal.'
                >
                    <img src={calefactor} alt='' />
                    <h3>No te expongas a temperaturas muy bajas, ni muy altas para no generar cansancio ocular e inestabilidad lagrimal</h3>
                    <DownloadPdf />
                </TabsRecyclable>
            </section>

            <section className='section seven-point'>
                <TabsRecyclable
                    titleTab='Pausas activas'
                    paragraphTab=' Es necesario hacer pausas activas para disminuir el uso excesivo de
                la visión próxima y así se permite relajar la acomodación y disminuir el estrés
                visual.'
                >
                    <img src={twentyMinutes} alt='' />
                    <p>Balancea tú dieta con alimentos ricos en Omega3</p>
                    <DownloadPdf />
                </TabsRecyclable>
            </section>

            <section className='section heigth-point'>
                <TabsRecyclable
                    titleTab='No olvides parpadear'
                    paragraphTab=' Cuando nos concentramos, disminuimos el parpadeo hasta
                5 veces por minuto, lo ideal es que parpadeemos entre 15 y 20 veces por minuto,
                con el fin de proveer lubricación al ojo.'
                >
                    <img src={parpadeo} alt='' />
                    <DownloadPdf />
                </TabsRecyclable>
            </section>

            <section className='section six-point'>
                <TabsRecyclable
                    titleTab='Alimentación'
                >
                    <p>
                        Alimentarnos va mucho más allá que consumir alimentos, es
                        necesario adquirir alimentos sanos y equilibrados, por ejemplo, la dieta
                        mediterránea, ha sido declarada como Patrimonio Cultural Inmaterial de la
                        Humanidad.
                        <p>La Dieta Mediterránea incluye:</p>
                        <ul>
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
                    <h3>Balancea tú dieta con alimentos ricos en Omega3</h3>
                    <DownloadPdf />
                </TabsRecyclable>
            </section>

        </div>
    )
}

const TabsTemasDeInteres = () => {
    return (
        <>
            <TabsRecyclable
                titleTab='¿QUÉ ES LA MIOPÍA?'
                paragraphTab='Es uno de los defectos refractivos más frecuentes que produce una visión borrosa al mirar de lejos.'
            >
                <img src={miopia} alt='' />
                <p>Para mayor información:</p>
                <a href='https://www.aao.org/salud-ocular/enfermedades/miopia' rel="noopener noreferrer" target="_blank">  <IconLink /> miopia </a>
            </TabsRecyclable>

            <TabsRecyclable
                titleTab='¿QUÉ ES LA HIPERMETROPÍA?'
                paragraphTab='Es menos frecuente que la miopía y produce una mayor visión borrosa al mirar en cerca que en lejos.'
            >
                <img src={hipermetropia} alt='' />
                <p>Para mayor información:</p>
                <a rel="noopener noreferrer" href='https://www.aao.org/salud-ocular/enfermedades/hipermetropia' target="_blank">  <IconLink /> hipermetropia </a>
            </TabsRecyclable>

            <TabsRecyclable
                titleTab='¿QUÉ ES EL ASTIGMATISMO?'
                paragraphTab='Con el astigmatismo, el ojo tiene forma de huevo,  Puede ir asociado a miopía, hipermetropía o ser un astigmatismo puro, es decir, no ir asociado a ningún otro defecto refractivo. Produce visión borrosa tanto de lejos como de cerca.'
            >
                <img src={astigmatismo} alt='' />
                <p>Para mayor información:</p>
                <a rel="noopener noreferrer" href='https://www.aao.org/salud-ocular/enfermedades/astigmatismo' target="_blank">   <IconLink /> astigmatismo </a>
            </TabsRecyclable>

            <TabsRecyclable
                titleTab='¿QUÉ ES LA PRESBICIA?'
                paragraphTab='Es un defecto refractivo que aparece a partir de los 43-45 años y que produce una mala visión en cerca'
            >
                <img src={presbicia} alt='' />
                <p>Para mayor información:</p>
                <a rel="noopener noreferrer" href='https://www.aao.org/salud-ocular/enfermedades/presbicia' target="_blank">  <IconLink /> presbicia </a>
            </TabsRecyclable>

        </>
    )
}

export {
    TabsTemasDeInteres,
    TabsTipsHigiene
}