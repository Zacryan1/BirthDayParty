
import Balloon from '@/components/Balloon'; 
export default function BalloonExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <Balloon color="blue" initialDelay={0} position="left" />
      <Balloon color="pink" initialDelay={2} position="center-left" />
      <Balloon color="lavender" initialDelay={4} position="center-right" />
      <Balloon color="blue" initialDelay={6} position="right" />
    </div>
  )
}