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
        backgroundColor: "rgb(4,194,201)",
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
                        <motion.a target={"_blank"}
                                  href={"https://www.linkedin.com/in/msseleznev"}
                                  style={styleIcon}
                                  whileHover={hover}>
                            <Icon path={mdiLinkedin}
                                  className={s.icon}/>
                        </motion.a>
                        <motion.a target={"_blank"}
                                  href={"https://github.com/msseleznev"}
                                  style={styleIcon}
                                  whileHover={hover}>
                            <Icon path={mdiGithub}
                                  className={s.icon}/>
                        </motion.a>
                        <motion.a target={"_blank"}
                                  href={"https://www.instagram.com/seleznev_ms"}
                                  style={styleIcon}
                                  whileHover={hover}>
                            <Icon path={mdiInstagram}
                                  className={s.icon}/>
                        </motion.a>
                        <motion.a target={"_blank"}
                                  href={"https://www.facebook.com/ms.seleznev"}
                                  style={styleIcon}
                                  whileHover={hover}>
                            <Icon path={mdiFacebook}
                                  className={s.icon}/>
                        </motion.a>

                    </div>
                    <h4 className={s.title}>MIKHAIL SELEZNEV ©2022</h4>
                </div>
            </div>
        </div>


    );
};

export default Footer;