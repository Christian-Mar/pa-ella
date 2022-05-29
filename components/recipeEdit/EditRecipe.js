import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
//import styles from './EditTask.module.css';

const EditRecipe = ({ recipeId, recipeReadable, setRecipeToEdit }) => {
	const [newTitle, setNewTitle] = useState(recipeReadable.title);
	const [newDescription, setNewDescription] = useState('');
console.log(recipeReadable.title)
	const handleEdit = async (recipeId) => {
		await updateDoc(doc(db, 'recipes', recipeId), 
		{
			title: newTitle,
			description: newDescription,
		});
	};
	//if (!task) return null;
	return (
		<div>
			<input
				type='text'
				defaultValue={recipeReadable.title}
				onChange={e => setNewTitle(e.target.value)}
			/>
			<input
				type='text'
				defaultValue={recipeReadable.method}
				placeholder='Beschrijving'
				onChange={e => {
					setNewDescription(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					handleEdit(recipeId);
					setRecipeToEdit(null);
				}}
			>
				Update
			</button>
		</div>
	);
};

export default EditRecipe;
