import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-chocolate-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* new */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/login' element={<Login/>} ></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;