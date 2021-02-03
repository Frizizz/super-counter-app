import { useState } from 'react'

const initialState = {
  count: 0,
  maxCount: 100,
  step: 1,
  initialCount: 0,
}

const useCounter = () => {
  const [count, setCount] = useState(initialState.count)
  const [maxCount, setMaxCount] = useState(initialState.maxCount)
  const [step, setStep] = useState(initialState.step)
  const [initialCount, setInitialCount] = useState(initialState.initialCount)

  const increase = () => setCount(Math.min(count + step, maxCount))
  const decrease = () => setCount(Math.max(count - step, initialCount))

  const onSetMaxCount = (value) => {
    setMaxCount(value)
    if (count > maxCount) setCount(value)
  }

  const onSetInitialCount = (value) => {
    setInitialCount(value)
    if (count < initialCount) setCount(value)
  }

  const onSetStep = (value) => {
    setStep(value)
  }

  const resetCount = () => {
    setCount(initialCount)
  }

  const setInitAll = () => {
    setCount(initialState.count)
    setMaxCount(initialState.maxCount)
    setStep(initialState.step)
    setInitialCount(initialState.initialCount)
  }

  return {
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
  }
}

export default useCounter
