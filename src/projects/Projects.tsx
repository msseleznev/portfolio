import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/titile/Title";
import todoImg from '../common/img/todo-b.png';
import socialImg from '../common/img/social-b.png';
import counterImg from '../common/img/counter-b.png';
import cardsImg from '../common/img/Cards-b.png'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImg})`,
    };
    const todo = {
        backgroundImage: `url(${todoImg})`,
    };
    const counter = {
        backgroundImage: `url(${counterImg})`,
    };
    return (
        <div id="projects" className={s.projectsBlock} >
            <div className={`${style.container} ${s.projectsContainer}`}>
                <Title title={'projects'} direction={"right"} dark/>
                <div className={s.projects}>
                    <Project style={cards}
                             title={'Cards learning'}
                             description={"Create flashcards and learn new material"}
                             demoUrl={'https://msseleznev.github.io/friday-app/#/login'}
                             codeUrl={'https://github.com/msseleznev/friday-app'}/>

                    <Project style={todo}
                             title={'Todo'}
                             description={"Make your to-do list, to not forget anything"}
                             demoUrl={'https://msseleznev.github.io/todolist-app'}
                             codeUrl={'https://github.com/msseleznev/todolist-app'}/>
                    <Project style={counter}
                             title={'Counter'}
                             description={"In order not to lose count"}
                             demoUrl={'https://msseleznev.github.io/counter/'}
                             codeUrl={'https://github.com/msseleznev/counter'}/>
                    <Project style={social}
                             title={'Network'}
                             description={"The most incredible social network"}
                             codeUrl={'https://github.com/msseleznev/way-of-the-Samurai-1.0-TS'}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;