import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from './SignIn';
import Join from './Join';

export default function index() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/join' element={<Join />} />
    </Routes>
  );
}
