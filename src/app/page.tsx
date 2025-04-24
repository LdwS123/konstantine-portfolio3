import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import Projects from '@/components/Projects'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills'
import { AskMe } from '@/components/AskMe'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <AskMe />
      <Contact />
    </div>
  )
} 