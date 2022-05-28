import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import EditRecipe from '../../components/recipeEdit/EditRecipe'
import styles from '../../styles/RecipeDetail.module.css';
import { db } from '../../firebase/config';
import { getDoc, doc, deleteDoc } from 'firebase/firestore';
import Comment from '../../components/recipeRating/Comment';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useRouter } from 'next/router';

// next SSR 

export async function getServerSideProps(context) {
	const { params } = context;
	const recipeId = params.detail;
	const docRef = doc(db, 'recipes', recipeId);
	const docSnap = await getDoc(docRef);

	return {
		props: {
			id: recipeId,
			recipeProps: JSON.stringify(docSnap.data()) || null,
		},
	};
}

// detail page

const RecipeDetail = ({ id, recipeProps }) => {
	const [recipeToEdit, setRecipeToEdit] = useState(null)
	const recipeReadable = JSON.parse(recipeProps);
	console.log(recipeReadable);
	const { user } = useAuthContext();
	const router = useRouter();

	// delete recipe 
	const handleDelete = async id => {
		const recipeDocRef = doc(db, 'recipes', id);
		try {
			await deleteDoc(recipeDocRef);
			router.push('/');
		} catch (err) {
			alert(err);
		}
	};

	/* update 
	const handleUpdate = async id => {
		const recipeDocRef = doc(db, 'recipes', id);
		try {
			await updateDoc(recipeDocRef), data({merge: true});
			router.push('/');
		} catch (err) {
			alert(err);
		}
	};
*/

	return (
		<div>
			<Head>
				<title>pa'ella create</title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />

			{
				user && recipeReadable.userId === user.uid && (
					<button
						className={styles.submitButton}
						onClick={() => handleDelete(id)}
					>
						Verwijder
					</button>
				)
				// this button is only visible for own recipes
			}

			<EditRecipe
				recipeId={id}
				recipeToEdit={recipeToEdit}
				setRecipeToEdit={setRecipeToEdit}
				recipeReadable={recipeReadable}
			/>
			<div className={styles.container}>
				<h1 className={styles.title}>{recipeReadable.title}</h1>

				<div className={styles.image__container}>
					<Image
						src={recipeReadable.image}
						alt='Dish'
						width={400}
						height={300}
						objectFit='cover'
					></Image>
					<div>
						<h4>Ingrediënten</h4>
						<ul className={styles.ingredients__list}>
							{recipeReadable.ingredients?.map(ingredient => (
								<li
									key={ingredient.index}
									className={styles.ingredients__listItem}
								>
									<p className={styles.ingredients__listItemAmount}>
										{ingredient.amount}
									</p>
									<p className={styles.ingredients__listItemUnit}>
										{ingredient.unit}
									</p>
									<p className={styles.ingredients__listItemIngredient}>
										{ingredient.ingredient}
									</p>
								</li>
							))}
						</ul>
						<h4>Allergenen</h4>
						<div className={styles.allergens}>
							{recipeReadable.allergens.ei === true && (
								<p className={styles.allergens__item} key='ei'>
									ei
								</p>
							)}
							{recipeReadable.allergens.gluten === true && (
								<p className={styles.allergens__item}>gluten</p>
							)}
							{recipeReadable.allergens.lupine === true && <p>lupine</p>}
							{recipeReadable.allergens.melk === true && (
								<p className={styles.allergens__item}>melk</p>
							)}
							{recipeReadable.allergens.mosterd === true && (
								<p className={styles.allergens__item}>mosterd</p>
							)}
							{recipeReadable.allergens.noten === true && (
								<p className={styles.allergens__item}>noten</p>
							)}
							{recipeReadable.allergens.pinda === true && (
								<p className={styles.allergens__item}>pinda</p>
							)}
							{recipeReadable.allergens.schaaldieren === true && (
								<p className={styles.allergens__item}>schaaldieren</p>
							)}
							{recipeReadable.allergens.selder === true && (
								<p className={styles.allergens__item}>selder</p>
							)}
							{recipeReadable.allergens.sesamzaad === true && (
								<p className={styles.allergens__item}>sesamzaad</p>
							)}
							{recipeReadable.allergens.soja === true && (
								<p className={styles.allergens__item}>soja</p>
							)}
							{recipeReadable.allergens.sulfiet === true && (
								<p className={styles.allergens__item}>sulfiet</p>
							)}
							{recipeReadable.allergens.vis === true && (
								<p className={styles.allergens__item}>vis</p>
							)}
							{recipeReadable.allergens.weekdieren === true && (
								<p className={styles.allergens__item}>weekdieren</p>
							)}
						</div>
						<h4>Bereidingstijd</h4>
						<p>{recipeReadable.methodTime}</p>
					</div>
				</div>
				<p className={styles.method}>{recipeReadable.method}</p>
				<div className={styles.comments}>
					<h4 className={styles.ratingTitle}>...</h4>
					<Comment recipeId={id} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default RecipeDetail;
