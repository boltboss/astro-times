import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import WhatIfSunDisappearsSim from '../features/simulations/WhatIfSunDisappearsSim.jsx';

function WhatIfPage() {
  const { id } = useParams();
  const [isSunGone, setIsSunGone] = useState(false);

  const scenario = {
    id: "sun-disappears",
    name: "What if the Sun disappeared?",
    description: "The Earth is in a stable orbit. Click the button to see what happens when the Sun's gravity vanishes."
  };

  return (
    <div>
      <Link to="/">&larr; Back to Lab</Link>
      <h2>{scenario.name}</h2>
      <p>{scenario.description}</p>
      
      <div className="simulation-container">
        {/*
          --- THIS IS THE KEY ---
          By changing the 'key' prop, we force React to
          destroy the old simulation and create a new one.
          This fully resets the animation clock.
        */}
        <WhatIfSunDisappearsSim 
          isSunGone={isSunGone} 
          key={isSunGone ? 'gone' : 'present'} 
        />
      </div>

      {/* --- NEW BUTTON CONTAINER --- */}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        
        <button 
          style={{ padding: '0.5rem 1rem' }}
          onClick={() => setIsSunGone(true)}
          // Disable the button if the sun is already gone
          disabled={isSunGone} 
        >
          Make the Sun Disappear
        </button>
        
        {/* --- NEW RESET BUTTON --- */}
        <button 
          style={{ padding: '0.5rem 1rem' }}
          onClick={() => setIsSunGone(false)}
          // Disable the button if the simulation is already reset
          disabled={!isSunGone} 
        >
          Reset Simulation
        </button>
      </div>
    </div>
  );
}

export default WhatIfPage;