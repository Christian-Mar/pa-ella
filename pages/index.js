import { useEffect, useState } from 'react';
import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import SectionCards from '../components/card/SectionCards';
import styles from '../styles/Home.module.css';
import { db } from '../firebase/config';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';

export default function Home() {

	// setting up firestore db-connection
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		const recipesRef = query(collection(db, 'recipes'));
		onSnapshot(recipesRef, snapshot => {
			setRecipes(
				snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	console.log(recipes);
  return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='The recipe website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<Navbar username='donald.duck@disney.com' />
				<Banner
					title='Recepten'
					subTitle='voor ieder moment van de dag'
					imgUrl='/images/waves.png'
				/>
				<div className={styles.image__container}>
          <SectionCards title='Dagelijkse kost'/> 
				</div>
				<div>
					{recipes.map(recipe => (<div id={recipe.id} key={recipe.id} title={recipe.data.title}>
							<h4>{recipe.data.title}</h4>
						</div>))}
				</div>
			</div>
		</div>
	);
}
