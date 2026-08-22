import { useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Nav() {
  const { lang, toggleLang, t } = useLanguage()
  const topRef = useRef(null)
  const barRef = useRef(null)
  const revealRef = useRef(0)
  const lastYRef = useRef(0)
  const [topHeight, setTopHeight] = useState(0)
  const [barHeight, setBarHeight] = useState(0)

  useLayoutEffect(() => {
    function measure() {
      setTopHeight(topRef.current?.offsetHeight || 0)
      setBarHeight(barRef.current?.offsetHeight || 0)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useLayoutEffect(() => {
    if (!topHeight) return

    function applyStyles(reveal) {
      if (topRef.current) topRef.current.style.top = `${reveal - topHeight}px`
      if (barRef.current) barRef.current.style.top = `${reveal}px`
    }

    revealRef.current = window.scrollY <= 0 ? topHeight : Math.min(revealRef.current, topHeight)
    lastYRef.current = window.scrollY
    applyStyles(revealRef.current)

    function onScroll() {
      const y = window.scrollY
      const delta = y - lastYRef.current
      lastYRef.current = y

      let next = revealRef.current - delta
      if (y <= 0) next = topHeight
      next = Math.max(0, Math.min(topHeight, next))

      revealRef.current = next
      applyStyles(next)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [topHeight])

  return (
    <>
      <nav ref={topRef} className="nav-top-fixed">
        <div className="nav-top">
          <span className="nav-logo">⚔ {t.nav.logo}<span className="blink">_</span></span>

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
        </div>
      </nav>

      <div ref={barRef} className="nav-links-bar">
        <ul className="nav-links">
          <li><a href="#skills">{t.nav.skills}</a></li>
          <li><a href="#experience">{t.nav.campaign}</a></li>
          <li><a href="#projects">{t.nav.quests}</a></li>
          <li><a href="#about">{t.nav.lore}</a></li>
          <li><a href="#contact">{t.nav.summon}</a></li>
        </ul>
      </div>

      <div className="nav-spacer" style={{ height: topHeight + barHeight }} />
    </>
  )
}
