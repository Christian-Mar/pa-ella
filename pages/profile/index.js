import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/Profile.module.css';
import ProfileImage from '../../components/authentication/ProfileImage';
import NameInput from '../../components/authentication/NameInput';

const Profile = () => {


	return (
		<div className={styles.container}>
			<Head>
				<title>pa'el-la</title>
				<meta name='description' content='Profiel' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1>Profile</h1>
			<ProfileImage />
			<NameInput />
		</div>
	);
};

export default Profile;
