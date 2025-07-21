import React, { useEffect } from 'react';
import StickyCategoryBar from './components/StickyCategoryBar';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Morec from './components/Morec';
import Request from './components/Request';
import Animals from './components/Animals';
import Anime from './components/Anime';
import Abstract from './components/Abstract';
import Technology from './components/Technology';
import Gaming from './components/Gaming';
import Sport from './components/Sport';
import Space from './components/Space';
import Mountains from './components/Mountains';
import Cars from './components/Cars';
import Scifi from "./components/Scifi";
import City from './components/City';
import Subscription from './components/Subscription';
import Spiderman from './components/Spiderman';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  // Disable right click
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    window.addEventListener('contextmenu', disableRightClick);

    return () => {
      window.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div className="app bg-black">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Morec />
              <Request />
            </>
          }
        />
        <Route path="/subscribe" element={<Subscription />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Sport" element={<Sport />} />
        <Route path="/Space" element={<Space />} />
        <Route path="/nature" element={<Mountains />} />
        <Route path="/automotive" element={<Cars />} />
        <Route path="/futuristic" element={<Scifi />} />
        <Route path="/spiderman" element={<Spiderman />} />
        <Route path="/city" element={<City />} />
      </Routes>
      <StickyCategoryBar />
    </div>
  );
}

export default App;
