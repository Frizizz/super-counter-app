import { createContext } from 'react'

export const CounterContext = createContext()

export function CounterContextProvider({ children }) {
  return (
    <CounterContext.Provider value={{}}>{children}</CounterContext.Provider>
  )
}
