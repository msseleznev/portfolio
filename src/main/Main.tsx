import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Main.module.css'
import cat from './cat.png'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={style.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Mike Seleznev</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo} >
                    <img src={cat}/>
                </div>
            </div>


        </div>
    );
};

export default Main;