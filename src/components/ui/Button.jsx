
import PropTypes from 'prop-types'

import styles from './ui.module.css';

function Button({children, className}) {
  return (
    <button type="button" className={`flex center rounded ${className} ${styles.btn}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Button