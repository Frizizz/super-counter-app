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
        value={0 /* TODO */}
        onChange={() => {
          /* TODO */
        }}
      />
      <InputWithLabel
        label="pas"
        value={0 /* TODO */}
        onChange={() => {
          /* TODO */
        }}
      />
      <InputWithLabel
        label="valeur maximale"
        value={0 /* TODO */}
        onChange={() => {
          /* TODO */
        }}
      />
      <SquaredButton
        onClick={() => {
          /* TODO */
        }}
      >
        Tout nettoyer <BiReset />
      </SquaredButton>
    </div>
  )
}

export default SettingsControl /* TODO: HOC -> voir withDesktopOnlyHoc.js */
