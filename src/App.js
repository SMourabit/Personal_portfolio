import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';


function App() {
  return (
    <div className="App">
    <Header/>
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Contact />

    </div>
  );
}

export default App;
