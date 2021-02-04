import { useContext } from 'react'
import { CounterContext } from '../CounterContext'
import './CounterDisplay.css'

function CounterDisplay() {
  const { count } = useContext(CounterContext)

  /* TODO: useEffect */

  return <p className="CounterDisplay">{count}</p>
}

export default CounterDisplay
