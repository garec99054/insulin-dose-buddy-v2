'use client'

import React, { createContext, useState, useContext, useCallback } from 'react'
import translations from '../translations'

type Language = 'en' | 'es' | 'ht' | 'vi'

type TranslationContextType = {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const TranslationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }, [])

  const t = useCallback((key: string) => {
    return translations[language][key] || key
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