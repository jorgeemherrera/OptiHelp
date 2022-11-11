import React, { useState } from "react";
import './style.scss'


const Nav = () => {
    const [menu, stateMenu] = useState(false)
    const clickOnMenu = () => {
        stateMenu(!menu)
    }
    return (
        <>
            <nav className="navBar">
                <img onClick={clickOnMenu} src="https://img.icons8.com/sf-black/64/null/menu.png" alt="menu"/>
            </nav>
        </>
    );
}

export { Nav }