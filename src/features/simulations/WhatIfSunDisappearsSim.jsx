import React, { useRef } from 'react'; // Removed 'useState' - it's not needed here
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

// 1. ALL THE LOGIC IS MOVED INTO THIS NEW COMPONENT
function SimulationScene({ isSunGone }) {
  
  const earthRef = useRef();
  const moonRef = useRef();
  const tangentRef = useRef({ x: 0, z: 1 });

  useFrame((state, delta) => {
    if (!earthRef.current || !moonRef.current) return;

    const time = state.clock.elapsedTime;
    
    let earthX, earthZ;

    if (!isSunGone) {
      // --- IF SUN EXISTS: Orbit normally ---
      earthX = Math.cos(time * 0.5) * 5;
      earthZ = Math.sin(time * 0.5) * 5;
      earthRef.current.position.set(earthX, 0, earthZ);
      
      tangentRef.current = {
        x: -Math.sin(time * 0.5), 
        z: Math.cos(time * 0.5)
      };
      
    } else {
      // --- IF SUN IS GONE: Fly off in a straight line ---
      const dir = tangentRef.current;
      const speed = 2.5;

      earthRef.current.position.x += dir.x * speed * delta;
      earthRef.current.position.z += dir.z * speed * delta;
      
      earthX = earthRef.current.position.x;
      earthZ = earthRef.current.position.z;
    }

    // --- Moon's orbit (always orbits Earth) ---
    const moonX = earthX + Math.cos(time * 3) * 2;
    const moonZ = earthZ + Math.sin(time * 3) * 2;
    moonRef.current.position.set(moonX, 0, moonZ);
  });

  return (
    <>
      {/* --- THIS IS THE FIX --- */}
      {!isSunGone ? (
        // If Sun exists, use the bright point light
        <>
          <pointLight position={[0, 0, 0]} intensity={300} castShadow /> 
          <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
            <meshBasicMaterial color="yellow" /> 
          </Sphere>
        </>
      ) : (
        // If Sun is gone, add a dim ambient light
        // so we can still see the planets
        <ambientLight intensity={0.2} />
      )}
      
      {/* Earth and Moon */}
      <Sphere ref={earthRef} args={[1, 32, 32]} receiveShadow castShadow>
        <meshStandardMaterial color="#369" />
      </Sphere>
      <Sphere ref={moonRef} args={[0.27, 32, 32]} castShadow>
        <meshStandardMaterial color="grey" />
      </Sphere>

      <OrbitControls />
    </>
  );
}


// The MAIN component
function WhatIfSunDisappearsSim({ isSunGone }) {
  return (
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 25 }}>
      <SimulationScene isSunGone={isSunGone} />
    </Canvas>
  );
}

export default WhatIfSunDisappearsSim;