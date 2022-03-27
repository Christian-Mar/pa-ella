import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/CreateRecipe.module.css';

const index = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella create</title>
				<meta name='description' content='The recipe website' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1>Create Recipe</h1>
		</div>
	);
};

export default index;
