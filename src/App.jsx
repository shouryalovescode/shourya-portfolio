import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero /><About /><Experience /><Projects /><Skills /><ResumeCTA /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
