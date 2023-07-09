import teams from "../utils/teams";
import Container from '../ui/Container';
import styles from './about.module.css';

function Aboutteam() {

  return (
    <Container className={`flex flex-col center gap-sm ${styles.team}`}>
      <h2>Our Qualified team</h2>
      <div className='grid grid-3 gap-lg'>
        {teams.map((team) => (
          <div className={styles.teamcard} key={team.id}>
            <div className={styles.inner}>
              <div className={styles.front}>
            <img className={styles.img} src={team.image} alt={team.name} />
            </div>
              <div className={`flex center flex-col gap-xs ${styles.back}`}>
              <h2>{team.name}</h2>
              <p>{team.position}</p>
              </div>
              </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Aboutteam;
