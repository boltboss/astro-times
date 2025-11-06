import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LabHome from './pages/LabHome.jsx';
import PlanetDetailPage from './pages/PlanetDetailPage.jsx';
import WhatIfPage from './pages/WhatIfPage.jsx'; // 1. Import it

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LabHome />} />
        <Route path="/planet/:id" element={<PlanetDetailPage />} />
        
        {/* 2. Add this new route */}
        <Route path="/what-if/:id" element={<WhatIfPage />} />
        
      </Routes>
    </div>
  );
}

export default App;