import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound () {
  const navigate = useNavigate()
  const [count, setCount] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)

    setTimeout(() => {
      navigate('/')
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [navigate])

  return (
    <div>
      <h2>404</h2>
      <h2>redirecting... in {count}</h2>
    </div>
  );
}
