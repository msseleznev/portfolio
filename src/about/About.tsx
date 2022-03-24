import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './About.module.scss'
import cat from './cat.png'
import Title from "../common/components/titile/Title";
import {Priority} from "./priority/Priority";



export const About = () => {
    return (

        <div className={s.aboutBlock}>
            <div className={`${style.container} ${s.aboutContainer}`}>
                <Title title={'about'} direction={"right"} dark/>
                <div className={s.labelWrap}>
                    <div className={s.labelWrapItem}>
                        <Priority title={"Fast"} description={"Fast load times and lag free interaction, my highest priority."}/>
                        <Priority title={"Intuitive"} description={"Strong preference for easy to use, intuitive UI."}/>
                    </div>
                    <div className={s.labelWrapItem}>
                        <Priority title={"Responsive"} description={"My layouts will work on any device, big or small."}/>
                        <Priority title={"Dynamic"} description={"Websites don't have to be static, I love making pages come to life."}/>
                    </div>
                </div>
                <div className={s.about}>
                    <div className={s.text}>
                        <span>Hi There</span>
                        <h1>I'm Mike</h1>
                        <p> and I'm a </p>
                        <h2>Front-end Developer</h2>
                    </div>
                    <div className={s.photo}>
                        <img src={cat}/>
                    </div>

                </div>

            </div>


        </div>


    );
};

