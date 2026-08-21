import { useLanguage } from '../i18n/LanguageContext'

export default function Nav() {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <nav>
      <span className="nav-logo">⚔ {t.nav.logo}<span className="blink">_</span></span>
      <ul className="nav-links">
        <li><a href="#skills">{t.nav.skills}</a></li>
        <li><a href="#projects">{t.nav.quests}</a></li>
        <li><a href="#about">{t.nav.lore}</a></li>
        <li><a href="#contact">{t.nav.summon}</a></li>
        <li>
          <button
            onClick={toggleLang}
            className="lang-switch"
            role="switch"
            aria-checked={lang === 'en'}
            aria-label="Toggle language between Spanish and English"
          >
            <span className={`lang-switch-option ${lang === 'es' ? 'is-active' : ''}`}>ES</span>
            <span className="lang-switch-track">
              <span className={`lang-switch-thumb ${lang === 'en' ? 'is-en' : ''}`} />
            </span>
            <span className={`lang-switch-option ${lang === 'en' ? 'is-active' : ''}`}>EN</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
