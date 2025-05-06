import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import WorkInProgress from './components/WIP/WIP';
import Shop from './components/Shop/Shop';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/recent-work" element={<WorkInProgress/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;