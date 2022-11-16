import React from "react"
import { SlideImages } from "../slideImages"
import glassArBlue from '../../assets/images/glassArBlue.png';
import glassArCon from '../../assets/images/glassArCon.png';
import glassOutAr from '../../assets/images/glassOutAr.png';
import glassUv from '../../assets/images/glassUv.png';


const ImageParentSlide = () => {
    const imagesData = [
        { name: 'Glass Ar Blue', image: glassArBlue, },
        { name: 'Glass ArCon', image: glassArCon, },
        { name: 'Glass Without Ar', image: glassOutAr, },
        { name: 'Glass UV', image: glassUv, },
    ]
    return (
        <>
            <SlideImages images={imagesData} />
        </>
    )

}

export { ImageParentSlide }