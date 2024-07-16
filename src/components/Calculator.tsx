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
  }, [formData])

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

    const { data: user, error: userError } = await supabase.auth.getUser()
    if (userError) {
      console.error('Error getting user:', userError)
      return
    }

    const { data, error } = await supabase
      .from('calculations')
      .insert([
        { 
          user_id: user.user?.id,
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
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="carbsEaten" id="label-carbsEaten">{t("Carbs eaten (g)")}</label>
            <input 
              type="number" 
              id="carbsEaten" 
              name="carbsEaten"
              value={formData.carbsEaten}
              onChange={handleInputChange}
              min="0" 
              step="1" 
              placeholder={t("Enter grams")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="insulinCarbRatio" id="label-insulinCarbRatio">{t("Insulin to carb ratio")}</label>
            <input 
              type="number" 
              id="insulinCarbRatio" 
              name="insulinCarbRatio"
              value={formData.insulinCarbRatio}
              onChange={handleInputChange}
              min="1" 
              step="1" 
              placeholder={t("1 unit : __ g")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="currentBloodSugar" id="label-currentBloodSugar">{t("Current BG (mg/dL)")}</label>
            <input 
              type="number" 
              id="currentBloodSugar" 
              name="currentBloodSugar"
              value={formData.currentBloodSugar}
              onChange={handleInputChange}
              min="0" 
              step="1" 
              placeholder={t("Enter mg/dL")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="targetBloodSugar" id="label-targetBloodSugar">{t("Target BG (mg/dL)")}</label>
            <input 
              type="number" 
              id="targetBloodSugar" 
              name="targetBloodSugar"
              value={formData.targetBloodSugar}
              onChange={handleInputChange}
              min="0" 
              step="1" 
              placeholder={t("Enter mg/dL")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="correctionFactor" id="label-correctionFactor">{t("Correction factor")}</label>
            <input 
              type="number" 
              id="correctionFactor" 
              name="correctionFactor"
              value={formData.correctionFactor}
              onChange={handleInputChange}
              min="1" 
              step="1" 
              placeholder={t("1 unit : __ mg/dL")}
            />
          </div>
        </div>
        <button type="submit" id="calculate-button">{t("Calculate Dose")}</button>
      </form>

      {result && (
        <div id="result" className="show">
          <p>{t("Recommended insulin dose:")}</p>
          <span className="highlight glitter" style={{color: result.recommendedDose <= 5 ? 'green' : result.recommendedDose <= 10 ? 'orange' : 'red'}}>
            {result.recommendedDose} {t("units")}
          </span>
          <p className="actual-value">{t("Actual calculated value:")} {result.actualValue} {t("units")}</p>
          <p>{t("Carb dose:")} {result.carbDose} {t("units")}</p>
          <p>{t("Correction dose:")} {result.correctionDose} {t("units")}</p>
        </div>
      )}
    </div>
  )
}