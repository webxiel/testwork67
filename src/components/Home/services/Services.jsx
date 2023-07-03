import services from '../../utils/services'
import Container from '../../ui/Container'

import styles from './services.module.css'

function Services() {
  return (
    <Container className={`flex flex-col center gap-lg padding-sm ${styles.serviceContainer}`}>
      <h2>Services we offer</h2>
      <div className={`grid grid-3 gap-lg center ${styles.serviceCards}`}>
        {services.map((card)=> (
          <div className='flex flex-col center gap-md' key={card.id}>
            <img src={card.image} alt=""/>
            <h3>{card.name}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Services