import { useEffect, useState } from 'react';
import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import SectionCards from '../components/card/SectionCards';
import styles from '../styles/Home.module.css';
import { useCollection } from '../hooks/useCollection';


export default function Home() {
	const { documents: recipes } = useCollection('recipes');

	console.log(recipes);

	
  return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='The recipe website' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<Navbar username='donald.duck@disney.com' />
				<Banner
					imgUrl='/images/banner.jpg'
				/>
				<h1 className={styles.title}>Recepten</h1>
				<div className={styles.image__container}>
					<SectionCards title='Dagelijkse kost' />
				</div>
				<div className='(styles.list)'>
					<ul>
						{recipes?.map(recipe => (
							<li key={recipe.id}>{recipe.title}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
