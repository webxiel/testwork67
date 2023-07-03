import Button from './Button'

import styles from './ui.module.css';
import PropTypes from 'prop-types'

function TextHolder({heading, subtext, className}) {
  return (
    <div className={`${className} ${styles.textHolder}`}>
      <h3>{heading}</h3>
      <p>{subtext}</p>
      <Button className={styles.textBtn}>
        Get started
      </Button>
    </div>
  )
}

TextHolder.propTypes = {
  heading: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default TextHolder