import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '../components/heading';
import { AppRoute } from '../const';
import styles from '../styles/404.module.scss';

function Error () {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(AppRoute.Root);
    }, 3000);
  }, [router]);

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