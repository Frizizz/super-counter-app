import './SettingsControl.css'
import InputWithLabel from './InputWithLabel'
import { BiReset } from 'react-icons/bi'
import SquaredButton from './SquaredButton'

function SettingsControl() {
  /* TODO */
  return (
    <div className="SettingsControl">
      <InputWithLabel
        label="valeur initiale"
        value={}
        onChange={() => {
          /* TODO */
        }}
      />
      <InputWithLabel
        label="pas"
        value={}
        onChange={() => {
          /* TODO */
        }}
      />
      <InputWithLabel
        label="valeur maximale"
        value={}
        onChange={() => {
          /* TODO */
        }}
      />
      <SquaredButton onClick={/* TODO */}>
        Tout nettoyer <BiReset />
      </SquaredButton>
    </div>
  )
}

export default SettingsControl /* TODO */
