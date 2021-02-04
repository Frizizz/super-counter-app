import './CounterControl.css'
import RoundedButton from './RoundedButton'
import { useContext } from 'react'
import { CounterContext } from '../CounterContext'

function CounterControl() {
  const { dispatch } = useContext(CounterContext)

  return (
    <div className="CounterControl">
      <RoundedButton
        onClick={() => {
          /* TODO */
        }}
      >
        -
      </RoundedButton>
      <RoundedButton
        onClick={() => {
          /* TODO */
        }}
      >
        +
      </RoundedButton>
      <RoundedButton
        onClick={() => {
          /* TODO */
        }}
      >
        Init
      </RoundedButton>
    </div>
  )
}

export default CounterControl
