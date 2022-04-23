import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/titile/Title";
import todoImg from '../img/todo.png'
import socialImg from '../img/social.png'
import counterImg from '../img/counter.png'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    };
    const todo = {
        backgroundImage: `url(${todoImg})`,
    };
    const counter = {
        backgroundImage: `url(${counterImg})`,
    };
    return (
        <div id="projects" className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <Title title={'projects'} direction={"right"} dark/>
                <div className={s.projects}>
                    <Project style={social}
                             title={'Network'}
                             description={"The most incredible social network"}
                             demoUrl={''}
                             codeUrl={''}/>
                    <Project style={todo}
                             title={'Todo'}
                             description={"The most convenient to-do list"}
                             demoUrl={'https://msseleznev.github.io/todolist-app'}
                             codeUrl={'https://github.com/msseleznev/todolist-app'}/>
                    <Project style={counter}
                             title={'Counter'}
                             description={"The most accurate counter in the world"}
                             demoUrl={'https://msseleznev.github.io/counter/'}
                             codeUrl={'https://github.com/msseleznev/counter'}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;