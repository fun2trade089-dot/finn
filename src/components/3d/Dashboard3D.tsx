'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function SubtleOrb() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(time / 2) * 0.1
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 32, 32]} scale={1.5}>
        <MeshDistortMaterial
          color="#10b981"
          opacity={0.05}
          transparent
          distort={0.3}
          speed={1}
        />
      </Sphere>
    </Float>
  )
}

export default function Dashboard3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <SubtleOrb />
      </Canvas>
    </div>
  )
}
