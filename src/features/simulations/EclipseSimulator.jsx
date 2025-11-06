import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function Earth(props) {
  const earthRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const x = Math.cos(time * 0.5) * 5;
    const z = Math.sin(time * 0.5) * 5;
    earthRef.current.position.set(x, 0, z);
  });
  
  return (
    // 4. Earth must RECEIVE shadows
    <Sphere {...props} ref={earthRef} args={[1, 32, 32]} receiveShadow>
      <meshStandardMaterial color="#369" />
    </Sphere>
  );
}

function Moon(props) {
  const moonRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const earthX = Math.cos(time * 0.5) * 5;
    const earthZ = Math.sin(time * 0.5) * 5;
    const moonX = earthX + Math.cos(time * 3) * 2;
    const moonZ = earthZ + Math.sin(time * 3) * 2;
    moonRef.current.position.set(moonX, 0, moonZ);
  });
  
  return (
    // 3. Moon must CAST shadows
    <Sphere {...props} ref={moonRef} args={[0.27, 32, 32]} castShadow>
      <meshStandardMaterial color="grey" />
    </Sphere>
  );
}

function EclipseSimulator() {
  return (
    <div className="simulation-container">
      {/* 1. Enable shadows on the main canvas */}
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 25 }}>
        
        {/* 2. The Light must CAST shadows */}
        <pointLight position={[0, 0, 0]} intensity={300} castShadow /> 

        <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial color="yellow" /> 
        </Sphere>
        
        <Earth />
        <Moon />

        <OrbitControls /> 
        
      </Canvas>
    </div>
  );
}

export default EclipseSimulator;