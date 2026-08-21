import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero">
      <div className="hero-sprites">
        <div className="hero-center">
          <h1 className="hero-title">{t.hero.title}<span className="blink">_</span></h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="cta-group">
            <a href="#projects" className="nes-btn is-warning">{t.hero.viewQuests}</a>
            <a href="#contact"  className="nes-btn is-primary">{t.hero.summonMe}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
