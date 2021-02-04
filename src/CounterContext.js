import { createContext, useReducer } from 'react'
import reducer, { initialState } from './counter.reducer'

export const CounterContext = createContext()

export function CounterContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}
