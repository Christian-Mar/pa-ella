import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import SectionCards from '../components/card/SectionCards';
import styles from '../styles/Home.module.css';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
//import { getRecipes } from '../utils/recipeData';
/*
export async function getServerSideProps() {
	const response = await fetch(
		`https://firestore.googleapis.com/v1/projects/NEXT_PUBLIC_PROJECT_ID/databases/(default)/documents/recipes`
	);
	const recipes = await response.json();
	console.log(recipes)
	return { props: { recipes }
}
};
*/
export default function Home() {
	const { documents: recipes } = useCollection('recipes');

	
	const { user } = useAuthContext();
	
	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='De recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<Navbar />
				<Banner imgUrl='/images/bannercolor.jpg' />
				<h1 className={styles.title}>Wat eten we vandaag?</h1>
				<div className={styles.image__container}>
					{/*<SectionCards title='Simple dishes' />*/}
				</div>
				<div className={styles.list}>
					{user && (
						<div>
							<h4>Mijn recepten</h4>

							<ul className={styles.recipe__list}>
								{recipes?.map(
									recipe =>
										recipe.userId === user.uid && (
											<li key={recipe.id} className={styles.recipe__listitems}>
												<div>
													<h3 className={styles.recipe__title}>
														{recipe.title}
													</h3>
													<h4 className={styles.recipe__category}>
														{recipe.category}
													</h4>
													<Image
														src={recipe.image}
														alt='Dish'
														width={200}
														height={150}
														objectFit='cover'
													></Image>
												</div>
											</li>
										)
								)}
							</ul>
						</div>
					)}
				</div>
				<div className='(styles.list)'>
					<h4>Salads</h4>
					<ul className={styles.recipe__list}>
						{recipes?.map(
							recipe =>
								recipe.category === 'salad' && (
									<li key={recipe.id} className={styles.recipe__listitems}>
										<div>
											<h3>{recipe.title}</h3>
											<h4>{recipe.category}</h4>
											<Image
												src={recipe.image}
												alt='Dish'
												width={200}
												height={150}
												objectFit='cover'
											></Image>
										</div>
									</li>
								)
						)}
					</ul>
				</div>
				<div className='(styles.list)'>
					<h4>Desserts</h4>
					<ul className={styles.recipe__list}>
						{recipes?.map(
							recipe =>
								recipe.category === 'dessert' && (
									<li key={recipe.id} className={styles.recipe__listitems}>
										<div>
											<h3>{recipe.title}</h3>
											<h4>{recipe.category}</h4>
											<Image
												src={recipe.image}
												alt='Dish'
												width={200}
												height={150}
												objectFit='cover'
											></Image>
										</div>
									</li>
								)
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
