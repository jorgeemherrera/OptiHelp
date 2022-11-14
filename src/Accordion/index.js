import { useState } from "react";
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import PropTypes from 'prop-types'
import './accordion.scss'

const Accordion = ({
    title,
    paragraph,
    list,
    children
}) => {
    const [clickAccordion, setClickAccordion] = useState(false);

    const togleAccordion = () => {
        setClickAccordion(!clickAccordion);
    }

    return (
        <>
            <div  className={clickAccordion ? 'header-accordion-active' : 'header-accordion-inactive'}>
                <div onClick={togleAccordion} className={clickAccordion ? 'header active' : 'header'}>
                    {!clickAccordion ?
                        <>
                            <h1 className='title-inactive'>{title}</h1>
                            <IconChevronDown
                                width='20px'
                                height='20px'
                            />

                        </>
                        :
                        <IconChevronUp
                            width='20px'
                            height='20px'
                        />
                    }
                </div>
                <div className={clickAccordion ? 'accordion-active' : 'accordion-active inactive'}>
                    <h1 className='title'>{title}</h1>
                    <p className='paragraph'>{paragraph}</p>
                    {list &&
                        <ul className="list-ul">
                            {list.map((text,i) => {
                                return (
                                    <li key={i}>{text}</li>
                                );
                            })}
                        </ul>

                    }
                    {children &&
                        children
                    }
                </div>
            </div>
        </>
    );
}

export { Accordion }

Accordion.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}

