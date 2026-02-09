import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/layouts/Menu';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Menu>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Menu>
  );
}

export default App;
