import './Title.css'
import cn from 'classnames'

function Title(props) {
  return <h1 {...props} className={cn(`Title`, props.className)} />
}

export default Title
