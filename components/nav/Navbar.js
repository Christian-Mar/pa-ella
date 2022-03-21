
import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';



const Navbar = () => {

  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/')
  }

  const handleOnClickSignUp = e => {
		e.preventDefault();
		router.push('/signup');
	};

  const handleOnClickSignIn = e => {
		e.preventDefault();
		router.push('/signin');
	};

  //useState met boolean gebruiken om onderdelen al of niet te laten verschijnen
  //na bijvoorbeeld 'login'

  return (
		<div className={styles.navbarContainer}>
			<div className={styles.logo} onClick={handleOnClickHome}>
				<Link href='/'>
					<a>
						<h1 className={styles.logoCharacters}>pa' ella</h1>
					</a>
				</Link>
			</div>

			

			<ul className={styles.navbarList}>
			
				<li className={styles.navbarListItem} onClick={handleOnClickSignUp}>
					<Link href='/signup'>
						<a>Account maken</a>
					</Link>
				</li>
				<li className={styles.navbarListItem} onClick={handleOnClickSignIn}>
					<Link href='/signin'>
						<a>Aanmelden</a>
					</Link>
				</li>
				
			</ul>
		</div>
	);
}

export default Navbar;
