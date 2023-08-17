import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../containers/Home';
import { About } from '../containers/About';
import { MyPage } from '../containers/MyPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default Router;
