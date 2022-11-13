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
import './App.scss';

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
              <p>Para mayor información…  <a href="/">(aparecerá link para ingresar a la presentación en power point)</a></p>
              <br />
              <p>
                Evita trabajar en lugares con baja iluminación para evitar fatiga visual.Esta app te muestra la  cantidad de iluminación en el lugar donde estás:
                https://fluxometer.com/rainbow/#!id=iPad%20Pro/2300K-iPad%20Pro
                Lo que te ayudará a saber si cuentas con la iluminación adecuada en tu lugar de trabajo.
              </p>
            </section>

            <section className='section third-point'>
              <h3>Distancia de Harmmon</h3>
              <p>Consiste en distanciar la pantalla en el espacio existente entre el codo y la muñeca.</p>
              <img src={codoMovil} alt='' />
              <p>Para mayor información…  <a href="/">(aparecerá link para ingresar a la presentación en power point)</a></p>
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
              <p>Para mayor información…  <a href="/">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section five-point'>
              <h3>Ambiente</h3>
              <p>
                La temperatura en el lugar de trabajo debe estar entre 17° y 27°. Es necesario evitar ambientes con temperaturas elevadas y exposición directa al aire acondicionado ya que desencadenan cansancio ocular y un aumento en la evaporación lagrimal.
              </p>
              <img src={calefactor} alt='' />
              <h3>No te expongas a temperaturas muy bajas, ni muy altas para no generar cansancio ocular e inestabilidad lagrimal</h3>
              <p>Para mayor información…  <a href="/">(aparecerá link para ingresar a la presentación en power point)</a></p>
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
              <p>Para mayor información…  <a href="/">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section heigth-point'>
            <h3>No olvides parpadear</h3>
              <p>
                Cuando nos concentramos, disminuimos el parpadeo hasta
                5 veces por minuto, lo ideal es que parpadeemos entre 15 y 20 veces por minuto,
                con el fin de proveer lubricación al ojo.
              </p>
              <img src={parpadeo} alt='' />
              <p>Para mayor información…  <a href="/">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

            <section className='section six-point'>
              <h3>Alimentación</h3>
              <p>
                Consume alimentos ricos en vitamina A (espinacas, papaya, tomate,
                huevos y mantequilla), C (naranja, limón, piña, fresas, repollo), y E (nueces,
                almendras, maní y avellanas). Nos ayuda a prevenir inestabilidad ocular.
              </p>
              <img src={food} alt='' />
              <h3>Balancea tú dieta con alimentos ricos en Omega3</h3>
              <p>Para mayor información…  <a href="/">(aparecerá link para ingresar a la presentación en power point)</a></p>
            </section>

          </div>
        </Accordion>
      </div>
    </div>
  );
}


export default App;
