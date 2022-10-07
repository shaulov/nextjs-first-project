import Head from 'next/head';
import { SocialData } from '../types/social-data';
import styles from '../styles/Socials.module.scss';

type SocialsProps = {
  socials: SocialData[],
}

function Socials ({ socials }: SocialsProps) {
  if (!socials) {
    return null;
  }

  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css" integrity="sha512-RvQxwf+3zJuNwl4e0sZjQeX7kUa3o82bDETpgVCH2RiwYSZVDdFJ7N/woNigN/ldyOOoKw8584jM4plQdt8bhA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <ul className={styles.socials}>
        {socials && socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel='noopener noreferrer'>
              <i className={`fab fa-${icon}`} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Socials;