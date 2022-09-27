import { useRouter } from 'next/router';
import Link from 'next/link';
import { AppRoute } from '../const';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  {id: '1', title: 'Home', path: AppRoute.Root},
  {id: '2', title: 'Posts', path: AppRoute.Posts},
  {id: '3', title: 'Contacts', path: AppRoute.Contacts},
];

function Navbar () {
  const { pathname } = useRouter();
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Logo
      </div>
      <div className={styles.links}>
        {
          navigation.map(navItem => (
            <Link key={navItem.id} href={navItem.path}>
              <a className={pathname === navItem.path ? styles.active : undefined}>{navItem.title}</a>
            </Link>
          ))
        }
      </div>
    </nav>
  );
} 

export default Navbar;