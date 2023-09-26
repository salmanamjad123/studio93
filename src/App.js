
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';

function App() {
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
