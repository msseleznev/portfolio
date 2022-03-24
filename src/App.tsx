import React from 'react';
import './App.module.css';
import s from './App.module.css'
import Header from "./header/Header";
import {About} from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Hire from "./hire/Hire";
import Contacts from './contacts/Contacts';
import Footer from "./footer/Footer";


function App () {
    return (
        <div className={`${s.wrapper} ${s.back}`}>
            <Header/>
           {/* <Main/>*/}
            <About/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
