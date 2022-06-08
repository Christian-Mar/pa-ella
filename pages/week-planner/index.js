import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from '../../styles/Weekplanner.module.css';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { useDrag } from 'react-dnd';
import itemTypes from '../../utils/itemTypes';

export const getServerSideProps = async () => {
	const querySnapshot = await getDocs(collection(db, 'recipes'));
	let recipes = [];

	querySnapshot.forEach(doc => {
		recipes.push({ ...doc.data(), id: doc.id });
	});

	return {
		props: { recipes: JSON.stringify(recipes) || null },
	};
};

const WeekPlanner = ({ recipes }) => {
	const { user } = useAuthContext();
	const recipesReadable = JSON.parse(recipes);
	const recipesData = Array.from(recipesReadable);
	
	/*
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "li",
		
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
*/

	const itemList = [];
	const drags = {};

 recipesData.forEach((recipe) => {
	 const drag = useDrag(() => ({
			type: 'li',
			collect: monitor => ({
				isDragging: !!monitor.isDragging(),
			}),
		}));
		
		const [{isDragging}, dragRef] = drag;
		drags[recipe.title] = drag;

		itemList.push(
			<li ref={dragRef} key={recipe.id} className={styles.recipe__listitems}>
				<div>
					<h3 className={styles.recipe__title}>{recipe.title}</h3>
					<h4 className={styles.recipe__category}>{recipes.methodTime}</h4>
					<Image
						src={recipe.image}
						alt='Dish'
						width={200}
						height={150}
						objectFit='cover'
					></Image>
				</div>
			</li>
		);


 })
	


	

	return (
		<div>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='Weekplanner' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<Navbar />
				<h1>Weekplanner</h1>
				<div className={styles.planning__container}>
					The planning will come here
				</div>
				<div className={styles.planning__container}> 
					The elements wille start here
				

				<ul className={styles.recipe__list} >
					{/*recipesData?.map(
						(recipe, index) =>
							recipe.category === 'dessert' && (
								<li ref={drag} key={recipe.id} className={styles.recipe__listitems}>
									<div >
										<h3 className={styles.recipe__title}>{recipe.title}</h3>
										<h4 className={styles.recipe__category}>
											{recipes.methodTime}
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
							)*/}
							{ itemList }
				</ul></div>
			</div>
			<Footer />
		</div>
	);
};

export default WeekPlanner;
