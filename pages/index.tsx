import Head from 'next/head';
import Heading from '../components/heading';
import styles from '../styles/Home.module.scss';

function Home () {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading tag={'h1'} text={'Hello World!'} />
    </div>
  );
}

export default Home;
