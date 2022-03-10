import React from 'react';

import s from './Footer.module.css'
import style from "../common/styles/Container.module.css";



const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Mike Seleznev</h2>
                <div className={s.content}>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>

                </div>
                <h4 className={s.title}>© 2022  All rights reserved</h4>
            </div>
        </div>
    );
};

export default Footer;