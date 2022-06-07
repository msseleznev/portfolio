import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/titile/Title";
import todoImg from '../img/todo-b.png';
import socialImg from '../img/social-b.png';
import counterImg from '../img/counter-b.png';
import cardsImg from '../img/Cards-b.png'

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
                    <Project style={social}
                             title={'Network'}
                             description={"The most incredible social network"}
                             demoUrl={''}
                             codeUrl={''}/>
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
                </div>

            </div>
        </div>
    );
};

export default Projects;