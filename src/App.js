import './App.css'
import Title from './components/Title'
import CounterControl from './components/CounterControl'
import SettingsControl from './components/SettingsControl'
import CounterDisplay from './components/CounterDisplay'

function App() {
  return (
    <div className="App">
      <Title>Super Compteur React</Title>
      <CounterDisplay />
      <CounterControl />
      <SettingsControl />
    </div>
  )
}

export default App
