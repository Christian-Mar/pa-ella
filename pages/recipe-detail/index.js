import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/RecipeDetail.module.css';

const RecipeDetail = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella create</title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1>Edit Recipe</h1>
		</div>
	);
};

export default RecipeDetail;
