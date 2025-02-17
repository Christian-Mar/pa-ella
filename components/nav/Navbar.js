import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../authentication/Modal';
import ProfileImage from '../authentication/ProfileImage';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {

	const [showModal, setShowModal] = useState(false);
	const [imageUploaded, setImageUploaded] = useState(false)

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

	const handleOnClickLogout = e => {
		e.preventDefault();
		router.push('/');
	};

	const imageUpload = () => {
		setImageUploaded(!imageUploaded) 
	}



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
					<span className={styles.logoSubtitle}>Recepten voor iedereen</span>
				</div>
				<div className={styles.login__profile}>
					{user && (
						<>
							<p>{user.displayName}</p>
							<div
								className={styles.avatar__container}
								onClick={() => setShowModal(true)}
							>
								{user.photoURL ? (
									<Image
										src={user.photoURL}
										alt='Avatar'
										width={40}
										height={40}
										className={styles.avatar}
									/>
								) : (
									<Image
										src='/images/blankProfile.png'
										alt='Avatar'
										width={40}
										height={40}
										className={styles.avatar}
									/>
								)}
							</div>
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
						<Link href="/create-recipe" >
							<a>Creëer recept</a>
						</Link>
					</li>
				)}
				{user && (
					<li
						className={styles.navbarListItem}
						onClick={handleOnClickWeekPlanner}
					>
						<Link href='/week-planner'>
							<a>Weekplanner</a>
						</Link>
					</li>
				)}
				{!user && (
					<li className={styles.navbarListItem} onClick={handleOnClickSignUp}>
						<Link href='/signup'>
							<a>Profiel aanmaken</a>
						</Link>
					</li>
				)}
				{!user && (
					<li className={styles.navbarListItem} onClick={handleOnClickSignIn}>
						<Link href='/login'>
							<a>Aanmelden</a>
						</Link>
					</li>
				)}

				{user && (
					<li className={styles.navbarListItem} onClick={logout}>
						<a onClick={handleOnClickLogout}>Afmelden</a>
					</li>
				)}
			</ul>
			<Modal
				title='Verander de profielfoto'
				show={showModal}
				onClose={() => {
					setShowModal(false);
				}}
			>
				<ProfileImage
					deleteUser={() => setShowModal(false)}
					imageUpload={imageUpload}
				/>
			</Modal>
		</div>
	);
};

export default Navbar;
