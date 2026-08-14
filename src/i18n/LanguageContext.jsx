import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLang() {
  const stored = localStorage.getItem('lang')
  if (stored === 'en' || stored === 'es') return stored
  return 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  function setLanguage(next) {
    setLang(next)
    localStorage.setItem('lang', next)
  }

  function toggleLang() {
    setLanguage(lang === 'en' ? 'es' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
