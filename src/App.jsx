import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return <p className="divider">✦ · · · ⚔ · · · ✦</p>
}

export default function App() {
  return (
    <>
      <Nav />
      <div id="app">
        <Hero />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <About />
        <Divider />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
