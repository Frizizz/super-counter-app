import './CounterControl.css'
import RoundedButton from './RoundedButton'
import { useContext } from 'react'
import { CounterContext } from '../CounterContext'
import { decreaseCount, increaseCount, resetCount } from '../counter.reducer'

function CounterControl() {
  const { dispatch } = useContext(CounterContext)

  return (
    <div className="CounterControl">
      <RoundedButton
        onClick={() => {
          dispatch(decreaseCount())
        }}
      >
        -
      </RoundedButton>
      <RoundedButton
        onClick={() => {
          dispatch(increaseCount())
        }}
      >
        +
      </RoundedButton>
      <RoundedButton
        onClick={() => {
          dispatch(resetCount())
        }}
      >
        Init
      </RoundedButton>
    </div>
  )
}

export default CounterControl
