import React from 'react';

import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}
const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Skill;