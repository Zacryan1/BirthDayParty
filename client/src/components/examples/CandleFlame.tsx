import CandleFlame from '@/components/CandleFlame';
export default function CandleFlameExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black flex items-center justify-center space-x-8">
      <div className="text-center">
        <p className="text-white mb-4">Lit Candle</p>
        <CandleFlame isLit={true} />
      </div>
      <div className="text-center">
        <p className="text-white mb-4">Unlit Candle</p>
        <CandleFlame isLit={false} />
      </div>
    </div>
  )
}