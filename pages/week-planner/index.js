import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from '../../styles/Weekplanner.module.css';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { useDrag, useDrop } from 'react-dnd';

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
	const [board, setBoard] = useState([]);
	//const { user } = useAuthContext();
	const recipesReadable = JSON.parse(recipes);
	const recipesData = Array.from(recipesReadable);

	/* 
	Make recipes draggable -> forEach + push to new array is the solution to make all recipes draggable. By only mapping over the recipes and using ref in the <li>-element only the last recipe was draggable.
	*/

	const itemList = [];
	const drags = {};

	recipesData.forEach(recipe => {
		const drag = useDrag(() => ({
			type: 'li',
			item: { id: recipe.id },
			collect: monitor => ({
				isDragging: !!monitor.isDragging(),
			}),
		}));

		const [{ isDragging }, dragRef] = drag;
		drags[recipe.id] = drag;

		itemList.push(
			<li ref={dragRef} key={recipe.id} className={styles.recipe__listitems}>
				<div>
					<h3 className={styles.recipe__title}>{recipe.title}</h3>
					<h4 className={styles.recipe__category}>{recipe.methodTime}</h4>
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
	});

	// Logic of the dropzone

	const [{ isOver }, dropRef] = useDrop({
		accept: 'li',
		drop: recipe => addRecipeToBoard(recipe.id),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	const addRecipeToBoard = id => {
		const draggedRecipe = recipesData.filter((recipe, i) => id === recipe.id);
		setBoard(board => [...board, draggedRecipe[0]]);
	};

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
				<div ref={dropRef} className={styles.planning__container}>
					Drop here
						<ul className={styles.recipe__list}>
					{board.map(recipe => {
						return (
								
							<li key={recipe.id} className={styles.recipe__listitems}>
								<div>
									<h3 className={styles.recipe__title}>{recipe.title}</h3>
									<h4 className={styles.recipe__category}>
										{recipe.methodTime}
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
						);
					})}</ul>
				</div>
				<div className={styles.planning__container}>
					All (filtered) recipes start here
					<ul className={styles.recipe__list}>{itemList}</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default WeekPlanner;
