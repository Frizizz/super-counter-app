import './App.css'
import Title from './components/Title'
import NumericInput from './components/NumericInput'
import { useReducer } from 'react'
import reducer, {
  decreaseCount,
  increaseCount,
  initialState,
  resetCount,
  setInitAll,
  setInitialCount,
  setMaxCount,
  setStep,
} from './counter.reducer'

function App() {
  /* TODO */

  const [{ count, step, initialCount, maxCount }, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <div className="App">
      <Title>Super Compteur React</Title>
      <p className="CounterDisplay">{count}</p>
      {!count && <span>Vous pouvez démarrer à tout moment</span>}
      <div className="CounterControl">
        <button
          onClick={() => dispatch(decreaseCount())}
          className="RoundedButton"
        >
          -
        </button>
        <button
          onClick={() => dispatch(increaseCount())}
          className="RoundedButton"
        >
          +
        </button>
        <button
          onClick={() => dispatch(resetCount())}
          className="RoundedButton"
        >
          Init
        </button>
      </div>
      <div className="SettingsControl">
        <div className="form-group">
          <span>valeur initiale</span>
          <NumericInput
            value={initialCount}
            onChange={(event) => dispatch(setInitialCount(event.target.value))}
            className="form-field"
            type="text"
          />
        </div>
        <div className="form-group">
          <span>pas</span>
          <NumericInput
            value={step}
            onChange={(event) => dispatch(setStep(event.target.value))}
            className="form-field"
            type="text"
          />
        </div>
        <div className="form-group">
          <span>valeur maximale</span>
          <NumericInput
            value={maxCount}
            onChange={(event) => dispatch(setMaxCount(event.target.value))}
            className="form-field"
            type="text"
          />
        </div>
        <button
          onClick={() => dispatch(setInitAll())}
          className="SquaredButton"
        >
          Tout nettoyer
        </button>
      </div>
    </div>
  )
}

export default App
