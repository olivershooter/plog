import React from 'react';
import { Home } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import CopyrightBanner from 'components/CopyrightBanner';
import Navbar from 'components/Navbar';
import About from 'containers/About';
import MyPage from 'containers/MyPage';

const Root = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
    <CopyrightBanner />
    </>
  );
};

export default Root;
