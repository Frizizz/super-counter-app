import './App.css'
import Title from './components/Title'
import useCounter from './useCounter'
import NumericInput from './components/NumericInput'

function App() {
  /* TODO */
  const {
    count,
    increase,
    decrease,
    resetCount,
    initialCount,
    step,
    maxCount,
    setInitAll,
    onSetInitialCount,
    onSetMaxCount,
    onSetStep,
  } = useCounter()

  return (
    <div className="App">
      <Title>Super Compteur React</Title>
      <p className="CounterDisplay">{count}</p>
      {!count && <span>Vous pouvez démarrer à tout moment</span>}
      <div className="CounterControl">
        <button onClick={decrease} className="RoundedButton">
          -
        </button>
        <button onClick={increase} className="RoundedButton">
          +
        </button>
        <button onClick={resetCount} className="RoundedButton">
          Init
        </button>
      </div>
      <div className="SettingsControl">
        <div className="form-group">
          <span>valeur initiale</span>
          <NumericInput
            value={initialCount}
            onChange={(event) => onSetInitialCount(event.target.value)}
            className="form-field"
            type="text"
          />
        </div>
        <div className="form-group">
          <span>pas</span>
          <NumericInput
            value={step}
            onChange={(event) => onSetStep(event.target.value)}
            className="form-field"
            type="text"
          />
        </div>
        <div className="form-group">
          <span>valeur maximale</span>
          <NumericInput
            value={maxCount}
            onChange={(event) => onSetMaxCount(event.target.value)}
            className="form-field"
            type="text"
          />
        </div>
        <button onClick={setInitAll} className="SquaredButton">
          Tout nettoyer
        </button>
      </div>
    </div>
  )
}

export default App
