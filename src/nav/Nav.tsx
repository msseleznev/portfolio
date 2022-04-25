import {useState} from "react";
import {motion} from "framer-motion";
import s from './Nav.module.scss';
import { Link } from "react-scroll";



type TabsType = TabsItemType[]
type TabsItemType = {
    name: string
    color: string
    id: string
}
const tabs: TabsType = [
    {name: "About", color: "rgb(129,196,164)", id: "about",},
    {name: "Skills", color: "rgb(129,196,164)", id: "skills",},
    {name: "Projects", color: "rgb(129,196,164)", id: "projects",},
    {name: "Contacts", color: "rgb(129,196,164)", id: "contacts",},
];

const duration = 0.3;

export const Nav = () => {
    const [selected, setSelected] = useState(0);
    const [formerColor, setFormerColor] = useState<string>(tabs[0].color);


    return (
        <div className={s.containerStyle}>
            {tabs.map(({name, color, id}, i) => (
                    <motion.div
                              className={s.tabStyle}
                              key={i}
                              initial={{
                                  color: i === selected ? "#fff" : "#ffffff"
                              }}
                              transition={{duration}}
                    >
                    <span style={{position: "relative", zIndex: 1}}>
                        <Link to={id}
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              onClick = {() => {
                                  setFormerColor(tabs[selected].color);
                                  setSelected(i)
                              }}
                              offset={-50}
                              duration={700}>{name}</Link>
                    </span>

                        {i === selected && (
                            <motion.div
                                className={s.selectionStyle}
                                layoutId="selected"
                                initial={{backgroundColor: formerColor}}
                                animate={{backgroundColor: color}}
                                transition={{duration}}
                            />
                        )}
                    </motion.div>
                )
            )}
        </div>
    );
};





