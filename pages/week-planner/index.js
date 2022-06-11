import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import MovableRecipe from '../../components/week-planner/MovableRecipe';
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from '../../styles/Weekplanner.module.css';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { useDrop } from 'react-dnd';

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
	//console.log(recipesData.image)
	/* 
	Make recipes draggable -> forEach + push to new array is the solution to make all recipes draggable. By only mapping over the recipes and using ref in the <li>-element only the last recipe was draggable.
	*/
/*
	const MovableRecipe = ({recipesData}) => {
		const [{ isDragging }, dragRef] = useDrag({
			type: 'li',
			item: { id: recipesData.id },
			collect: monitor => ({
				isDragging: !!monitor.isDragging(),
			}),
		});
	}

	MovableRecipe();
	
	const itemList = [];
	*/
	/*	const drags = {};
	
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
			<li ref={dragRef} key={recipesData.id} className={styles.recipe__listitems}>
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
	;*/

	// Logic of the dropzone

	const [{ isOver }, dropRef] = useDrop({
		accept: 'li',
		drop: recipesData => addRecipeToBoard(recipesData.id),
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
					<ul className={styles.recipe__list} key={recipesData.id}>
						{board.map(recipe => {
							return (
								<li key={recipesData.id} className={styles.recipe__listitems}>
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
						})}
					</ul>
				</div>
				<div className={styles.planning__container}>
					All (filtered) recipes start here
					<ul className={styles.recipe__list} key={recipesData.id}>
						{recipesData.map(recipe => {
							return (
								<MovableRecipe
									id={recipe.id}
									title={recipe.title}
									methodTime={recipe.methodTime}
									photo={recipe.image}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
				}

export default WeekPlanner;
