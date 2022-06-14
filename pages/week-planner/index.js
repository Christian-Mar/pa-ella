import React, { useState, useEffect } from 'react';
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
import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';

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
	const [searchTerm, setSearchTerm] = useState('');
	const [enteredWord, setEnteredWord] = useState('')
	const [val, setVal] = useState('');
	const { user } = useAuthContext();

	const recipesReadable = JSON.parse(recipes);
	const recipesData = Array.from(recipesReadable);

	useEffect(() => {
		const droppedRecipes = JSON.parse(localStorage.getItem('dropZoneStorage'))
		setBoard(droppedRecipes)
	},[])


	useEffect(() =>{
			localStorage.setItem('dropZoneStorage', JSON.stringify(board))
	}, [board])


	// Logic of the dropzone

	const [{ canDrop, isOver }, dropRef ] = useDrop({
		accept: 'li',
		drop: recipesData => addRecipeToBoard(recipesData.id),
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	

	const addRecipeToBoard = id => {
		const draggedRecipe = recipesData.filter((recipe, i) => id === recipe.id);
		setBoard(items => [...items, draggedRecipe[0]]);
	};

	const handleRemove = index => {
		const values = [...board];
		values.splice(index, 1);
		setBoard(values);
	};

	const handleRemoveAll = (e) => {
		e.preventDefault();
		setBoard([]);
	}

	const search = value => {
		if (searchTerm === '') {
			return value;
		} else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
			return value;
		}
	};

	const clearInput = () => {
		setSearchTerm('');
		setEnteredWord('');
	}

	return (
		<div>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='Weekplanner' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<Navbar />
				<h1 className={styles.title}>Wat gaan we deze week eten? </h1>
				<div ref={dropRef} className={styles.planning__container}>
					<div className={styles.planning__containerTitle}>Planning</div>
					<ul className={styles.recipe__list}>
						{board.map(recipe => {
							return (
								<MovableRecipe
									key={uuidv4()}
									id={recipe.id}
									title={recipe.title}
									methodTime={recipe.methodTime}
									photo={recipe.image}
									dropped={true}
									handleRemove={handleRemove}
								/>
							);
						})}
					</ul>
					<div className={styles.planning__containerButton}>
						{board.length !== 0 && (
							<button
								className={styles.planning__Button}
								onClick={handleRemoveAll}
							>
								Maak de planning leeg
							</button>
						)}
					</div>
				</div>

				<div className={styles.planning__container}>
					<div className={styles.planning__containerTitle}>Recepten</div>
					<div className={styles.searchBarContainer}>
						<input
							value={enteredWord}
							type='text'
							placeholder='Zoek een recept via een trefwoord in de titel'
							className={styles.searchBar}
							onChange={e => {
								setSearchTerm(e.target.value);
								setEnteredWord(e.target.value)
							}}
						
						/><div>
						{searchTerm !== '' && <FaTimes type='submit' onClick={clearInput}/>}
						</div>
					</div>
					<ul className={styles.recipe__list}>
						{recipesData.filter(search).map(recipe => {
							return (
								<MovableRecipe
									key={recipe.id}
									id={recipe.id}
									title={recipe.title}
									methodTime={recipe.methodTime}
									photo={recipe.image}
									dropped={false}
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
