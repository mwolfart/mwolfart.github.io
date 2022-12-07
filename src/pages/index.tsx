import { Intro, About, Projects } from '@feature-components'
import { ReactNode } from 'react'

export default function Home(): ReactNode {
  return (
    <div className="overflow">
      <Intro />
      <About />
      <Projects />
    </div>
  )
}
