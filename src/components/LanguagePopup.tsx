'use client'

import { useState, useEffect } from 'react'
import { useTranslation, Language } from '../context/TranslationContext'

export default function LanguagePopup() {
  const [show, setShow] = useState(false)
  const { changeLanguage } = useTranslation()

  useEffect(() => {
    const language = localStorage.getItem('language')
    if (!language) {
      setShow(true)
    }
  }, [])

  const selectLanguage = (lang: Language) => {
    changeLanguage(lang)
    localStorage.setItem('language', lang)
    setShow(false)
  }

  if (!show) return null

  return (
    <div id="language-popup" style={{display: 'flex'}}>
      <div className="language-popup-content">
        <h2>Select Your Language / Seleccione su idioma / Chwazi Lang Ou / Chọn ngôn ngữ của bạn</h2>
        <button onClick={() => selectLanguage('en')}>English 🇺🇸</button>
        <button onClick={() => selectLanguage('es')}>Español 🇪🇸</button>
        <button onClick={() => selectLanguage('ht')}>Kreyòl Ayisyen 🇭🇹</button>
        <button onClick={() => selectLanguage('vi')}>Tiếng Việt 🇻🇳</button>
      </div>
    </div>
  )
}