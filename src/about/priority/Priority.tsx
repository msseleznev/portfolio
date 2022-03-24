import React, {FC} from 'react';
import s from './Priority.module.scss'
import {SuperIcons} from "../../common/components/icons/SuperIcons";


type PriorityPropsType = {
    title: string
    description: string
}


export const Priority: FC<PriorityPropsType> = (
    {
        title,
        description,

    }) => {
    const icon = () => {
        if (title === 'Fast') {
            return <SuperIcons speedometer />
        } else if (title === "Responsive") {
            return <SuperIcons cellphone />
        } else if (title === "Intuitive") {
            return <SuperIcons bulb />
        } else return <SuperIcons rocket />
    }
    return (
        <div className={s.priorityWrap}>
            <div className={s.iconWrap}>
                {icon()}
            </div>

            <div className={s.title}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

