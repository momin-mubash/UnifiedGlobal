import React from 'react';
import Navbar from './components/Navbar';
import ArticleCard from './components/ArticleCard';
import DigSection from './components/DigSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar component will be sticky */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digs" element={<DigSection />} />
          {/* Add other routes as needed */}
        </Routes>
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

export default App;
