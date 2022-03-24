import React, {FC, useState} from 'react';
import s from './Skill.module.scss'
import {MdiType, SuperIcons} from "../../common/components/icons/SuperIcons";


type SkillPropsType = {
    title: MdiType
    // description: string
    progress: number

}


export const Skill: FC<SkillPropsType> = ({title, progress}) => {

   /* const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${progress}%`
        }
        setStyle(newStyle);
    }, 200);*/


    return (
        <div className={s.skill}>
            <div className={s.iconWrap}>
                <SuperIcons iconName={title}/>
            </div>
            <h3>{title}</h3>
            <div className={s.progress}>
                <div className={s.progressDone}>

                </div>
            </div>


            <span>{progress}%</span>


        </div>
    );
};
