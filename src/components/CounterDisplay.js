import { useContext, useEffect } from 'react'
import { CounterContext } from '../CounterContext'
import './CounterDisplay.css'

function CounterDisplay() {
  const { count } = useContext(CounterContext)

  useEffect(() => {
    document.title = `Compteur: ${count}`
  }, [count])

  return <p className="CounterDisplay">{count}</p>
}

export default CounterDisplay
