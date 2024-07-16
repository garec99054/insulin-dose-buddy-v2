'use client'

import { useState, useEffect } from 'react'

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedMode)
    if (savedMode) document.body.classList.add('dark-mode')
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('darkMode', (!darkMode).toString())
  }

  return (
    <button 
      className="control-button dark-mode-toggle" 
      onClick={toggleDarkMode} 
      aria-label="Toggle dark mode"
    >
      🌓
    </button>
  )
}