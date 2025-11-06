import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import hooks
import planetData from '../data/solarSystemData.json'; // Import our data

function PlanetDetailPage() {
  // 1. Get the 'id' from the URL (e.g., "earth" or "mars")
  const { id } = useParams(); 

  // 2. Find the correct planet in our data
  const planet = planetData.find(p => p.id === id);

  // 3. Handle if no planet is found
  if (!planet) {
    return (
      <div>
        <h2>Planet not found!</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    );
  }

  // 4. Render the planet's details
  return (
    <div>
      {/* A simple "back" link */}
      <Link to="/">&larr; Back to Lab</Link>

      <h1>{planet.name}</h1>
      <p>{planet.bio}</p>

      <ul>
        <li><strong>Mass:</strong> {planet.mass}</li>
        <li><strong>Radius:</strong> {planet.radius}</li>
      </ul>
    </div>
  );
}

export default PlanetDetailPage;