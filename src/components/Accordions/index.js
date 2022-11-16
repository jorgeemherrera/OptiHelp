import { AccordionRecyclable } from "../AccordionRecyclable";
import { TabsTemasDeInteres, TabsTipsHigiene } from "../Tabs";
import imageDownloadable from '../../assets/images/downloadable.png'
import './Accordions.scss'


const Accordions = () => {
    const listAffectations = [
        "Cansancio visual",
        "Sequedad ocular",
        "Dolor de cabeza",
        "Ojo rojo, picor o molestias oculares",
        "Visión borrosa",
        "Lagrimeo"
    ];


    return (
        <div className='body-accordions'>
            <AccordionRecyclable
                title="¿QUÉ ES HIGIENE VISUAL?"
                paragraph="La higiene visual se denomina como un conjunto de prácticas diarias enfocadas en cuidar
                           la salud visual y ocular cuando usamos computadores, celulares, tablets, entre otros.
                           ¿Quieres saber más? Mira la siguiente información"
                id={'0'}
            />
            <AccordionRecyclable
                title="AFECTACIONES OCULARES"
                paragraph=" sobre uso y abuso de los dispositivos inteligentes hace que nuestros ojos sufran
                            efectos secundarios que pueden incluso afectar nuestra calidad de vida, algunos de ellos
                            son:"
                list={listAffectations}
                urlImage="../src/assets/images/downward-arrow.png"
                id={'1'}
            />
            <AccordionRecyclable
                title="TIPS DE HIGIENE VISUAL"
                paragraph="Si queremos disminuir o evitar alguno o varios síntomas mencionados anteriormente,
                           debemos aprender a cuidar nuestra salud ocular"
                id={'2'}
            >
                <TabsTipsHigiene />
            </AccordionRecyclable>

            <AccordionRecyclable
                title='STICKER DESCARGABLE'
                id={'3'}
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
            </AccordionRecyclable>

            <AccordionRecyclable
                title='ALARMAS'
                id={'4'}
            ><p>Coloca en práctica la regla 20/20/20. <br /><br />
                    <strong>En la parte superior podrás añadir</strong> tu horario de trabajo para que cada 20 minutos la alarma te recuerde que debes descansar durante 20 segundos de la pantalla y mirar el sitio mas lejano que haya a tu alrededor</p>
            </AccordionRecyclable>

            <AccordionRecyclable
                title='TEMAS DE INTERÉS'
                id={'5'}
            >
                <section className='poitns-accordion'>

                    <div>
                        <h3>¿Qué son los errores refractivos?</h3>
                        <p>
                            Los errores refractivos ocurren cuando el ojo no enfoca la luz en la retina apropiadamente. Esto es llamado refracción. La mayoría de las personas tienen uno o más de ellos y generalmente son fácilmente corregidos con anteojos o lentes de contacto.
                        </p>
                    </div>
                    <TabsTemasDeInteres />
                </section>
            </AccordionRecyclable>

        </div>
    );
}

export { Accordions }