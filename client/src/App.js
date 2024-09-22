import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Example: Fetch user preferences (e.g., language) from localStorage or API
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Save the preference
  };

  return (
    <Router>
      <div className="App">
        <Navbar changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/article/:id" element={<ArticlePage language={language} />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
