import { skillCategories } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">⚔ SKILLS OF THE REALM</h2>
      <div className="skills-categories">
        {skillCategories.map(cat => (
          <div key={cat.category} className="nes-container skill-category">
            <h3 className="skill-category-title">
              {cat.icon} {cat.category}
            </h3>
            <div className="skill-list">
              {[...cat.skills].sort((a, b) => b.level - a.level).map(s => (
                <div key={s.name} className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <progress className={`nes-progress ${cat.color}`} value={s.level} max="100" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
