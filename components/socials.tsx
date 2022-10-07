import { SocialData } from '../types/social-data';

type SocialsProps = {
  socials: SocialData[],
}

function Socials ({ socials }: SocialsProps) {
  return (
    <ul>
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