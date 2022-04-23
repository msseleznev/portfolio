import React, {CSSProperties} from 'react';

import s from './Project.module.scss'
import Button from "@mui/material/Button";

type ProjectPropsType = {
    title: string
    description: string
    style: CSSProperties | undefined
    demoUrl: string
    codeUrl: string
}
const Project: React.FC<ProjectPropsType> = ({title, style, description, demoUrl, codeUrl}) => {
    return (
        <div className={s.project}>
            <div className={s.preview} style={style}>
                <Button className={s.button}
                        target={"_blank"}
                        href={demoUrl}
                        variant="contained"
                        size={"small"}
                        style={{
                            backgroundColor: "rgb(4,194,201)"
                        }}
                >Demo</Button>
                <Button className={s.button} target={"_blank"}
                        href={codeUrl}
                        variant="contained"
                        size={"small"}
                        style={{
                            backgroundColor: "rgb(4,194,201)"
                        }}>Code</Button>
            </div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Project;