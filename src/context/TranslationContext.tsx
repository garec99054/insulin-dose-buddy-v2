'use client'

import React, { createContext, useState, useContext, useCallback } from 'react'
import translations from '../translations'

type TranslationContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const TranslationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const changeLanguage = useCallback((lang: string) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }, [])

  const t = useCallback((key: string) => {
    return translations[language as keyof typeof translations][key] || key
  }, [language])

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}