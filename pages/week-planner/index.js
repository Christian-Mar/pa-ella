import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
	const { user } = useAuthContext();

	const recipesReadable = JSON.parse(recipes);
	const recipesData = Array.from(recipesReadable);

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
								<MovableRecipe
									key={recipesData.id}
									id={recipe.id}
									title={recipe.title}
									methodTime={recipe.methodTime}
									photo={recipe.image}
								/>
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
									key={recipesData.id}
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
};

export default WeekPlanner;
