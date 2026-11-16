import AnimationPauseManager from "./components/AnimationPauseManager"
import About from "./components/About"
import BackgroundGlow from "./components/BackgroundGlow"
import CursorGlow from "./components/CursorGlow"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import DeferredSection from "./components/DeferredSection"
import ScrollProgress from "./components/ScrollProgress"

export default function App() {
  return (
    <div className="relative isolate bg-[#07090f]">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <AnimationPauseManager />
      <BackgroundGlow />
      <CursorGlow />
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Hero />
          <DeferredSection loader={() => import("./components/About")} />
          <DeferredSection loader={() => import("./components/Skills")} />
          <DeferredSection loader={() => import("./components/Projects")} />
          <DeferredSection loader={() => import("./components/Research")} />
          <DeferredSection loader={() => import("./components/Publications")} />
          <DeferredSection loader={() => import("./components/Education")} />
          <DeferredSection loader={() => import("./components/Activities")} />
          <DeferredSection loader={() => import("./components/Contact")} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
