import styles from '../styles/Navbar.module.scss';

function Navbar () {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Logo
      </div>
      <div className={styles.links}>
        <a>Home</a>
        <a href="">Posts</a>
        <a href="">Contacts</a>
      </div>
    </nav>
  );
} 

export default Navbar;