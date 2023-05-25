import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Chat } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  )
}

export default App;