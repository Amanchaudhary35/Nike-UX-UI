import React from 'react';
import '../src/App.css'
import Navigation from './components/Navigation/navigation';
import Hero from './components/Herosection/Hero';


function App(props) {
  return (
    <div>
      <Navigation/> 
      <Hero/>
    </div>
  );
}

export default App;