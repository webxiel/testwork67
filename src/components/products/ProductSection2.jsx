import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import works from "../utils/works";
import styles from './products.module.css';

function ProductSection2() {
  return (
    <div className={styles.main2}>
      <SectionHeader heading="How it works" />
      <Container className={styles.productContainer2}>
        <div className={`grid grid-3 center ${styles.container}`}>
          {works.map((work) => (
            <div className='flex gap-xs flex-col center' key={work.id}>
              <img src={work.image} alt={work.name} />
              <h3>{work.name}</h3>
              <p>{work.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ProductSection2;
