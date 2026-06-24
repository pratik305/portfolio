import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import OpenSource from '@/components/OpenSource'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <OpenSource />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
