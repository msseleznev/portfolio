import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Projects.module.css'
import Project from "./project/Project";


const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title = {'Network'} description={"The most incredible social network"}/>
                    <Project title = {'Todo'} description={"The most convenient to-do list"}/>
                    <Project title = {'Counter'} description={"The most accurate counter in the world"}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;