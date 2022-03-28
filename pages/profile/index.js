import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/Profile.module.css';

const Profile = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='Profiel' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1>Profile</h1>
		</div>
	);
};

export default Profile;
