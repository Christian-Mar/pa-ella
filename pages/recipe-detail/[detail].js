import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/RecipeDetail.module.css';

const RecipeDetail = (props) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella create</title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1>{props.id}</h1>
			<p>{props.ingredients}</p>
		</div>
	);
};

export default RecipeDetail;

export async function getServerSideProps(context) {
	const { params } = context;
	const recipeId = params.detail;
	
	return {
		props: {
			id: recipeId,
			
		}
	}
}
