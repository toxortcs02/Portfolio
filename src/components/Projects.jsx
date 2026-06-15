import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">📜 THE QUEST BOARD</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.title} className="nes-container project-card">
            <span className="project-badge">{p.tag}</span>
            <h3 className="project-title">{p.title}</h3>
            <h3 className="project-title">{p.stack}</h3>
            <p className="project-desc">{p.desc}</p>
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
