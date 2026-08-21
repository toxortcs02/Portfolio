import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">🏰 THE CAMPAIGN LOG</h2>
      <div className="experience-list">
        {experience.map(job => (
          <div key={job.title} className="nes-container experience-card">
            <div className="experience-header">
              <div className="experience-heading">
                <span className="experience-icon">🛡</span>
                <div>
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-company">{job.role} <span className="experience-at">@</span> {job.company}</p>
                </div>
              </div>
              <div className="experience-meta">
                <span className="experience-status">
                  <span className="status-dot" /> {job.status}
                </span>
                <span className="experience-period">{job.period}</span>
              </div>
            </div>
            <p className="experience-stack">{job.stack}</p>
            <ul className="experience-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
