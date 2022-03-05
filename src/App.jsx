import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Testemunhas from './components/testemunhas/Testemunhas';

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contacts />
    <Footer />
    <Testemunhas />
    </>
  )
}

export default App;
