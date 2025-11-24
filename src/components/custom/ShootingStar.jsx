import { useEffect, useState, useRef } from 'react'
import './css/shooting_star.css'

export default function ShootingStar() {
  const [stars, setStars] = useState([])
  const intervalIdRef = useRef(null)
  const maxStars = 10

  const generateStar = () => ({
    id: Math.random(),
    top: `${Math.random() * 50 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    size: `${Math.random() * 2 + 2}px`,
    duration: `${Math.random() * 3 + 1.5}s`,
    delay: `${Math.random() * 4}s`,
    rotation: `${Math.random() * 90 - 30}deg`,
  })

  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearInterval(intervalIdRef.current)
      setStars([])
    } else {
      intervalIdRef.current = setInterval(() => {
        setStars((prevStars) => {
          const newStar = generateStar()
          const updatedStars = [...prevStars, newStar]
          return updatedStars.length > maxStars ? updatedStars.slice(1) : updatedStars
        })
      }, 1500)
    }
  }

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setStars((prevStars) => {
        const newStar = generateStar()
        const updatedStars = [...prevStars, newStar]
        return updatedStars.length > maxStars ? updatedStars.slice(1) : updatedStars
      })
    }, 1500)

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearInterval(intervalIdRef.current)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            transform: `rotate(${star.rotation})`,
          }}
        />
      ))}
    </>
  )
}
