import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import EditRecipe from '../../components/recipeEdit/EditRecipe';
import Modal from '../../components/recipeEdit/Modal';
import styles from '../../styles/RecipeDetail.module.css';
import { db } from '../../firebase/config';
import { getDoc, doc, deleteDoc } from 'firebase/firestore';
import Comment from '../../components/recipeRating/Comment';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

// next.js  SSR

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
	const [recipeToEdit, setRecipeToEdit] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const recipeReadable = JSON.parse(recipeProps);
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

	return (
		<div>
			<Head>
				<title>pa'ella create</title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<div className={styles.buttonContainer}>
			{
				user && recipeReadable.userId === user.uid && (
					<button
						className={styles.submitButton}
						onClick={() => handleDelete(id)}
					>
						Verwijder mijn recept
					</button>
				)
				// this button is only visible for own recipes
			}

			{
				user && recipeReadable.userId === user.uid && (
					<button
						className={styles.submitButton}
						onClick={() => setShowModal(true)}
					>
						Wijzig mijn recept
					</button>
				)
				// this button is only visible for own recipes
			}</div>
			<Modal
				title='Breng wijzigingen aan in het recept'
				show={showModal}
				onClose={() => {
					setShowModal(false);
				}}
			>
				<EditRecipe
					recipeId={id}
					recipeToEdit={recipeToEdit}
					setRecipeToEdit={setRecipeToEdit}
					recipeReadable={recipeReadable}
					setShowModal={setShowModal}
				/></Modal>
			<div className={styles.container}>
				<h1 className={styles.title}>{recipeReadable.title}</h1>

				<div className={styles.image__container}>
					<div>
						<Image
							src={recipeReadable.image}
							alt='Dish'
							width={400}
							height={300}
							objectFit='cover'
						></Image>
					</div>
					<div>
						<h4 className={styles.ingredientData__title}>Ingrediënten</h4>
						<div>

							<ul className={styles.ingredients__list}>	
							{recipeReadable.ingredients?.map(ingredient => (
								<li key={uuidv4()} className={styles.ingredients__listItem}>
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
						</div>
						<div>
							<h4>Allergenen</h4>
						</div>
						<div className={styles.allergens}>
							<div>
								{recipeReadable.allergens.ei === true && (
									<p className={styles.allergens__item} key='ei'>
										ei
									</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.gluten === true && (
									<p className={styles.allergens__item}>gluten</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.lupine === true && <p>lupine</p>}
							</div>
							<div>
								{recipeReadable.allergens.melk === true && (
									<p className={styles.allergens__item}>melk</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.mosterd === true && (
									<p className={styles.allergens__item}>mosterd</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.noten === true && (
									<p className={styles.allergens__item}>noten</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.pinda === true && (
									<p className={styles.allergens__item}>pinda</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.schaaldieren === true && (
									<p className={styles.allergens__item}>schaaldieren</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.selder === true && (
									<p className={styles.allergens__item}>selder</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.sesamzaad === true && (
									<p className={styles.allergens__item}>sesamzaad</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.soja === true && (
									<p className={styles.allergens__item}>soja</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.sulfiet === true && (
									<p className={styles.allergens__item}>sulfiet</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.vis === true && (
									<p className={styles.allergens__item}>vis</p>
								)}
							</div>
							<div>
								{recipeReadable.allergens.weekdieren === true && (
									<p className={styles.allergens__item}>weekdieren</p>
								)}
							</div>
						</div>
						<h4>Bereidingstijd</h4>
						<p>{recipeReadable.methodTime}</p>
					</div>
				</div>
				<div>
					<p className={styles.method}>{recipeReadable.method}</p>
				</div>
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
