import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const { stats } = t.about

  return (
    <section id="about">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-grid">
        <div className="nes-container" style={{ padding: '28px' }}>
          <p className="about-text">
            {t.about.text.map((paragraph, i) => (
              <span key={i}>
                {paragraph}
                {i < t.about.text.length - 1 && <><br /><br /></>}
              </span>
            ))}
          </p>
        </div>
        <div className="nes-container" style={{ padding: '28px' }}>
          <table className="stat-table">
            <tbody>
              <tr><td>{stats.class}</td>  <td>{stats.classValue}</td></tr>
              <tr><td>{stats.xp}</td>     <td>{stats.xpValue}</td></tr>
              <tr><td>{stats.spells}</td> <td>{stats.spellsValue}</td></tr>
              <tr><td>{stats.guild}</td>  <td>{stats.guildValue}</td></tr>
              <tr><td>{stats.status}</td> <td style={{ color: '#4a8c42' }}>{stats.statusValue}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
