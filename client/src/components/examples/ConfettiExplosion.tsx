import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ConfettiExplosion from '@/components/ConfettiExplosion';

export default function ConfettiExplosionExample() {
  const [showConfetti, setShowConfetti] = useState(false)

  const triggerConfetti = () => {
    setShowConfetti(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
      <ConfettiExplosion 
        isActive={showConfetti} 
        onComplete={() => setShowConfetti(false)} 
      />
      
      <Button
        size="lg"
        className="text-xl px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-full hover-elevate shadow-xl"
        onClick={triggerConfetti}
        disabled={showConfetti}
      >
        {showConfetti ? 'Confetti Active!' : '🎉 Trigger Confetti!'}
      </Button>
    </div>
  )
}