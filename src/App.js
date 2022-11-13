import { Navbar } from './Navbar';
import { Accordion } from './Accordion';
import Lantern from './assets/images/lampara.png'
import codoMovil from './assets/images/harmon.png'
import distanciaMonitor from './assets/images/postura.png'
import calefactor from './assets/images/calefactor.png'
import food from './assets/images/food.png'
import twentyMinutes from './assets/images/20M.png'
import parpadeo from './assets/images/parpadeo.png'
import glassesFirst from './assets/images/glassesFirstPoint.png'
import glassOutAr from './assets/images/glassOutAr.png'
import glassArCon from './assets/images/glassArCon.png'
import glassArBlue from './assets/images/glassArBlue.png'
import glassUv from './assets/images/glassUv.png'
import imageDownloadable from './assets/images/downloadable.png'
import miopia from './assets/images/miopia.png'
import astigmatismo from './assets/images/astigmatismo.png'
import hipermetropia from './assets/images/hipertrofia.png'
import presbicia from './assets/images/presbicia.png'
import { IconBellRinging } from '@tabler/icons';
import Modal from './components/Modal';
import './App.scss';
import Alert from './components/Alert';

function App() {
  const listAffectations = [
    "Cansancio visual",
    "Sequedad ocular",
    "Dolor de cabeza",
    "Ojo rojo, picor o molestias oculares",
    "Visión borrosa",
    "Alteraciones en usuarios de lentes de contacto",
    "Lagrimeo"
  ]
  return (
    <div className='App'>
      <Navbar />
      <button><IconBellRinging/>Crear Alerta</button>
      <div className='body-accordions'>
        <Accordion
          title="¿QUÉ ES HIGIENE VISUAL?"
          paragraph="
          La higiene visual se denomina como un conjunto de prácticas diarias enfoncadas en cuidar
          la salud visual y ocular cuando usamos computadores, celulares, tablets, entre otros.

          ¿Quieres saber más? Mira la siguiente información
          "
          urlImage="../src/assets/images/downward-arrow.png"
        />
        <Accordion
          title="AFECTACIONES OCULARES"
          paragraph="
          El sobre abuso y abuso de los dispositivos inteligentes hace que nuestros ojos sufran
          efectos secundarios que pueden incluso afectar nuestra calidad de vida, algunos de ellos
          son:
          "
          list={listAffectations}
          urlImage="../src/assets/images/downward-arrow.png"
        />
        <Accordion
          title="TIPS DE HIGIENE VISUAL"
          paragraph="
            Si queremos disminuir o evitar alguno o varios síntomas mencionados anteriormente,
            debemos aprender a cuidar nuestra salud ocular
          "
        >
          <div className='poitns-accordion'>
            <section className='section first-point'>
              <h3>Usar prescripción óptica</h3>
              <p> No olvides asistir al optómetra una vez al año para actualizar tu fórmula de gafas.</p>
              <img src={glassesFirst} alt='girl-with-glasses' />
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
              <br />
              <h3>Las gafas deben contar con antirreflejo</h3>
              <p>Las gafas deben contar con antirreflejos…
                El tratamiento antirreflejo consiste en un revestimiento que se hace al lente, por medio de una
                delgada película de varias capas que se aplica sobre el mismo para reducir los reflejos y eliminar el
                deslumbramiento. Esto te ayudará a tener una visión de mayor calidad. (AR convencional)
                <br />
                Además, existen AR que protegen los ojos de la luz azul de las pantallas reduciendo la
                cantidad de luz que reciben los ojos.
              </p>
              <img src={glassOutAr} alt='glass-whit-out-ar' />
              <p>Lente sin ningún tipo de AR</p>
              <img src={glassArCon} alt='glass-whit-out-ar' />
              <p>Lente con AR convencional</p>
              <img src={glassArBlue} alt='glass-whit-out-ar' />
              <p>Lente con AR de protección a la luz azul</p>
              <img src={glassUv} alt='glass-whit-out-ar' />
              <p>Lente que se oscurece en el sol y permite protección de los rayos UV</p>
            </section>

            <section className='section secopnd-point'>
              <h3>Mantener buena iluminación</h3>
              <p>Evita trabajar en lugares con baja iluminación para evitar fatiga visual.Evita trabajar en lugares con baja iluminación para evitar fatiga visual.</p>
              <img src={Lantern} alt='' className='lantern-image' />
              <p>Trabaja en ambientes con iluminación artificial y natural, evitando el cansancio ocular</p>
              <p>Para mayor información…  <a href="/" target="_blank">(aparecerá link para ingresar a la presentación en power point)</a></p>
              <p>
                Evita trabajar en lugares con baja iluminación para evitar fatiga visual.Esta app te muestra la  cantidad de iluminación en el lugar donde estás:
                <a  target="_blank" href='https://fluxometer.com/rainbow/#!id=iPad%20Pro/2300K-iPad%20Pro'>    Fluxometer
                </a> <br />
                Lo que te ayudará a saber si cuentas con la iluminación adecuada en tu lugar de trabajo.
              </p>
            </section>

            <section className='section third-point'>
              <h3>Distancia de Harmmon</h3>
              <p>Consiste en distanciar la pantalla en el espacio existente entre el codo y la muñeca.</p>
              <img src={codoMovil} alt='' />
              <p>Para mayor información…  <a href="/"  target="_blank">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section fourth-point'>
              <h3>Postura</h3>
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
              <p>Para mayor información…  <a href="/"  target="_blank">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section five-point'>
              <h3>Ambiente</h3>
              <p>
                La temperatura en el lugar de trabajo debe estar entre 17° y 27°. Es necesario evitar ambientes con temperaturas elevadas y exposición directa al aire acondicionado ya que desencadenan cansancio ocular y un aumento en la evaporación lagrimal.
              </p>
              <img src={calefactor} alt='' />
              <h3>No te expongas a temperaturas muy bajas, ni muy altas para no generar cansancio ocular e inestabilidad lagrimal</h3>
              <p>Para mayor información…  <a href="/"  target="_blank">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section seven-point'>
              <h3>Pausas activas</h3>
              <p>
                Es necesario hacer pausas activas para disminuir el uso excesivo de
                la visión próxima y así se permite relajar la acomodación y disminuir el estrés
                visual.
              </p>
              <img src={twentyMinutes} alt='' />
              <p>Balancea tú dieta con alimentos ricos en Omega3</p>
              <p>Para mayor información…  <a href="/"  target="_blank">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section heigth-point'>
              <h3>No olvides parpadear</h3>
              <p>
                Cuando nos concentramos, disminuimos el parpadeo hasta
                5 veces por minuto, lo ideal es que parpadeemos entre 15 y 20 veces por minuto,
                con el fin de proveer lubricación al ojo.
              </p>
              <img src={parpadeo} alt='' />
              <p>Para mayor información…  <a href="/"  target="_blank">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section six-point'>
              <h3>Alimentación</h3>
              <p>
                Consume alimentos ricos en vitamina <br />
                A (espinacas, papaya, tomate,huevos y mantequilla), <br />
                C (naranja, limón, piña, fresas, repollo), <br />
                y E (nueces,almendras, maní y avellanas). <br />
                Nos ayuda a prevenir inestabilidad ocular.<br />
              </p>
              <img src={food} alt='' />
              <h3>Balancea tú dieta con alimentos ricos en Omega3</h3>
              <p>Para mayor información…  <a href="/"  target="_blank">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

          </div>
        </Accordion>

        <Accordion
          title='STICKER DESCARGABLE'
        >
          <section className='poitns-accordion'>
            <img src={imageDownloadable} alt='' />
            <p>
              Descarga esta imagen y pégala en un lugar visible en tu entorno de trabajo para que te
              ayude a recordar que debes descansar tus ojos.
            </p>
          </section>
        </Accordion>

        <Accordion
          title='ALARMAS'
          paragraph='
          Coloca en práctica la regla 20/20/20.
          Aquí puedes añadir tu horario de trabajo para que cada 20 minutos la alarma te recuerde que debes descansar durante 20 segundos de la pantalla y mirar el sitio mas lejano que haya a tu alrededor
          '
        />

        <Accordion
          title='TEMAS DE INTERÉS'
        >
          <section className='poitns-accordion'>

            <div>
              <h3>¿Qué son los errores refractivos?</h3>
              <p>
                Los errores refractivos ocurren cuando el ojo no enfoca la luz en la retina apropiadamente. Esto es llamado refracción. La mayoría de las personas tienen uno o más de ellos y generalmente son fácilmente corregidos con anteojos o lentes de contacto.
              </p>
            </div>

            <div>
              <h3>¿QUÉ ES LA MIOPÍA?</h3>
              <p>Es uno de los defectos refractivos más frecuentes que produce una visión borrosa al mirar de lejos.</p>
              <img src={miopia} alt='' />
              <p>Para mayor información:</p>
              <a href='https://www.aao.org/salud-ocular/enfermedades/miopia'  target="_blank"> miopia </a>
            </div>

            <div>
              <h3>¿QUÉ ES LA HIPERMETROPÍA?</h3>
              <p>Es menos frecuente que la miopía y produce una mayor visión borrosa al mirar en cerca que en lejos.</p>
              <img src={hipermetropia} alt='' />
              <p>Para mayor información:</p>
              <a href='https://www.aao.org/salud-ocular/enfermedades/hipermetropia'  target="_blank"> hipermetropia </a>
            </div>

            <div>
              <h3>¿QUÉ ES EL ASTIGMATISMO?</h3>
              <p>Con el astigmatismo, el ojo tiene forma de huevo,  Puede ir asociado a miopía, hipermetropía o ser un astigmatismo puro, es decir, no ir asociado a ningún otro defecto refractivo. Produce visión borrosa tanto de lejos como de cerca.</p>
              <img src={astigmatismo} alt='' />
              <p>Para mayor información:</p>
              <a href='https://www.aao.org/salud-ocular/enfermedades/astigmatismo'  target="_blank"> astigmatismo </a>
            </div>

            <div>
              <h3>¿QUÉ ES LA PRESBICIA?</h3>
              <p>Es un defecto refractivo que aparece a partir de los 43-45 años y que produce una mala visión en cerca</p>
              <img src={presbicia} alt='' />
              <p>Para mayor información:</p>
              <a href='https://www.aao.org/salud-ocular/enfermedades/presbicia'  target="_blank"> presbicia </a>
            </div>

          </section>
        </Accordion>

      </div>
      <Modal title='Configurar Alarma'>
        <Alert/>
      </Modal>
    </div>
  );
}


export default App;
