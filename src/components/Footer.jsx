import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <p>{t.footer.line1}</p>
      <p>{t.footer.line2}<span className="blink">_</span></p>
    </footer>
  )
}
