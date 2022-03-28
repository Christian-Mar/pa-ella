import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/Weekplanner.module.css';

const WeekPlanner = () => {
	return (
		<div>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='Weekplanner' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<Navbar />
			</div>
		</div>
	);
};

export default WeekPlanner;
