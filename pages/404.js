import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '../components/nav/Navbar';
import styles from '../styles/FourOFour.module.css';

const FourOFour = () => {

	const router = useRouter();

	return (
		<div>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='De Recepten Website' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<div className={styles.container}>
				<h1 className={styles.title}>404</h1>
				<h3>Helaas kunnen we de gezochte pagina niet serveren</h3>
				<Image
					className={styles.searchIcon}
					src='/images/server.png'
					alt='search-icon'
					width='240px'
					height='240px'
				/>
				
				<button
					className={styles.button}
					onClick={() => {
						router.push('/');
					}}
				>
					Terug naar de hoofdpagina
				</button>
			</div>
		</div>
	);
};

export default FourOFour;
