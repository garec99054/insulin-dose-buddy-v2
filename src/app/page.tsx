'use client'

import { useState, useEffect } from 'react'
import Calculator from '../components/Calculator'
import DarkMode from '../components/DarkMode'
import Disclaimer from '../components/Disclaimer'
import DisclaimerPopup from '../components/DisclaimerPopup'
import LanguagePopup from '../components/LanguagePopup'
import LanguageSelector from '../components/LanguageSelector'
import Auth from '../components/Auth'

export default function Home() {
  const [session, setSession] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const initializeSupabase = async () => {
      const { supabase } = await import('../lib/supabase')
      const { data } = await supabase.auth.getSession()
      setSession(data.session)

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }

    initializeSupabase()
  }, [])

  if (!isClient) {
    return null // or a loading indicator
  }

  return (
    <main>
      <DarkMode />
      <LanguageSelector />
      <Disclaimer />
      <DisclaimerPopup />
      <LanguagePopup />
      {!session ? <Auth /> : <Calculator />}
    </main>
  )
}