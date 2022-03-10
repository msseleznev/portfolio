import React from 'react';

import s from './Hire.module.css'
import style from "../common/styles/Container.module.css";



const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${style.container} ${s.hireContainer}`}>
                <h2 className={s.title}>Job options</h2>
                <div className={s.terms}>
                    <button>
                        see
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Hire;