import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Skills.module.scss'
import a from '../common/styles/Agles.module.css'
import Title from "../common/components/titile/Title";
import {motion} from 'framer-motion';
import {Skill} from './skill/Skill';
import {MdiType} from "../common/components/icons/SuperIcons";


const skillsTitle: MdiType[] = [
    "HTML",
    "CSS/SASS",
    "JavaScript",
    "TypeScript",
    "React",
    "Material UI",
    "Git/GitHub",
]


const progress = {
    "HTML": 80,
    "CSS/SASS": 80,
    "JavaScript": 90,
    "TypeScript": 85,
    "React": 90,
    "Material UI": 90,
    "Git/GitHub": 90,
}
const skills = Object.keys(progress)


const Skills = () => {
    // const titleAnimation = {
    //     hidden: {
    //         x: -1500,
    //         opacity: 0.2,
    //     },
    //     visible: {
    //         x: 0,
    //         opacity: 1,
    //     },
    // }

    // const skill = skillsTitle.map((i) =>
    //     <Skill key={i} title={i}/>
    // )

    return (

        <div className={`${a.section} ${a.angles} ${a.light}`}>
            <div className={a.angleTop}/>
            <div className={a.sectionInner}>
                <div className={`${style.container} ${s.skillsContainer}`}>
                    <Title title={'skills'} direction={'left'}/>
                    <div className={s.skills}>
                        <Skill title={"HTML"} progress={80} />
                        <Skill title={"CSS/SASS"} progress={80} />
                        <Skill title={"React"} progress={70} />
                        <Skill title={"JavaScript"} progress={80} />
                        <Skill title={"Material UI"} progress={75} />
                        <Skill title={"TypeScript"} progress={85} />
                        <Skill title={"Git/GitHub"}  progress={90}/>

                    </div>
                </div>
            </div>
            <div className={a.angleBottom}/>
        </div>


        /* <motion.div initial='hidden'
                     whileInView='visible'
                     viewport={{ /!*once: true*!/}}>
             <motion.div
                 variants={titleAnimation}
                 transition={{delay: 0.1, duration: 0.3}}
                 className={`${a.section} ${a.angles} ${a.light}`}>
                 <div className={a.angleTop}/>
                 <div className={a.sectionInner}>
                     <div className={`${style.container} ${s.skillsContainer}`}>
                         <Title title={'skills'} direction={'left'}/>
                         <div className={s.skills}>
                             <Skill title={'JS'} description={"Bla bfsdgsgd sgdsgsdhla"}/>
                             <Skill title={'React'} description={"Bla dgsdg dsg sdg sdg bla"}/>
                             <Skill title={'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                             <Skill title={'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                             <Skill title={'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                             <Skill title={'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                             <Skill title={'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                             <Skill title={'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                             <Skill title={'CSS'} description={"Bla bg sg sdgs dg sdgla"}/>
                         </div>
                     </div>
                 </div>
                 <div className={a.angleBottom}/>
             </motion.div>
         </motion.div>
     */
    );
};

export default Skills;