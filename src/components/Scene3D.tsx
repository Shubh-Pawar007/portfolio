import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Sculpture({ onSlow }: { onSlow: () => void }) {
  const group=useRef<THREE.Group>(null)
  const frames=useRef({time:0,count:0,done:false})
  useFrame((state,delta)=>{
    if(group.current){group.current.rotation.y=state.clock.elapsedTime*.12;group.current.rotation.x=Math.sin(state.clock.elapsedTime*.2)*.15}
    const f=frames.current
    if(!f.done && state.clock.elapsedTime>1){f.time+=delta;f.count++;if(f.time>2){f.done=true;if(f.count/f.time<24)onSlow()}}
  })
  return <group ref={group}>
    <mesh rotation={[.4,.2,.15]}><icosahedronGeometry args={[1.65,1]}/><meshStandardMaterial color="#4f46c5" metalness={.45} roughness={.38} flatShading/></mesh>
    <mesh position={[3,-1.3,-1]} rotation={[.5,.3,.4]}><torusKnotGeometry args={[.5,.12,48,6]}/><meshStandardMaterial color="#22d3ee" wireframe/></mesh>
    <mesh position={[-3,1.6,-1]}><octahedronGeometry args={[.5]}/><meshStandardMaterial color="#a5b4fc" wireframe/></mesh>
  </group>
}
export default function Scene3D({onSlow}:{onSlow:()=>void}) {
 return <Canvas dpr={1} camera={{position:[0,0,6],fov:55}} gl={{antialias:false,alpha:true,powerPreference:'low-power'}}>
  <ambientLight intensity={1.1}/><directionalLight position={[4,4,4]} intensity={3} color="#a5b4fc"/><directionalLight position={[-4,-2,2]} intensity={2} color="#22d3ee"/>
  <Sculpture onSlow={onSlow}/>
 </Canvas>
                                   }
