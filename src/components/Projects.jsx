import { projects } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects">
      <h2 className="section-title">{t.projectsTitle}</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.id} className="nes-container project-card">
            <span className="project-badge">{t.projects[p.id].tag}</span>
            <h3 className="project-title">{t.projects[p.id].title}</h3>
            <h3 className="project-title">{p.stack}</h3>
            <p className="project-desc">{t.projects[p.id].desc}</p>
            <div className="project-links">
              <a href={p.demo} target="_blank" rel="noopener noreferrer"
                 className="nes-btn is-warning" style={{ fontSize: '9px', padding: '8px 12px' }}>
                ▶ DEMO
              </a>
              <a href={p.code} target="_blank" rel="noopener noreferrer"
                 className="nes-btn" style={{ fontSize: '9px', padding: '8px 12px' }}>
                {'{ CODE }'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
