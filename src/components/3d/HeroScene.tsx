'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, ContactShadows, Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// The main center sphere
function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(time / 4) * 0.2
    meshRef.current.rotation.y = Math.sin(time / 4) * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#10b981"
          envMapIntensity={1}
          clearcoat={0.8}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

// Floating geometric financial shapes
function FloatingShapes() {
  const group = useRef<THREE.Group>(null!)
  
  // Mouse parallax effect
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 10, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 10, 0.05)
    group.current.position.y = Math.sin(t / 2) * 0.2
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3, 1, -2]} scale={0.6}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#059669" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[3, -1, -1]} scale={0.5}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#34d399" metalness={0.5} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-2, -2, 1]} scale={0.4}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#10b981" metalness={0.9} roughness={0.2} wireframe />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={2.5} floatIntensity={2}>
        <mesh position={[2, 2, 0]} scale={0.3}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#6ee7b7" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

// Camera rig for mouse interaction
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 1, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 1, 0.05)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]} // Optimize for high DPI screens
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#030712']} />
        
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#059669" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={10} size={4} speed={0.4} opacity={0.2} color="#10b981" />

        <CoreSphere />
        <FloatingShapes />
        <CameraRig />

        <ContactShadows 
          position={[0, -3, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2} 
          far={4.5} 
          color="#10b981"
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
