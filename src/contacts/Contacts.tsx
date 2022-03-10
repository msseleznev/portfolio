import React from 'react';

import s from './Contacts.module.css'
import style from "../common/styles/Container.module.css";



const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <div className={s.terms}>
                    <button>
                        see
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Contacts;