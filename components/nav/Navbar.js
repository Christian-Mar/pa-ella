import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = ({photoURL}) => {
	const { logout } = useLogout();

	const router = useRouter();

	const { user } = useAuthContext();

	const handleOnClickHome = e => {
		e.preventDefault();
		router.push('/');
	};

	const handleOnClickCreateRecipe = e => {
		e.preventDefault();
		router.push('/create-recipe');
	};

	const handleOnClickWeekPlanner = e => {
		e.preventDefault();
		router.push('/week-planner');
	};

	const handleOnClickSignUp = e => {
		e.preventDefault();
		router.push('/signup');
	};

	const handleOnClickSignIn = e => {
		e.preventDefault();
		router.push('/login');
	};

	const handleOnClickProfile = e => {
		e.preventDefault();
		router.push('/profile');
	};

	//useState met boolean gebruiken om onderdelen al of niet te laten verschijnen
	//na bijvoorbeeld 'login'

	return (
		<div className={styles.navbarContainer}>
			<div className={styles.logoSearchContainer}>
				<div className={styles.logo} onClick={handleOnClickHome}>
					<Link href='/'>
						<a>
							<h1 className={styles.logoCharacters}>
								<span className={styles.logoCharacters__begin}>pa'</span> el-la
							</h1>
						</a>
					</Link>
				</div>
				{/* 
				<div className={styles.searchContainer}>
					<div className={styles.searchBar}>
						<input
							type='text'
							className={styles.searchInput}
							placeholder='Waar heb jij zin in? '
						/>

						<Image
							className={styles.searchIcon}
							src='/images/search_black.svg'
							alt='search-icon'
							width='24px'
							height='24px'
						/>
					</div>
				</div>
*/}
				<div className={styles.login__profile}>
					{user && (
						<>
							<p>Logged in as: {user.email}</p>
							<div className={styles.avatar__container}>
							{user.photoURL && <Image
								src={user.photoURL}
								alt='Avatar'
								width={40}
								height={40}
								className={styles.avatar}
							/>}</div>
						</>
					)}
				</div>
			</div>

			<ul className={styles.navbarList}>
				{user && (
					<li
						className={styles.navbarListItem}
						onClick={handleOnClickCreateRecipe}
					>
						<Link href='/create-recipe'>
							<a>Create recipe</a>
						</Link>
					</li>
				)}
				{user && (
					<li
						className={styles.navbarListItem}
						onClick={handleOnClickWeekPlanner}
					>
						<Link href='/week-planner'>
							<a>Week planner</a>
						</Link>
					</li>
				)}
				{!user && (
					<li className={styles.navbarListItem} onClick={handleOnClickSignUp}>
						<Link href='/signup'>
							<a>Sign up</a>
						</Link>
					</li>
				)}
				{!user && (
					<li className={styles.navbarListItem} onClick={handleOnClickSignIn}>
						<Link href='/login'>
							<a>Sign in</a>
						</Link>
					</li>
				)}
				{user && (
					<li className={styles.navbarListItem} onClick={handleOnClickProfile}>
						<Link href='/profile'>
							<a>My profile</a>
						</Link>
					</li>
				)}
				{user && (
					<li className={styles.navbarListItem} onClick={logout}>
						<a>Log out</a>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navbar;
