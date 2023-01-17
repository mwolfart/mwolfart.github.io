import { Intro, About, Projects, Contact } from '@feature-components'
import { ScrollContext } from '@providers'
import { useContext } from 'react'
import { ReactNode } from 'react'

export default function Home(): ReactNode {
  const { refs } = useContext(ScrollContext)

  return (
    <div className="h-full scroll-smooth snap-mandatory snap-y overflow-auto [&>*]:snap-start">
      <Intro ref={refs[0]} />
      <About ref={refs[1]} />
      <Projects ref={refs[2]} />
      <Contact ref={refs[3]} />
    </div>
  )
}
