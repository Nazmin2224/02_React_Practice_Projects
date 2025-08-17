import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
//port MyProfile from './Components/MyProfile';
import Events from './Components/Events';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Footer from './Components/Footer';
import bgImage from './assets/hue-1.jpg';

const App = () => {
  return (
    <Router>
      
      <div
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          fontFamily: 'Segoe UI, sans-serif'
        }}
      >
        <NavigationBar />
        <main className="container mt-4 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/events" element={<Events />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
