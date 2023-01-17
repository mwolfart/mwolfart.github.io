import { createContext, FC, PropsWithChildren, RefObject, useRef } from 'react'

const defaultValue: {
  scrollTo: (id: number) => void
  refs: Array<RefObject<HTMLDivElement>>
} = {
  scrollTo: () => {},
  refs: [],
}

export const ScrollContext = createContext(defaultValue)

export const ScrollProvider: FC<PropsWithChildren> = ({ children }) => {
  const refs: Array<RefObject<HTMLDivElement>> = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  const scrollTo = (id: number): void => {
    if (id < refs.length) {
      const targetRef = refs[id]
      if (targetRef != null) {
        targetRef.current?.scrollIntoView()
      }
    }
  }

  return (
    <ScrollContext.Provider
      value={{
        scrollTo,
        refs,
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}
