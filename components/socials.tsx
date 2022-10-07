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
    <ul className={styles.socials}>
      {socials && socials.map(({ id, icon, path }) => (
        <li key={id}>
          <a href={path} target="_blank" rel='noopener noreferrer'>
            <i className={`fab fa-${icon}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;