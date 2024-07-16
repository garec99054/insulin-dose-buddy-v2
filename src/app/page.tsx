'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import Calculator from '../components/Calculator'
import DarkMode from '../components/DarkMode'
import Disclaimer from '../components/Disclaimer'
import DisclaimerPopup from '../components/DisclaimerPopup'
import LanguagePopup from '../components/LanguagePopup'
import LanguageSelector from '../components/LanguageSelector'
import Auth from '../components/Auth'

export default function Home() {
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

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