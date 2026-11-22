import { Component, Suspense, lazy, useEffect, useState, type ReactNode } from 'react'
const Scene3D = lazy(() => import('./Scene3D'))
function GradientFallback() {
  return <div className="static-scene absolute inset-0 -z-10 overflow-hidden" aria-hidden="true"><div className="static-orb"/><div className="static-orbit"/><div className="static-orbit second"/></div>
}
class SceneBoundary extends Component<{children: ReactNode},{failed:boolean}> {
  state={failed:false}
  static getDerivedStateFromError(){return {failed:true}}
  render(){return this.state.failed ? <GradientFallback/> : this.props.children}
}
export default function Hero3D() {
  const [ok,setOk]=useState(false)
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)')
    const narrow=window.matchMedia('(max-width: 767px)')
    const update=()=>{
      if(media.matches || narrow.matches){setOk(false);return}
      try{const c=document.createElement('canvas');setOk(!!c.getContext('webgl2'))}catch{setOk(false)}
    }
    update();media.addEventListener('change',update);narrow.addEventListener('change',update)
    return ()=>{media.removeEventListener('change',update);narrow.removeEventListener('change',update)}
  },[])
  if(!ok)return <GradientFallback/>
  return <div className="absolute inset-0 -z-10" aria-hidden="true"><SceneBoundary><Suspense fallback={<GradientFallback/>}><Scene3D onSlow={()=>setOk(false)}/></Suspense></SceneBoundary></div>
}
