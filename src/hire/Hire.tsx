import React from 'react';
import a from '../common/styles/Agles.module.css'
import s from './Hire.module.scss'
import style from "../common/styles/Container.module.css";
import Title from "../common/components/titile/Title";
import { motion } from 'framer-motion';
import Button from "@mui/material/Button";




const Hire = () => {
    return (
        <motion.div className={`${a.section} ${a.angles} ${a.light}`}>
            <div className={a.angleTop}/>
            <div className={a.sectionInner}>
                <div className={`${style.container} ${s.hireContainer}`}>
                    <Title title={'job options'} direction={'left'}/>

                    <div className={s.terms}>
                        <h2>Ready for remote work</h2>
                        <Button variant="outlined">hire me</Button>
                    </div>

                </div>
                <div className={a.angleBottom}/>
            </div>

        </motion.div>
    );
};

export default Hire;