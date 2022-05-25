import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/RecipeDetail.module.css';
import { db } from '../../firebase/config';
import { getDoc, doc, collection, query } from 'firebase/firestore';

const RecipeDetail = ({id, recipeProps}) => {
	const recipeReadable = JSON.parse(recipeProps)
	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella create</title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1>{recipeReadable.title}</h1>
			<p>{recipeReadable.category}</p>
			<p>{recipeReadable.title}</p>
			<p>{recipeReadable.method}</p>
			<p></p>
		</div>
	);
};

export default RecipeDetail;

export async function getServerSideProps(context) {
	const { params } = context;
	const recipeId = params.detail;
	const docRef = doc(db, 'recipes', recipeId);
	const docSnap = await getDoc(docRef);
	
	return {
		props: {
			id: recipeId,
			recipeProps: JSON.stringify(docSnap.data()) || null,
		},
	};
}
