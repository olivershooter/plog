import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../containers/Home';
import { About } from '../containers/About';
import { Contact } from '../containers/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
