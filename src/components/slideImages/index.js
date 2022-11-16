import React, { useState } from "react";
import { IconCaretLeft, IconCaretRight } from '@tabler/icons';
import './slideImages.scss';

//images
import glassArBlue from '../../assets/images/glassArBlue.png';
import glassArCon from '../../assets/images/glassArCon.png';
import glassOutAr from '../../assets/images/glassOutAr.png';
import glassUv from '../../assets/images/glassUv.png';

const SlideImages = ({ images }) => {
    // data images
    const imagesData = [
        { name: 'Lente con AR de protección a la luz azul', image: glassArBlue, },
        { name: 'Lente con AR convencional', image: glassArCon, },
        { name: 'Lente sin ningún tipo de AR', image: glassOutAr, },
        { name: 'Lente que se oscurece en el sol y permite protección de los rayos UV', image: glassUv, },
    ]

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }


    return (
        <div className="images">
            <IconCaretLeft onClick={prevImage} className="Icon-caret-left" />
            {imagesData.map((img, idx) => {
                return (
                    <div className={idx === current ? 'image active' : 'image'} key={idx}>
                        {idx === current && (
                            <>
                                <img key={idx} src={img.image} alt={img.name} />
                                <p>{img.name}</p>
                            </>
                        )}
                    </div>
                );
            })

            }
            <IconCaretRight onClick={nextImage} className="Icon-caret-right" />
        </div>
    );

}

export { SlideImages }