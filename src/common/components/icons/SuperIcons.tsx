import React, {FC} from 'react';
import s from "./SuperIcons.module.scss";
import Icon from '@mdi/react'
import {mdiRocketLaunch} from '@mdi/js';
import {mdiSpeedometer} from '@mdi/js';
import {mdiMonitorCellphone} from '@mdi/js';
import {mdiLightbulbOutline} from '@mdi/js';
import {mdiAlertCircle} from '@mdi/js';
import {mdiLanguageHtml5} from '@mdi/js';
import {mdiLanguageCss3} from '@mdi/js';
import {mdiLanguageJavascript} from '@mdi/js';
import {mdiLanguageTypescript} from '@mdi/js';
import {mdiReact} from '@mdi/js';
import {mdiMaterialUi} from '@mdi/js';
import {mdiGithub} from '@mdi/js';
import {mdiGmail} from '@mdi/js';



type SuperIconsPropsType = {
    rocket?: boolean
    speedometer?: boolean
    cellphone?: boolean
    bulb?: boolean
    html?: boolean
    css?: boolean
    js?: boolean
    ts?: boolean
    react?: boolean
    mu?: boolean
    git?: boolean
    gmail?: boolean
    iconName?: MdiType
}

export type MdiType = keyof typeof mdiIcons

const mdiIcons = {
    "HTML": mdiLanguageHtml5,
    "CSS/SASS": mdiLanguageCss3,
    "JavaScript": mdiLanguageJavascript,
    "TypeScript": mdiLanguageTypescript,
    "React": mdiReact,
    "Material UI": mdiMaterialUi,
    "Git/GitHub": mdiGithub,
}
export const SuperIcons: FC<SuperIconsPropsType> = (
    {
        rocket,
        speedometer,
        cellphone,
        bulb,
        html,
        css,
        js,
        ts,
        react,
        mu,
        git,
        gmail,
        iconName,
    }) => {

    const icons =
        rocket ? mdiRocketLaunch : iconName ? mdiIcons[iconName]:
            speedometer ? mdiSpeedometer : cellphone ? mdiMonitorCellphone :
                bulb ? mdiLightbulbOutline : html ? mdiLanguageHtml5 :
                    css ? mdiLanguageCss3 : js ? mdiLanguageJavascript :
                        ts ? mdiLanguageTypescript : react ? mdiReact :
                            mu ? mdiMaterialUi : git ? mdiGithub :
                                gmail ? mdiGmail : mdiAlertCircle


    return (
        <div className={s.hexWrap}>
            <div className={s.hexagon}>
                <Icon path={icons}
                      className={s.icon}/>
            </div>
        </div>

    );
};