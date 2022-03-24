import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../nav/Nav";
import style from "../common/styles/Container.module.css";


const Header = () => {
    return (
        <div className={s.header} >
            <div className={`${style.container} ${s.headerContainer}`}>

                <Nav/>
            </div>
        </div>
    );
};

export default Header;