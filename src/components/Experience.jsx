import { experience } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience">
      <h2 className="section-title">{t.experienceTitle}</h2>
      <div className="experience-list">
        {experience.map(job => (
          <div key={job.id} className="nes-container experience-card">
            <div className="experience-header">
              <div className="experience-heading">
                <span className="experience-icon">🛡</span>
                <div>
                  <h3 className="experience-title">{t.experience[job.id].title}</h3>
                  <p className="experience-company">{t.experience[job.id].role} <span className="experience-at">@</span> {job.company}</p>
                </div>
              </div>
              <div className="experience-meta">
                <span className="experience-status">
                  <span className="status-dot" /> {t.experience[job.id].status}
                </span>
                <span className="experience-period">{job.period}</span>
              </div>
            </div>
            <p className="experience-stack">{job.stack}</p>
            <ul className="experience-bullets">
              {t.experience[job.id].bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
