
import AnimatedText from '@/components/AnimatedText';
export default function AnimatedTextExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black flex items-center justify-center space-y-8 flex-col">
      <div className="text-4xl text-white">
        <AnimatedText text="Regular Text Animation" isCelebrating={true} />
      </div>
      
      <div className="text-5xl font-bold">
        <AnimatedText text="Rainbow Birthday Text!" isRainbow={true} />
      </div>
      
      <div className="text-3xl text-white">
        <AnimatedText text="Both Effects Combined!" isRainbow={true} isCelebrating={true} />
      </div>
    </div>
  )
}