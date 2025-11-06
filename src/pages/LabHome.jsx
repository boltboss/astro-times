import React from 'react';
import { Link } from 'react-router-dom';
import planetData from '../data/solarSystemData.json';
import whatIfData from '../data/whatIfData.json'; // 1. Import new data
import EclipseSimulator from '../features/simulations/EclipseSimulator.jsx';

function LabHome() {
  return (
    <div>
      <h2>P0: The Interactive Lab</h2>
      <p>Welcome. Select a topic to explore.</p>
      
      <h3>Eclipse Simulator</h3>
      <EclipseSimulator />
      
      {/* --- ADD THIS NEW SECTION --- */}
      <h3 style={{ marginTop: '2rem' }}>"What If" Scenarios</h3>
      <div className="card-container">
        {whatIfData.map(scenario => (
          // 4. We link to a new "/what-if/" route
          <Link to={`/what-if/${scenario.id}`} key={scenario.id} className="card-link">
            <div className="card">
              <h3>{scenario.name}</h3>
              <p>{scenario.bio}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* --- END OF NEW SECTION --- */}

      <h3 style={{ marginTop: '2rem' }}>Astro-pedia</h3>
      <div className="card-container">
        {planetData.map(planet => (
          <Link to={`/planet/${planet.id}`} key={planet.id} className="card-link">
            <div className="card">
              <h3>{planet.name}</h3>
              <p>{planet.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LabHome;