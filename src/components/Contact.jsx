import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  function handleMailClick() {
    navigator.clipboard.writeText('tomassabella@hotmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact">
      <h2 className="section-title" style={{ justifyContent: 'center', textAlign: 'center' }}>{t.contact.title}</h2>
      <div className="nes-container contact-box">
        <p>{t.contact.text}</p>
        <div className="contact-links">
          <a href="https://github.com/toxortcs02"              target="_blank" rel="noopener noreferrer" className="nes-btn">{t.contact.github}</a>
          <a href="https://www.linkedin.com/in/tomas-sabella/" target="_blank" rel="noopener noreferrer" className="nes-btn is-primary">{t.contact.linkedin}</a>
          <button onClick={handleMailClick} className="nes-btn is-error">
            {copied ? t.contact.copied : t.contact.mail}
          </button>
        </div>
      </div>
    </section>
  )
}
