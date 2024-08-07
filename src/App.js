import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Third party imports
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  
  useEffect(() => {
    AOS.init({duration: 2000, once: true})
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar / */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
