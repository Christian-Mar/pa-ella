import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import { db } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import styles from '../../styles/CreateRecipe.module.css';
import Title from '../../components/recipeForm/Title';
import Category from '../../components/recipeForm/Category';

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
			<div className={styles.form__container}>
				<h1 className={styles.container__title}>Create Recipe</h1>

				<form onSubmit={handleSubmit} name='createRecipe'>
					<Title title={recipe.title} updateForm={updateForm} />
					<Category category={recipe.category} updateForm={updateForm} />
					<button type='submit' className={styles.form__SubmitButton}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateRecipe;
