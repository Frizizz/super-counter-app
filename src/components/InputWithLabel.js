import './InputWithLabel.css'

function InputWithLabel({ value, label, onChange, placeholder }) {
  return (
    <div className="form-group">
      <span>{label}</span>
      <input
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
