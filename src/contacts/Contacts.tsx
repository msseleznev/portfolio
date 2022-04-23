import React from 'react';
import s from './Contacts.module.scss'
import style from "../common/styles/Container.module.css";
import Title from "../common/components/titile/Title";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <Title title={'Contacts'} direction={'right'} dark/>
                <form>
                    <input type="text" placeholder='Name' name="user_name"/>
                    <input type="email" placeholder="Enter email" name="user_email"/>
                    <textarea placeholder="Your Message"/>
                </form>
                <div className={s.terms}>
                    <input className={s.button} type="submit" id="submit" value="SUBMIT"/>
                </div>


            </div>
        </div>
    );
};

export default Contacts;