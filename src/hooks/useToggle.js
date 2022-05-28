import { useState } from 'react'

export default function useToggle(initialState = false) {
  const [toggle, setToggle] = useState(initialState)

  const change = () => setToggle(!toggle)

  return [toggle, change, setToggle]
}
