import react, { useState } from "react";
import './style.scss'

const Accordion = ({
    title,
    paragraph,
    urlImage
}) => {
    const [clickAccordion,setClickAccordion] = useState(false);

    const togleAccordion = () =>{
        setClickAccordion(!clickAccordion);
    }

    return (
        <>
            <div onClick={togleAccordion} className='accordion-inactive'>
                <h1 className='title-inactive'>{title}</h1>
                <img src={urlImage} alt=""/>
            </div>
            <div  className={clickAccordion ? 'accordion-active' : 'accordion-active inactive'}>
                <h1 className='title'>{title}</h1>
                <p className='paragraph'>{paragraph}</p>
            </div>
        </>
    );
}

export { Accordion }