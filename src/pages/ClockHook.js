import React, { useState, useEffect } from 'react'

export default function ClockHook() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timerId)
  })
  return <div>{date.toLocaleTimeString()}</div>
}
