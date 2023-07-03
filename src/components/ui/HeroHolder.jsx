
import PropTypes from 'prop-types';

import styles from './ui.module.css';

function HeroHolder({heading, subtext, className}) {
  return (
    <section className={`full-width flex flex-col center gap-md ${className} ${styles.hero}`}>
      <h2>{heading}</h2>
      <p>{subtext}</p>
    </section>
  )
}

HeroHolder.propTypes = {
  heading: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  className: PropTypes.node,
}

export default HeroHolder