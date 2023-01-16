import { Intro, About, Projects } from '@feature-components'
import { ReactNode } from 'react'

export default function Home(): ReactNode {
  return (
    <div className="h-full scroll-smooth snap-mandatory snap-y overflow-auto [&>*]:snap-start">
      <Intro />
      <About />
      <Projects />
    </div>
  )
}
