import './SquaredButton.css'
import cn from 'classnames'

function SquaredButton(props) {
  return <button {...props} className={cn('SquaredButton', props.className)} />
}

export default SquaredButton
