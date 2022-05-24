import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';
import styles from '../styles/Home.module.css';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import Carousel from 'react-elastic-carousel';
import { CarouselContainer } from '../styles/slider';
import ShowCategories from '../components/showRecipes/ShowCategories';
import { db } from '../firebase/config';
import { getDocs, doc, collection, query } from 'firebase/firestore';

const breakPoints = [
	{ width: 300, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 5 },
	{ width: 1400, itemsToShow: 6 },
];

export const getServerSideProps = async (context) => {
	
	const querySnapshot = await getDocs(collection(db,'recipes'));
	let recipes= [];

	querySnapshot.forEach((doc) => {
		recipes.push({...doc.data(), id: doc.id})
	})
	//const docRef = query(collection(db, 'recipes'));
	//const docSnap = await getDocs(docRef);
	//return docSnap.doc.map(doc => ({id: doc.id, ...doc.data()}))
	return {
		props: { recipes: JSON.stringify(recipes) || null},
	};
};

export default function Home({recipes}) {
	//const { documents: recipesUser } = useCollection('recipes');
	
	const { user } = useAuthContext();
	const recipes2 = JSON.parse(recipes)
  const recipesData = Array.from(recipes2);
	console.log(recipes2);
	console.log(user)
	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='De recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<Navbar />
				<Banner imgUrl='/images/ellas.jpg' />
				<h1 className={styles.title}>Wat eten we vandaag?</h1>
				<div className={styles.image__container}></div>
				<div className={styles.list}>
					{user && (
						<div>
							<h4 className={styles.section__title}>Mijn recepten</h4>
							<CarouselContainer>
								<Carousel breakPoints={breakPoints}>
									{recipesData?.map(
										recipe =>
											recipe.userId === user.uid && (
												<li
													key={recipe.id}
													className={styles.recipe__listitems}
												>
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
								</Carousel>
							</CarouselContainer>
						</div>
					)}
				</div>
				<ShowCategories title='Ontbijt' category='breakfast' CarouselContainer={CarouselContainer}/>
				<ShowCategories title='Salade' category='salad' />
				<ShowCategories title='Soep' category='soup' />
				<ShowCategories title='Voorgerecht' category='starter' />
				<ShowCategories title='Snack' category='snack' />
				<ShowCategories title='Maaltijd' category='dinner' />
				<ShowCategories title='Dessert' category='dessert' />
			</div>
			<Footer />
		</div>
	);
}
