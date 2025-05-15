import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import WorkInProgress from './components/WIP/WIP';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/kerrtisy/">
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/recent-work" element={<WorkInProgress/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;