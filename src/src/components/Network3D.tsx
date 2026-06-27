"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface Network3DProps {
  colorPrimary: string;
  colorSecondary: string;
}

function NetworkScene({ colorPrimary, colorSecondary }: Network3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const particleGroupRef = useRef<THREE.Group>(null);

  // Define network nodes (Hubs)
  const nodes = useMemo(() => [
    new THREE.Vector3(-3, 0, 0), // Ingestão & RAG
    new THREE.Vector3(0, 0, 0),  // Processamento LLM
    new THREE.Vector3(3, 1.5, 0), // Aplicação Final 1
    new THREE.Vector3(3, -1.5, 0),// Analytics / BI
    // Some background decorative nodes
    new THREE.Vector3(-1.5, 2, -2),
    new THREE.Vector3(1.5, -2, -2),
  ], []);

  // Define connections
  const connections = useMemo(() => [
    [nodes[0], nodes[1]],
    [nodes[1], nodes[2]],
    [nodes[1], nodes[3]],
    [nodes[0], nodes[4]],
    [nodes[1], nodes[5]],
  ], [nodes]);

  // Particles moving along connections
  const particles = useMemo(() => {
    const p = [];
    for(let i=0; i<15; i++) {
        const connIndex = Math.floor(Math.random() * 3); // Main paths only
        p.push({
            conn: connections[connIndex],
            progress: Math.random(),
            speed: 0.005 + Math.random() * 0.01
        });
    }
    return p;
  }, [connections]);

  const particleMeshes = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) {
        // Slow continuous rotation for the entire network
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }

    // Animate particles along lines
    particles.forEach((p, i) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        
        const mesh = particleMeshes.current[i];
        if (mesh) {
            mesh.position.lerpVectors(p.conn[0], p.conn[1], p.progress);
        }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Render connections */}
      {connections.map((c, i) => (
        <Line 
          key={i} 
          points={[c[0], c[1]]} 
          color={i % 2 === 0 ? colorPrimary : colorSecondary} 
          opacity={0.15} 
          transparent 
          lineWidth={2} 
        />
      ))}
      
      {/* Render nodes */}
      {nodes.map((n, i) => (
        <Sphere key={i} position={n} args={[i < 4 ? 0.3 : 0.1, 16, 16]}>
          <meshBasicMaterial 
            color={i < 2 ? colorPrimary : colorSecondary} 
            transparent 
            opacity={i < 4 ? 0.6 : 0.2} 
          />
        </Sphere>
      ))}

      {/* Render moving particles */}
      <group ref={particleGroupRef}>
        {particles.map((p, i) => (
            <Sphere key={`p-${i}`} ref={(el) => {particleMeshes.current[i] = el}} args={[0.08, 8, 8]}>
                <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
            </Sphere>
        ))}
      </group>
    </group>
  );
}

export default function Network3D({ colorPrimary = "#3b82f6", colorSecondary = "#8b5cf6" }: Network3DProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <NetworkScene colorPrimary={colorPrimary} colorSecondary={colorSecondary} />
      </Canvas>
    </div>
  );
}
