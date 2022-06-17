import React, { useEffect, useState, Suspense, lazy } from 'react';

import Home from './components';
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, } from "react-router-dom";
import Navbar from './components/common/navbar';
const ImageGalleryComponentOne = React.lazy(() => import('./components/image-gallery/imageGalleryComponentOne'));
const ImageGalleryComponentTwo = React.lazy(() => import('./components/image-gallery/imageGalleryComponentTwo'));

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<ImageGalleryComponentOne/>} />
          <Route path="/gallery1" element={<ImageGalleryComponentOne />} />
          <Route path="/gallery2" element={<ImageGalleryComponentTwo />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
