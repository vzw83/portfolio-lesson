import './App.css';
// import styled from 'styled-components';
import {Header} from "./layaut/header/Header";
import {Main} from "./layaut/sections/main/Main";
import {Skills} from "./layaut/sections/skills/Skills";
import {Works} from "./layaut/sections/works/Works";
import {Testimony} from "./layaut/sections/testimony/Testimony";
import {Contacts} from "./layaut/sections/contacts/Contacts";
import {Freelance} from "./layaut/sections/freelance/Freelance";
import {Footer} from "./layaut/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Freelance/>
            <Footer/>
        </div>
    );
}

export default App;

