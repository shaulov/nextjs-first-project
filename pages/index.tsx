import Head from 'next/head';
import Heading from '../components/heading';
import Socials from '../components/socials';
import api from '../services/api';
import { SocialData } from '../types/social-data';
import styles from '../styles/Home.module.scss';

type HomeProps = {
  socials: SocialData[];
}

export const getStaticProps = async () => {
  const { fetchSocials } = api();
  const data = await fetchSocials();

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { socials: data },
  }
};

function Home ({ socials }: HomeProps) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading tag={'h1'} text={'Hello World!'} />
      <Socials socials={socials} />
    </div>
  );
}

export default Home;
