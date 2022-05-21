import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import styles from '../styles/Home.module.css';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import Carousel from 'react-elastic-carousel';
import { CarouselContainer } from '../styles/slider';

const breakPoints = [
	{ width: 300, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 5 },
	{ width: 1400, itemsToShow: 6},
];

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
				<Banner imgUrl='/images/ellas.jpg' />
				<h1 className={styles.title}>Wat eten we vandaag?</h1>
				<div className={styles.image__container}></div>
				<div className={styles.list}>
					{user && (
						<div>
							<h4 className={styles.section__title}>Mijn recepten</h4>
							<CarouselContainer>
								<Carousel breakPoints={breakPoints}>
									{recipes?.map(
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
				<div className={styles.list}>
					<h4 className={styles.section__title}>Ontbijt</h4>
					<ul className={styles.recipe__list}>
						{recipes?.map(
							recipe =>
								recipe.category === 'breakfast' && (
									<li key={recipe.id} className={styles.recipe__listitems}>
										<div>
											<h3 className={styles.recipe__title}>{recipe.title}</h3>
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
