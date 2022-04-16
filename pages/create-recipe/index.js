import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import { db } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import styles from '../../styles/CreateRecipe.module.css';

const CreateRecipe = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await addDoc(collection(db, 'recipes'), {
				title: title,
				description: description,
				created: Timestamp.now(),
			});
			setTitle('');
			setDescription('');
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
			<h1>Create Recipe</h1>
			<form onSubmit={handleSubmit} name='createRecipe'>
				<input
					type='text'
					name='title'
					onChange={e => setTitle(e.target.value)}
					value={title}
					placeholder='new recipe'
				/>
				<textarea
					onChange={e => setDescription(e.target.value)}
					placeholder='description'
					value={description}
				></textarea>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default CreateRecipe;
