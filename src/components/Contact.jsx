import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function handleMailClick() {
    navigator.clipboard.writeText('tomassabella@hotmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact">
      <h2 className="section-title" style={{ justifyContent: 'center', textAlign: 'center' }}>CONTACT</h2>
      <div className="nes-container contact-box">
        <p>
          Dost thou seek a valiant developer for thine next great endeavour?<br />
          Dispatch a raven and I shall ride forth post-haste.
        </p>
        <div className="contact-links">
          <a href="https://github.com/toxortcs02"              target="_blank" rel="noopener noreferrer" className="nes-btn">GITHUB</a>
          <a href="https://www.linkedin.com/in/tomas-sabella/" target="_blank" rel="noopener noreferrer" className="nes-btn is-primary">LINKEDIN</a>
          <button onClick={handleMailClick} className="nes-btn is-error">
            {copied ? '✔ COPIADO!' : '✉ MAIL'}
          </button>
        </div>
      </div>
    </section>
  )
}
