import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import { db } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import styles from '../../styles/CreateRecipe.module.css';
import Title from '../../components/recipeForm/Title'

const CreateRecipe = () => {

	const [recipe, setRecipe] = useState({
		title: '',
		category: '',
		description: '',
		
		
	});
	//const [count, setCount] = useState(1);
	console.log(recipe);
	const updateForm = e => {
		setRecipe({
			...recipe,
			[e.target.name]: e.target.value,
		});
	};

	

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await addDoc(collection(db, 'recipes'), {
				title: recipe.title,
				category: recipe.category,
				description: recipe.description,
				created: Timestamp.now(),
			});
			
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>pa'el-la create</title>
				<meta name='description' content='The recipe website' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1 className={styles.container__title}>Create Recipe</h1>

			<form onSubmit={handleSubmit} name='createRecipe'>
				<Title title={recipe.title} updateForm={updateForm}/>
				<h3 className={styles.form__radioTitle}>Title: </h3>
				<input
					type='text'
					name='title'
					onChange={updateForm}
					value={recipe.title}
					placeholder='new recipe'
					className={styles.form__inputField}
				/>
				<div className={styles.form__radio}>
					<h3 className={styles.form__radioTitle}>Category: </h3>
					<div className={styles.form__radioFieldContainer}>
						<input
							className={styles.form__radioField}
							type='radio'
							name='category'
							onChange={updateForm}
							value='breakfast'
							checked={recipe.category == 'breakfast'}
							id='breakfast'
						/>
						<label className={styles.form__radioLabel} htmlFor='breakfast'>
							breakfast
						</label>
						<input
							className={styles.form__radioField}
							type='radio'
							name='category'
							onChange={updateForm}
							value='lunch'
							checked={recipe.category == 'lunch'}
							id='lunch'
						/>
						<label className={styles.form__radioLabel} htmlFor='lunch'>
							lunch
						</label>
						<input
							className={styles.form__radioField}
							type='radio'
							name='category'
							onChange={updateForm}
							value='dessert'
							checked={recipe.category == 'dessert'}
							id='dessert'
						/>
						<label className={styles.form__radioLabel} htmlFor='dessert'>
							dessert
						</label>
					</div>
				</div>
				<button type='submit' className={styles.form__SubmitButton}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default CreateRecipe;
