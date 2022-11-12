import { Navbar } from './Navbar';
import { Accordion } from './Accordion';
import Lantern from './assets/images/lampara.png' 
import codoMovil from './assets/images/codo-movil.webp' 
import distanciaMonitor from './assets/images/distancia-monitor.jpeg'
import calefactor from './assets/images/calefactor.png'
import fish from './assets/images/pescado.png'
import twentyMinutes from './assets/images/20M.webp'
import parpadeo from './assets/images/parpadeo.jpg'
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
            debemos aprender a cuidar nuestra salud ocular…:
          "
        >
          <div className='poitns-accordion'>
            <section className='section first-point'>
              <p>1. Usar prescripción óptica: No olvides asistir al optómetra una vez al año para actualizar tu fórmula de gafas.</p>
              <img src="https://static.toiimg.com/thumb/75181065.cms?width=680&height=512&imgsize=200465" alt='girl-with-glasses' />
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

            <section className='section secopnd-point'>
              <p>2. Mantener buena iluminación: Evita trabajar en lugares con baja iluminación para evitar fatiga visual.</p>
              <img src={Lantern} alt='' className='lantern-image'/>
              <h3>Trabaja en ambientes con iluminación artificial y natural, evitando el cansancio ocular</h3>
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

            <section className='section third-point'>
              <p>3. Distancia de trabajo: No acercar el celular a los ojos ya que ocasiona mayor cansancio y estrés visual.</p>
              <img src={codoMovil} alt='' />
              <h3>Usa como mínimo la distancia entre el codo y tú mano cuando uses el celular</h3>
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

            <section className='section fourth-point'>
              <p>4. Postura: La distancia entre el computador y los ojos debe estar entre 45cm y 75cms..</p>
              <img src={distanciaMonitor} alt='' />
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

            <section className='section five-point'>
              <p>5. Ambiente: Evita exponerte directamente al aire acondicionado ya que puede causar ojo seco y cansancio ocular</p>
              <img src={calefactor} alt='' />
              <h3>No te expongas a temperaturas muy bajas, ni muy altas para no generar cansancio ocular e inestabilidad lagrimal</h3>
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

            <section className='section six-point'>
              <p>
                6. Alimentación: Consume alimentos ricos en vitamina A (espinacas, papaya, tomate,
                huevos y mantequilla), C (naranja, limón, piña, fresas, repollo), y E (nueces,
                almendras, maní y avellanas). Nos ayuda a prevenir inestabilidad ocular.
              </p>
              <img src={fish} alt='' />
              <h3>Balancea tú dieta con alimentos ricos en Omega3</h3>
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

            <section className='section seven-point'>
              <p>
                7. Pausas activas: Es necesario hacer pausas activas para disminuir el uso excesivo de
                la visión próxima y así se permite relajar la acomodación y disminuir el estrés
                visual.
              </p>
              <img src={twentyMinutes} alt='' />
              <h3>Balancea tú dieta con alimentos ricos en Omega3</h3>
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

            <section className='section heigth-point'>
              <p>
                8. No olvides parpadear. Cuando nos concentramos, disminuimos el parpadeo hasta
                5 veces por minuto, lo ideal es que parpadeemos entre 15 y 20 veces por minuto,
                con el fin de proveer lubricación al ojo.
              </p>
              <img src={parpadeo} alt='' />
              <p>Para mayor información…(aparecerá link para ingresar a la presentación en power point)</p>
            </section>

          </div>
        </Accordion>
      </div>
    </div>
  );
}


export default App;
