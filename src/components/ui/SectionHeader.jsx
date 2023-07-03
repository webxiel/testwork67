import PropTypes from 'prop-types'

import styles from './ui.module.css';

function SectionHeader({heading}) {
  return (
    <div className={`flex full-width center ${styles.heading}`}>
     <h2> {heading}</h2>
    </div>
  )
}

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default SectionHeader