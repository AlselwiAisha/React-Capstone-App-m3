import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
