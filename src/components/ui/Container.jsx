
import PropTypes from 'prop-types'

import styles from './ui.module.css'

function Container({children, className}) {
  return (
    <section className={` full-width ${className} ${styles.container}`}>
      {children}
    </section>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Container