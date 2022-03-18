import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
		<div className={styles.navbarContainer}>
      <div className={styles.logo}><h1 className={styles.logoCharacters}>pa'ella</h1></div>
			<ul className={styles.navbarList}>
				<li className={styles.navbarListItem}>Sign up</li>
				<li className={styles.navbarListItem}>Sign in</li>
			</ul>
		</div>
	);
}

export default Navbar;
