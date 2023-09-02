import React from 'react';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';


function App() {
  return (
    <div className="flex flex-col gap-0">
    <Header/>
    <Home />
    <About />
    <Services />
    <Portfolio />



    </div>
  );
}

export default App;
