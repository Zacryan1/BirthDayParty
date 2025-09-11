import { useState } from 'react'

import InteractiveCandle from '@/components/InteractiveCandle';

export default function InteractiveCandleExample() {
  const [candles, setCandles] = useState([false, false, false])

  const handleCandleClick = (index: number) => {
    const newCandles = [...candles]
    newCandles[index] = true
    setCandles(newCandles)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
      <div className="flex space-x-8">
        {candles.map((isLit, index) => (
          <InteractiveCandle
            key={index}
            isLit={isLit}
            onClick={() => handleCandleClick(index)}
            delay={index * 200}
            disabled={false}
          />
        ))}
      </div>
    </div>
  )
}