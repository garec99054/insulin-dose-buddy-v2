'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useTranslation } from '../context/TranslationContext'

export default function Calculator() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    carbsEaten: '',
    insulinCarbRatio: '',
    currentBloodSugar: '',
    targetBloodSugar: '',
    correctionFactor: ''
  })
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    Object.keys(formData).forEach(key => {
      const savedValue = localStorage.getItem(key)
      if (savedValue) {
        setFormData(prev => ({ ...prev, [key]: savedValue }))
      }
    })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    localStorage.setItem(name, value)
  }

  const calculateDose = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const values = Object.keys(formData).reduce((acc: any, key) => {
      acc[key] = parseFloat(formData[key as keyof typeof formData]) || 0
      return acc
    }, {})

    const insulinForCarbs = values.carbsEaten / values.insulinCarbRatio
    const correctionDose = Math.max(0, (values.currentBloodSugar - values.targetBloodSugar) / values.correctionFactor)

    const totalInsulin = insulinForCarbs + correctionDose
    const roundedInsulin = Math.round(totalInsulin * 10) / 10

    const result = {
      recommendedDose: roundedInsulin,
      actualValue: totalInsulin.toFixed(2),
      carbDose: insulinForCarbs.toFixed(2),
      correctionDose: correctionDose.toFixed(2)
    }

    setResult(result)

    const { data, error } = await supabase
      .from('calculations')
      .insert([
        { 
          user_id: supabase.auth.user()?.id,
          ...values,
          ...result
        }
      ])

    if (error) console.error('Error saving calculation:', error)
  }

  return (
    <div className="container">
      <h1 id="title">{t("The Dose Buddy 💉 v2")}</h1>
      <h2 id="subtitle">{t("An insulin dosage calculator")}</h2>
      <form id="insulinCalculator" onSubmit={calculateDose}>
        {/* Form inputs */}
        <button type="submit" id="calculate-button">{t("Calculate Dose")}</button>
      </form>

      {result && (
        <div id="result" className="show">
          {/* Result display */}
        </div>
      )}
    </div>
  )
}