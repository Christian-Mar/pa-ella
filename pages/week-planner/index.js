import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import MovableRecipe from '../../components/week-planner/MovableRecipe';
import Filter from '../../components/week-planner/Filter';
import styles from '../../styles/Weekplanner.module.css';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';

export const getServerSideProps = async () => {
	const querySnapshot = await getDocs(collection(db, 'recipes'));
	const recipes = [];

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
	const [enteredWord, setEnteredWord] = useState('');
	const [gluten, setGluten] = useState(false);
	const [ei, setEi] = useState(false);
	const [lupine, setLupine] = useState(false);
	const [melk, setMelk] = useState(false);
	const [mosterd, setMosterd] = useState(false);
	const [noten, setNoten] = useState(false);
	const [pinda, setPinda] = useState(false);
	const [schaaldieren, setSchaaldieren] = useState(false);
	const [selder, setSelder] = useState(false);
	const [sesamzaad, setSesamzaad] = useState(false);
	const [soja, setSoja] = useState(false);
	const [sulfiet, setSulfiet] = useState(false);
	const [vis, setVis] = useState(false);
	const [weekdieren, setWeekdieren] = useState(false);
	const recipesReadable = JSON.parse(recipes);
	const recipesData = Array.from(recipesReadable);

	useEffect(() => {
		const droppedRecipes = JSON.parse(localStorage.getItem('dropZoneStorage'));
		setBoard(droppedRecipes);
	}, []);

	useEffect(() => {
		localStorage.setItem('dropZoneStorage', JSON.stringify(board));
	}, [board]);

	// Logic of the dropzone

	const [{ canDrop, isOver }, dropRef] = useDrop({
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

	const handleRemove = (id, index) => {
		let values = [...board];
		values.splice(index, 1);
		setBoard(values);
	};

/*
	const handleRemove = id => {
		const removed = board.filter(recipe => recipe.id !== id);
		setBoard(removed);
	};
*/
	const handleRemoveAll = e => {
		e.preventDefault();
		setBoard([]);
	};

	// Search & filter

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
	};

	const glutenFilter = value => {
		if (
			(gluten === true && value.allergens.gluten === false) ||
			gluten === false
		) {
			return value;
		}
	};

	const eiFilter = value => {
		if ((ei === true && value.allergens.ei === false) || ei === false) {
			return value;
		}
	};

	const lupineFilter = value => {
		if (
			(lupine === true && value.allergens.lupine === false) ||
			lupine === false
		) {
			return value;
		}
	};

	const melkFilter = value => {
		if ((melk === true && value.allergens.melk === false) || melk === false) {
			return value;
		}
	};

	const mosterdFilter = value => {
		if (
			(mosterd === true && value.allergens.mosterd === false) ||
			mosterd === false
		) {
			return value;
		}
	};

	const notenFilter = value => {
		if (
			(noten === true && value.allergens.noten === false) ||
			noten === false
		) {
			return value;
		}
	};

	const pindaFilter = value => {
		if (
			(pinda === true && value.allergens.pinda === false) ||
			pinda === false
		) {
			return value;
		}
	};

	const schaaldierenFilter = value => {
		if (
			(schaaldieren === true && value.allergens.schaaldieren === false) ||
			schaaldieren === false
		) {
			return value;
		}
	};

	const selderFilter = value => {
		if (
			(selder === true && value.allergens.selder === false) ||
			selder === false
		) {
			return value;
		}
	};

	const sesamzaadFilter = value => {
		if (
			(sesamzaad === true && value.allergens.sesamzaad === false) ||
			sesamzaad === false
		) {
			return value;
		}
	};

	const sojaFilter = value => {
		if ((soja === true && value.allergens.soja === false) || soja === false) {
			return value;
		}
	};

	const sulfietFilter = value => {
		if (
			(sulfiet === true && value.allergens.sulfiet === false) ||
			sulfiet === false
		) {
			return value;
		}
	};

	const visFilter = value => {
		if ((vis === true && value.allergens.vis === false) || vis === false) {
			return value;
		}
	};

	const weekdierenFilter = value => {
		if (
			(weekdieren === true && value.allergens.weekdieren === false) ||
			weekdieren === false
		) {
			return value;
		}
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
				<h1 className={styles.title}>Wat gaan we deze week eten? </h1>
				<div ref={dropRef} className={styles.planning__container}>
					<div className={styles.planning__containerTitle}>Planning</div>
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
					<ul className={styles.recipe__list}>
						{board.map((recipe, index) => {
							return (
								<MovableRecipe
									index={index}
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
								setEnteredWord(e.target.value);
							}}
						/>
						<div>
							{searchTerm !== '' && (
								<FaTimes type='submit' onClick={clearInput} />
							)}
						</div>
					</div>
					<div>
						<Filter
							gluten={gluten}
							setGluten={setGluten}
							ei={ei}
							setEi={setEi}
							lupine={lupine}
							setLupine={setLupine}
							melk={melk}
							setMelk={setMelk}
							mosterd={mosterd}
							setMosterd={setMosterd}
							noten={noten}
							setNoten={setNoten}
							pinda={pinda}
							setPinda={setPinda}
							schaaldieren={schaaldieren}
							setSchaaldieren={setSchaaldieren}
							selder={selder}
							setSelder={setSelder}
							sesamzaad={sesamzaad}
							setSesamzaad={setSesamzaad}
							soja={soja}
							setSoja={setSoja}
							sulfiet={sulfiet}
							setSulfiet={setSulfiet}
							vis={vis}
							setVis={setVis}
							weekdieren={weekdieren}
							setWeekdieren={setWeekdieren}
						/>
					</div>
					<ul className={styles.recipe__list}>
						{recipesData
							.filter(search)
							.filter(glutenFilter)
							.filter(eiFilter)
							.filter(lupineFilter)
							.filter(melkFilter)
							.filter(mosterdFilter)
							.filter(notenFilter)
							.filter(pindaFilter)
							.filter(schaaldierenFilter)
							.filter(selderFilter)
							.filter(sesamzaadFilter)
							.filter(sojaFilter)
							.filter(sulfietFilter)
							.filter(visFilter)
							.filter(weekdierenFilter)
							.map(recipe => {
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
