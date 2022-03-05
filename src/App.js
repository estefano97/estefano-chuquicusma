import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
