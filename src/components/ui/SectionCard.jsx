
import styles from './ui.module.css';

import PropTypes from 'prop-types';

function SectionCard({children, className}) {
  return (
    <section className={`grid grid-2 gap-md ${className} ${styles.sectioncard}`}>
    {children}
    </section>
  )
}

SectionCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
}

export default SectionCard