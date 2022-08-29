import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import data from './assets/data.json';
import './App.scss';

const App = () => {
  const parsedData = JSON.parse(JSON.stringify(data));
  console.log(parsedData);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
