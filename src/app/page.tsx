import Bio from './components/cv-sections/bio'
import Experience from './components/cv-sections/experience'
import Education from './components/cv-sections/education'
import Skills from './components/cv-sections/skills'
import Projects from './components/cv-sections/projects'
import Interests from './components/cv-sections/interests'
import dynamic from 'next/dynamic'
import PrintButton from './components/print-button'

const PrintNote = dynamic(() => import('./components/print-note'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <main className="container relative mx-auto overflow-auto p-8 md:p-16 print:p-8">
        <section id="cv" className="mx-auto w-full max-w-2xl space-y-4">
          <Bio />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Interests />
        </section>
      </main>
      <PrintNote />
      <PrintButton />
    </>
  )
}
