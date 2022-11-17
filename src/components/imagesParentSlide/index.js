import React from "react"
import { SlideImages } from "../slideImages"
import glassArBlue from '../../assets/images/glassArBlue.png';
import glassArCon from '../../assets/images/glassArCon.png';
import glassOutAr from '../../assets/images/glassOutAr.png';
import glassUv from '../../assets/images/glassUv.png';


const ImageParentSlide = () => {
    const imagesData = [
        { name: 'Lente con AR de protección a la luz azul', image: glassArBlue, },
        { name: 'Lente con AR convencional', image: glassArCon, },
        { name: 'Lente sin ningún tipo de AR', image: glassOutAr, },
        { name: 'Lente que se oscurece en el sol y permite protección de los rayos UV', image: glassUv, },
    ]
    return (
        <>
            <SlideImages images={imagesData} />
        </>
    )

}

export { ImageParentSlide }