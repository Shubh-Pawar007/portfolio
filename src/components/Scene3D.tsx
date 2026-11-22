import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const group = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (!group.current) return
    const { x, y } = state.pointer
    group.current.rotation.y += delta * 0.15
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y * 0.25, 0.05)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, x * 0.15, 0.05)
  })
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.7, 3]} />
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#312e81"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.9}
            distort={0.35}
            speed={2.2}
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
        <mesh position={[3.4, -1.4, -1]}>
          <torusKnotGeometry args={[0.5, 0.15, 128, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#0e7490" emissiveIntensity={0.9} roughness={0.2} metalness={0.8} wireframe />
        </mesh>
      </Float>
      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[-3.6, 1.7, -1.5]}>
          <octahedronGeometry args={[0.55]} />
          <meshStandardMaterial color="#a5b4fc" emissive="#4338ca" emissiveIntensity={0.7} roughness={0.25} metalness={0.7} wireframe />
        </mesh>
      </Float>
    </group>
  )
}

export default function Scene3D() {
  const small = useMemo(() => typeof window !== 'undefined' && window.innerWidth < 768, [])
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 4, 4]} intensity={70} color="#818cf8" />
      <pointLight position={[-6, -3, 3]} intensity={45} color="#22d3ee" />
      <Sparkles count={small ? 60 : 160} scale={[14, 9, 6]} size={2.2} speed={0.35} opacity={0.7} color="#93c5fd" />
      <Core />
    </Canvas>
  )
}
