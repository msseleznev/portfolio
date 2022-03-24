import React from 'react';

import s from './Footer.module.scss'
import style from "../common/styles/Container.module.css";
import a from "../common/styles/Agles.module.css";
import {motion} from 'framer-motion';
import Icon from "@mdi/react";
import {mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin} from "@mdi/js/commonjs/mdi";


const Footer = () => {

    const styleIcon = {
        width: 50,
        height: 50,
        backgroundColor: "#7960dc",
        borderRadius: 2,
        scale: 0.7
    }
    const hover = {scale: 0.9}

    return (
        <div className={`${a.section} ${a.angles} ${a.light}`}>
            <div className={a.angleTop}/>
            <div className={s.footerBlock}>
                <div className={`${style.container} ${s.footerContainer}`}>
                    <div className={s.content}>
                        <motion.div style={styleIcon}
                                    whileHover={hover}>
                            <Icon path={mdiLinkedin} className={s.icon}/>
                        </motion.div>
                        <motion.div style={styleIcon}
                                    whileHover={hover}>
                            <Icon path={mdiGithub} className={s.icon}/>
                        </motion.div>
                        <motion.div style={styleIcon}
                                    whileHover={hover}>
                            <Icon path={mdiInstagram } className={s.icon}/>
                        </motion.div>
                        <motion.div style={styleIcon}
                                    whileHover={hover}>
                            <Icon path={mdiFacebook } className={s.icon}/>
                        </motion.div>

                    </div>
                    <h4 className={s.title}>MIKHAIL SELEZNEV ©2022</h4>
                </div>
            </div>
        </div>


    );
};

export default Footer;