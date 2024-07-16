'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from '../context/TranslationContext'

export default function DisclaimerPopup() {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const accepted = localStorage.getItem('disclaimerAccepted')
    if (!accepted) {
      setShow(true)
    }
  }, [])

  const acceptDisclaimer = () => {
    localStorage.setItem('disclaimerAccepted', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div id="disclaimer-popup" style={{display: 'flex'}}>
      <div className="popup-content">
        <h2 id="popup-title">{t("Important Disclaimer")}</h2>
        <p id="popup-text">
          {t("This calculator is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before making changes to your insulin regimen.")}
        </p>
        <button onClick={acceptDisclaimer} id="popup-button">{t("I Understand")}</button>
      </div>
    </div>
  )
}