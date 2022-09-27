import Heading from '../components/heading';
import styles from '../styles/Home.module.scss';

function Home () {
  return (
    <div className={styles.wrapper}>
      <Heading tag={'h1'} text={'Hello World!'} />
    </div>
  );
}

export default Home
