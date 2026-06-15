export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">📖 THE LORE</h2>
      <div className="about-grid">
        <div className="nes-container" style={{ padding: '28px' }}>
          <p className="about-text">
            In the days leading up to deadlines, a young apprentice discovered the arcane arts
            of programming through pixelated worlds and oriental melodies.<br /><br />
            Now, having become a seasoned knight of code, he wields Java and Python like two deadly
            daggers and deploys containers with the precision of a siege commander.<br /><br />
            When he isn't defending the kingdom from technical debt, he can be found
            illuminating manuscripts (writing documentation) or training young squires.
          </p>
        </div>
        <div className="nes-container" style={{ padding: '28px' }}>
          <table className="stat-table">
            <tbody>
              <tr><td>⚔ CLASS</td>   <td>Full-Stack developer</td></tr>
              <tr><td>XP</td>        <td>2 Años</td></tr>
              <tr><td>🔮 SPELLS</td> <td>JAVA/PYTHON/C#</td></tr>
              <tr><td>🛡 GREMIO</td> <td>Developers</td></tr>
              <tr><td>✦ STATUS</td>  <td style={{ color: '#4a8c42' }}>SEEKING FOR NEW ADVENTURES ✔</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
