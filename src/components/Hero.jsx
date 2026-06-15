export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-sprites">
        <div className="hero-center">
          <h1 className="hero-title">TOMAS SABELLA<span className="blink">_</span></h1>
          <p className="hero-subtitle">✦ BACKEND DEVELOPER ✦</p>
          <p className="hero-desc">
            Full-stack developer with a focus on backend development, specializing in Python, Java,
            Spring, and microservices in high-demand banking environments. Interested in integrating
            AI into real-world systems and building scalable solutions.
          </p>
          <div className="cta-group">
            <a href="#projects" className="nes-btn is-warning">⚔ VIEW QUESTS</a>
            <a href="#contact"  className="nes-btn is-primary">✦ SUMMON ME</a>
          </div>
        </div>
      </div>
    </section>
  )
}
