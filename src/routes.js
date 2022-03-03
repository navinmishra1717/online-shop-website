import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './containers/homepage';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
