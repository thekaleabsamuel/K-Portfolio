import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';
function App() {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Simulating a 3-second delay for loading
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <BrowserRouter>
        {isLoading ? (
          <LoadingScreen />
        ) : (
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
        )}
      </BrowserRouter>
    );
  }
  
  export default App;