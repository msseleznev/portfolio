import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title = {'JS'} description={"Bla bfsdgsgd sgdsgsdhla"}/>
                    <Skill title = {'React'} description={"Bla dgsdg dsg sdg sdg bla"}/>
                    <Skill title = {'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                </div>

            </div>
        </div>
    );
};

export default Skills;