"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FunnelScene() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particles in a funnel/tornado shape
  const particles = useMemo(() => {
    const numParticles = 2000;
    const positions = new Float32Array(numParticles * 3);
    
    for (let i = 0; i < numParticles; i++) {
        const t = Math.random(); // Height from 0 to 1
        const angle = Math.random() * Math.PI * 2;
        
        // Radius decreases as we go down (Funnel shape)
        const radius = (1 - t) * 3 + 0.2; 
        
        const x = Math.cos(angle) * radius;
        const y = (t - 0.5) * 6; // Y ranges from -3 to 3
        const z = Math.sin(angle) * radius;
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
        // Rotate the funnel quickly
        pointsRef.current.rotation.y -= delta * 1.5;
        // Bobbing motion
        pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group rotation={[0.2, 0, 0]}>
      <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981" // Green
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function B2B3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <FunnelScene />
      </Canvas>
    </div>
  );
}
