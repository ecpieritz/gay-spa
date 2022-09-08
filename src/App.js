import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Presentation from './Components/Presentation';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Presentation />
      <About />
    </div>
  );
}

export default App;
