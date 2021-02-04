import './InputWithLabel.css'
import NumericInput from './NumericInput'

function InputWithLabel({ value, label, onChange, placeholder }) {
  return (
    <div className="form-group">
      <span>{label}</span>
      <NumericInput
        className="form-field"
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputWithLabel
