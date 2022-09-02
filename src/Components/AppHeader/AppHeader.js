import React from 'react';
import CardsPage from "../../Pages/cardsPage";
import {NavLink} from "react-router-dom";
import s from "./AppHeader.module.css"

const AppHeader = () => {
    return (
        <div className={s.container}>
            <ul className={s.siteNavigation}>

                <li className={s.siteNavigationItem}>
                    <NavLink
                        to={"/cards"}>
                        Калькулятор

                    </NavLink>
                </li>

                <li className={s.siteNavigationItem}>
                    <NavLink
                        to={"/usin"}>
                        УСИН

                    </NavLink>
                </li>


            </ul>
        </div>
    );
};

export default AppHeader;
