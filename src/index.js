import '@fontsource/potta-one'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CounterContextProvider } from './CounterContext'

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
