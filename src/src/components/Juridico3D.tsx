"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function VaultScene() {
  const outerVaultRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (outerVaultRef.current) {
        outerVaultRef.current.rotation.y = time * 0.1;
        outerVaultRef.current.rotation.x = time * 0.05;
    }
    if (coreRef.current) {
        coreRef.current.rotation.y = -time * 0.5;
        // Pulse the core
        const scale = 1 + Math.sin(time * 2) * 0.1;
        coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Outer Vault Shield */}
      <Sphere ref={outerVaultRef} args={[2.5, 32, 32]}>
        <meshPhysicalMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.15}
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          thickness={1}
          wireframe
        />
      </Sphere>

      {/* Inner Data Core (Secure Data) */}
      <Sphere ref={coreRef} args={[1, 16, 16]}>
        <meshBasicMaterial color="#3b82f6" wireframe />
      </Sphere>

      {/* Orbiting lock/security particles */}
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[i * 2, i * 1.5, 0]}>
            <mesh position={[3, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshBasicMaterial color="#60a5fa" />
            </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Juridico3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <VaultScene />
      </Canvas>
    </div>
  );
}
