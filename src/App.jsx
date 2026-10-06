import About from "./components/About"
import Activities from "./components/Activities"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Publications from "./components/Publications"
import Research from "./components/Research"
import Skills from "./components/Skills"

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090f]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Publications />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
