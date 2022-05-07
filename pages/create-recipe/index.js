import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import { db } from '../../firebase/config';
import { collection, addDoc, Timestamp, onSnapshot } from 'firebase/firestore';
import styles from '../../styles/CreateRecipe.module.css';
import Title from '../../components/recipeForm/Title';
import Category from '../../components/recipeForm/Category';
import Ingredients from '../../components/recipeForm/Ingredients';
import Method from '../../components/recipeForm/Method';
import { useAuthContext } from '../../hooks/useAuthContext';
//import RecipeImage from '../../components/recipeForm/RecipeImage';

const CreateRecipe = () => {
	
	const [imageUrl, setImageUrl] = useState(null); 

	const [recipe, setRecipe] = useState({
		title: '',
		category: '',
		ingredients: [],
		method: '',
		methodTime: '',
		image: '',
	});

	const [count, setCount] = useState(1);

	console.log(recipe);
	const { user } = useAuthContext();	

	const updateForm = (name, value) => {
		setRecipe({
			...recipe,
			//[e.target.name]: e.target.value,
			[name]: value,
		});
	};


	const handleSubmit = async e => {
		e.preventDefault();
		try {	
			console.log('in here');
			await addDoc(collection(db, 'recipes'), {
				title: recipe.title,
				category: recipe.category,
				ingredients: recipe.ingredients,
				method: recipe.method,
				methodTime: recipe.methodTime,
				image: recipe.image,
				userId: user.uid,
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
				<h4 className={styles.container__title}>Step {count} of 5</h4>

				<form  name='createRecipe'>
					{count === 1 ? (
						<div>
							<Title title={recipe.title} updateForm={updateForm} />
							<Category category={recipe.category} updateForm={updateForm} />
						</div>
					) : null}

					{count === 2 ? (
						<div>
							<Ingredients
								ingredients={recipe.ingredients}
								updateForm={updateForm}
							/>
						</div>
					) : null}

					{count === 3 ? (
						<div>
							<Method
								method={recipe.method}
								methodTime={recipe.methodTime}
								updateForm={updateForm}
							/>
						</div>
					) : null}

					{count === 4 ? <div>photo </div> : null}

					{count === 5 ? (
						<button className={styles.form__SubmitButton} onClick={handleSubmit} type='submit'>
							Submit
						</button>
					) : null}
				</form>
				<div className={styles.form__DirectionButtonContainer}>
					<button
						className={styles.form__DirectionButton}
						type='submit'
						onClick={() => setCount(count - 1)}
						disabled={count < 2}
					>
						&larr;
					</button>
					<button
						className={styles.form__DirectionButton}
						type='submit'
						onClick={() => setCount(count + 1)}
						disabled={count > 4}
					>
						&rarr;
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateRecipe;
