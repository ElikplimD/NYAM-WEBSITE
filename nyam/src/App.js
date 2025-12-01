// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutUs';
import EventsPage from './Pages/EventPage';
//import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow:hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {<Route path="/about" element={<AboutPage />} />}
            <Route path="/events" element={<EventsPage />} />
            {/*<Route path="/contact" element={<Contact />} />*/}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;