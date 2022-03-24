import React, {CSSProperties} from 'react';

import s from './Project.module.scss'
import Button from "@mui/material/Button";

type ProjectPropsType = {
    title: string
    description: string
    style: CSSProperties | undefined
}
const Project: React.FC<ProjectPropsType> = ({title, style, description}) => {
    return (
        <div className={s.project}>
            <div className={s.preview} style={style}>
                <Button variant="contained">Demo</Button>
            </div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Project;