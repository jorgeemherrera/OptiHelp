import { Nav } from './Nav';
import './App.scss';
import { Accordion } from './Accordion';

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
      <Nav />
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
            <section className='section-first-point'>
              <p>1. Usar prescripción óptica: No olvides asistir al optómetra una vez al año para actualizar tu fórmula de gafas.</p>
              <img src="https://static.toiimg.com/thumb/75181065.cms?width=680&height=512&imgsize=200465" />
            </section>
          </div>
        </Accordion>
      </div>
    </div>
  );
}


export default App;
