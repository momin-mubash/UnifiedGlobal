import React from 'react';
import Navbar from './components/Navbar';
import ArticleCard from './components/ArticleCard';
import DigSection from './components/DigSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar component will be sticky */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digs" element={<Dig />} />
          <Route path="/users" element={<User />} />
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="container">
    <h2>Recent Articles</h2>
    <ArticleCard />
    {/* Render articles from various sources */}
  </div>
);

const Dig = () => (
  <div className="container">
    <h2>Your Digs</h2>
    <DigSection />
    {/* Render digs for a particular user */}
  </div>
);

const User= () => (
  <div className="container">
    <Profile />
    {/* users info */}
  </div>
);

export default App;
