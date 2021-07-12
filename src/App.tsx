import React from 'react';
import Navbar from './components/Navbar';
import MyAvatar from './components/MyAvatar';
import About from './components/About';
import Skills from './components/Skills';
import Technic from './components/Technic';


const App: React.FC = () =>  {
  return (
    <>
    <section>
    <Navbar/>
    </section>
    <section>
    <MyAvatar />
    </section>
    <section id='about'>
    <About />
    </section>
    <section id='skills'>
    <Skills />
    </section>
    <section id='technic'>
    <Technic />
    </section>
    </>
  );
}

export default App;
