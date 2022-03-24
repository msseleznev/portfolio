import React, {FC} from 'react';
import {motion} from "framer-motion";
import s from './Title.module.scss'

type TitlePropsType = {
    title: string
    direction: "left" | 'right'
    dark?: boolean
}


const Title: FC<TitlePropsType> = ({title, direction, dark}) => {

    const directionAnimate = direction === 'left' ? -200 : 200
    const titleAnimation = {
        hidden: {
            x: directionAnimate,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }
    const titleClassName = `
    ${s.title}  
    ${dark ? s.titleDark : s.title}`
    const barClassName = `
    ${s.titleBar}  
    ${dark ? s.titleBarDark : s.titleBar}`
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ /*once: true*/}}
            className={titleClassName}>
            <motion.h2
                variants={titleAnimation}
                transition={{delay: 0.2, duration: 0.5}}
            >{title}
            </motion.h2>
            <motion.div variants={titleAnimation}
                        transition={{delay: 0.4, duration: 0.5}}
                        className={barClassName}/>
        </motion.div>

    );
};

export default Title;