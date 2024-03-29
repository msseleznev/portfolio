import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './About.module.scss'
import photo from './photo.png'
import Title from "../common/components/titile/Title";
import {Priority} from "./priority/Priority";
import ReactTypingEffect from 'react-typing-effect'


export const About = () => {
    return (

        <div id="about" className={s.aboutBlock}>
            <div className={`${style.container} ${s.aboutContainer}`}>
                <Title title={'about'} direction={"right"} dark/>
                <div className={s.labelWrap}>
                    <div className={s.labelWrapItem}>
                        <Priority title={"Fast"}
                                  description={"Fast load times and lag free interaction, my highest priority."}/>
                        <Priority title={"Intuitive"}
                                  description={"Strong preference for easy to use, intuitive UI."}/>
                    </div>
                    <div className={s.labelWrapItem}>
                        <Priority title={"Responsive"}
                                  description={"My layouts will work on any device, big or small."}/>
                        <Priority title={"Dynamic"}
                                  description={"Websites don't have to be static, I love making pages come to life."}/>
                    </div>
                </div>
                <div className={s.about}>
                    <div className={s.text}>
                        <span>Hi There</span>
                        <h1>I'm Mike</h1>
                        <p> and I'm a </p>
                        <ReactTypingEffect
                            speed={100}
                            eraseSpeed={100}
                            typingDelay={800}
                            text={["Front-end Developer"]}
                        />
                        <a target={"_blank"}
                           href={"https://drive.google.com/file/d/1CdKYlFEdfmOVR36ARScJgapv0dHkv8aU/view?usp=sharing"}
                           rel="noreferrer">
                            <div className={s.button}>My CV</div>
                        </a>
                    </div>
                    <div className={s.photo}>
                        <img src={photo} alt={photo}/>
                    </div>

                </div>

            </div>


        </div>


    );
};

