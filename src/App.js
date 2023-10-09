import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={' '} />
        <Route path="/country" element={' '} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
