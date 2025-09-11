
import Cakes from '@/components/Cakes'
export default function CakeExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
      <Cakes candlesLit={true} />
    </div>
  )
}