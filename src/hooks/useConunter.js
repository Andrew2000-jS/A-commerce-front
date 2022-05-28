import { useState } from 'react'

export default function useConunter() {
  const [count, setCount] = useState(0)

  const handleUp = () => setCount(count + 1)
  const handleDown = () => setCount(count - 1)

  return { count, handleUp, handleDown }
}
