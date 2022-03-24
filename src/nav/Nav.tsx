import { useState } from "react";
import { motion } from "framer-motion";
import s from './Nav.module.scss'

type TabsType = TabsItemType[]
type TabsItemType = {
    name: string
    color: string
}
const tabs: TabsType = [
    { name: "About", color: "#7960dc" },
    { name: "Skills", color: "#7960dc" },
    { name: "Projects", color: "#7960dc" },
    { name: "Contacts", color: "#7960dc" },
];

const duration = 0.3;

export const Nav = () => {
    const [selected, setSelected] = useState(0);
    const [formerColor, setFormerColor] = useState<string> (tabs[0].color);



    return (

            <div className={s.containerStyle}>
                {tabs.map(({ name, color }, i) => (
                    <motion.div
                        className={s.tabStyle}
                        key={i}
                        initial={{
                            color: i === selected ? "#fff" : "#ffffff"
                        }}
                        transition={{ duration }}
                        onTap={() => {
                            setFormerColor(tabs[selected].color);
                            setSelected(i);
                        }}
                    >
                    <span style={{ position: "relative", zIndex: 1 }}>
                        {name}
                    </span>
                        {i === selected && (
                            <motion.div
                                className={s.selectionStyle}
                                layoutId="selected"
                                initial={{ backgroundColor: formerColor }}
                                animate={{ backgroundColor: color }}
                                transition={{ duration }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
    );
};




