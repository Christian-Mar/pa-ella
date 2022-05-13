import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/nav/Navbar';
import { db, storage } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import styles from '../../styles/CreateRecipe.module.css';
import Title from '../../components/recipeForm/Title';
import Category from '../../components/recipeForm/Category';
import Ingredients from '../../components/recipeForm/Ingredients';
import Method from '../../components/recipeForm/Method';
import { useAuthContext } from '../../hooks/useAuthContext';
import Allergens from '../../components/recipeForm/Allergens';

const CreateRecipe = () => {
	const [imageUrl, setImageUrl] = useState('/images/plate.png');
	const [recipe, setRecipe] = useState({
		title: '',
		category: '',
		ingredients: [],
		allergens: [],
		method: '',
		methodTime: '',
		image: '',
	});

	const [count, setCount] = useState(1);

	console.log(recipe);
	const { user } = useAuthContext();
	const router = useRouter();

	const updateForm = (name, value) => {
		setRecipe({
			...recipe,
			[name]: value,
		});
	};

	const uploadFile = async e => {
		let file = e.target.files[0];
		// create reference
		let fileRef = ref(storage, 'recipeImages/' + Date.now() + file.name);
		// create uploadtask
		const uploadTask = await uploadBytesResumable(fileRef, file);
		const photoURL = await getDownloadURL(fileRef).then(url => {
			setImageUrl(url);
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
				allergens: recipe.allergens,
				method: recipe.method,
				methodTime: recipe.methodTime,
				image: imageUrl,
				userId: user.uid,
				created: Timestamp.now(),
			});
			router.push('/');
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

				<div className={styles.form__DirectionButtonContainer}>
					<button
						className={styles.form__DirectionButton}
						type='submit'
						onClick={() => setCount(count - 1)}
						disabled={count < 2}
					>
						&larr;
					</button>
					<h4 className={styles.container__title}>Step {count} of 5</h4>
					<button
						className={styles.form__DirectionButton}
						type='submit'
						onClick={() => setCount(count + 1)}
						disabled={count > 4}
					>
						&rarr;
					</button>
				</div>
				<form name='createRecipe'>
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
							{recipe.methodTime}
							<Method
								method={recipe.method}
								methodTime={recipe.methodTime}
								updateForm={updateForm}
							/>
						</div>
					) : null}

					{count === 4 ? (
						<div>
							<Allergens updateForm={updateForm} />
						</div>
					) : null}

					{count === 5 ? (
						<div className={styles.form__submitContainer}>
							<div className={styles.form__imageContainer}>
								<div className={styles.image__dish}>
									<Image
										src={imageUrl}
										alt='Dish'
										width={600}
										height={400}
										objectFit='cover'
									/>
								</div>

								<input type='file' onChange={uploadFile} />
							</div>
							<button
								className={styles.form__SubmitButton}
								onClick={handleSubmit}
								type='submit'
							>
								Submit
							</button>
						</div>
					) : null}
				</form>
			</div>
		</div>
	);
};

export default CreateRecipe;
