import './SettingsControl.css'
import InputWithLabel from './InputWithLabel'
import { BiReset } from 'react-icons/bi'
import SquaredButton from './SquaredButton'
import { CounterContext } from '../CounterContext'
import { useContext } from 'react'
import {
  setInitAll,
  setInitialCount,
  setMaxCount,
  setStep,
} from '../counter.reducer'
import withDesktopOnlyHoc from '../withDesktopOnlyHoc'

function SettingsControl() {
  const { initialCount, step, maxCount, dispatch } = useContext(CounterContext)

  return (
    <div className="SettingsControl">
      <InputWithLabel
        label="valeur initiale"
        value={initialCount}
        onChange={(event) => {
          dispatch(setInitialCount(event.target.value))
        }}
      />
      <InputWithLabel
        label="pas"
        value={step}
        onChange={(event) => {
          dispatch(setStep(event.target.value))
        }}
      />
      <InputWithLabel
        label="valeur maximale"
        value={maxCount}
        onChange={(event) => {
          dispatch(setMaxCount(event.target.value))
        }}
      />
      <SquaredButton
        onClick={() => {
          dispatch(setInitAll())
        }}
      >
        Tout nettoyer <BiReset />
      </SquaredButton>
    </div>
  )
}

export default withDesktopOnlyHoc(SettingsControl)
