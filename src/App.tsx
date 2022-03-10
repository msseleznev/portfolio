import React from 'react';
import './App.module.css';
import s from './App.module.css'
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Hire from "./hire/Hire";
import Contacts from './contacts/Contacts';
import Footer from "./footer/Footer";


function App () {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
