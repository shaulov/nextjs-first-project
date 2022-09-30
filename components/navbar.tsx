import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'
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
        <Image src="/logo.webp" alt="logo" width="60" height="60" />
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