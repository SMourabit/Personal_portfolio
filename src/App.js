import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';


function App() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden" >
    <Header/>
    <Home />
    <About />
    <Services />
    <Portfolio />
    <Contact />



    </div>
  );
}

export default App;
