import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
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
		ingredients: [{ ingredient: '', amount: '', unit: '' }],
		allergens: {
			gluten: false,
			ei: false,
			vis: false,
			pinda: false,
			noten: false,
			soja: false,
			melk: false,
			schaaldieren: false,
			weekdieren: false,
			selder: false,
			mosterd: false,
			sesamzaad: false,
			sulfiet: false,
			lupine: false,
		},
		method: '',
		methodTime: '',
		image: '',
	});

	const [count, setCount] = useState(1);

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
				<h1 className={styles.container__title}>Creëer een recept</h1>

				<div className={styles.form__DirectionButtonContainer}>
					<button
						className={styles.form__DirectionButton}
						type='submit'
						onClick={() => setCount(count - 1)}
						disabled={count < 2}
					>
						&larr;
					</button>
					<h4 className={styles.container__title}>Stap {count} van 5</h4>
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
							<Allergens allergens={recipe.allergens} updateForm={updateForm} />
						</div>
					) : null}

					{count === 5 ? (
						<div className={styles.form__submitContainer}>
							<h3 className={styles.label}>Foto toevoegen: </h3>
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
								Bevestig
							</button>
						</div>
					) : null}
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default CreateRecipe;
