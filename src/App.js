import { Nav } from './Nav';
import './App.scss';
import { Accordion } from './Accordion';

function App() {
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
      </div>
    </div>
  );
}


export default App;
