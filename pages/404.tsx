import Heading from '../components/heading';
import styles from '../styles/404.module.scss';

function Error () {
  return (
    <div className={styles.wrapper}>
      <div>
        <Heading tag={'h1'} text={'404'}/>
        <Heading tag={'h2'} text={'Something is going wrong...'}/>
      </div>
    </div>
  );
}

export default Error;