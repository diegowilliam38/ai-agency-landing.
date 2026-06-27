"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function SynapseScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create random nodes for the brain/synapse
  const nodes = useMemo(() => {
    const n = [];
    for (let i = 0; i < 30; i++) {
        n.push(new THREE.Vector3(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 2
        ));
    }
    return n;
  }, []);

  // Create connections based on distance
  const connections = useMemo(() => {
    const conn = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (nodes[i].distanceTo(nodes[j]) < 2.5) {
                conn.push([nodes[i], nodes[j]]);
            }
        }
    }
    return conn;
  }, [nodes]);

  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
    
    // Randomly flash nodes to simulate learning/synapses firing
    if (Math.random() > 0.9 && nodeRefs.current.length > 0) {
        const idx = Math.floor(Math.random() * nodeRefs.current.length);
        const mesh = nodeRefs.current[idx];
        if (mesh) {
            (mesh.material as THREE.MeshBasicMaterial).opacity = 1;
            (mesh.material as THREE.MeshBasicMaterial).color.setHex(0xd8b4fe); // Lighter purple
        }
    }
    
    // Decay opacity/color back to base
    nodeRefs.current.forEach((mesh) => {
        if (mesh) {
            const mat = mesh.material as THREE.MeshBasicMaterial;
            mat.opacity = THREE.MathUtils.lerp(mat.opacity, 0.3, 0.1);
            if (mat.opacity < 0.4) {
                mat.color.setHex(0x8b5cf6); // Base purple
            }
        }
    });
  });

  return (
    <group ref={groupRef}>
      {connections.map((c, i) => (
        <Line 
          key={i} 
          points={[c[0], c[1]]} 
          color="#8b5cf6" 
          opacity={0.1} 
          transparent 
          lineWidth={1} 
        />
      ))}
      
      {nodes.map((n, i) => (
        <Sphere key={i} ref={(el) => {nodeRefs.current[i] = el}} position={n} args={[0.08, 8, 8]}>
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
        </Sphere>
      ))}
    </group>
  );
}

export default function Edu3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <SynapseScene />
      </Canvas>
    </div>
  );
}
