import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';

function App() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Navbar />
      <div >
        <Hero />
        <Aboutus/>
      </div>
    </div>
  );
}

export default App;
