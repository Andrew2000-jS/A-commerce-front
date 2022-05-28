import { useState, useEffect } from 'react'

export default function useScrollUp() {
  const [top, setTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTop(true)
      } else {
        setTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return { top, scrollUp }
}
