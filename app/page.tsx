'use client'
import { useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState<number>(0)

  const handlePlus = () => {
    setCounter((prev) => prev + 1)
  }
  const handleMinus = () => {
    setCounter((prev) => prev - 1)
  }

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1>Counter</h1>
      <div data-cy='counter'>{counter}</div>
      <div className='flex gap-2'>
        <button data-cy='plus-button' onClick={handlePlus}>
          +
        </button>
        <button data-cy='minus-button' onClick={handleMinus}>
          -
        </button>
      </div>
    </main>
  )
}
