import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  React.useEffect(() => {
    const h1 = document.querySelector('.h1');
    gsap.from(h1, { duration: 2, opacity: 0, x: 500, delay: 1 });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;