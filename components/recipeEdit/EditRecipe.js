import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

//import styles from './EditTask.module.css';

const EditRecipe = ({ recipeId, recipeReadable, setRecipeToEdit }) => {
	const [newTitle, setNewTitle] = useState(recipeReadable.title);
	const [newDescription, setNewDescription] = useState('');
	const [newCategory, setNewCategory] = useState(recipeReadable.category);
	const [newIngredients, setNewIngredients] = useState(recipeReadable.ingredients);
	console.log(newIngredients)
	

	const handleEdit = async recipeId => {
		await updateDoc(doc(db, 'recipes', recipeId), {
			title: newTitle,
			category: newCategory,
			description: newDescription,
			ingredients: newIngredients,
			// add 
		});
	};

	const handleChangeInput = (index, e) => {
		const values = [...newIngredients];
		newIngredients[index][e.target.name] = e.target.value;
		setNewIngredients(values);
	};

	const handleAddField = e => {
		e.preventDefault();
		setNewIngredients([
			...newIngredients,
			{
				ingredient: '',
				amount: '',
				unit: '',
			},
		]);
	};

	const handleRemoveField = (index) => {
		const values = [...newIngredients];
		values.splice(index, 1);
		setNewIngredients(values);
	};
	
	return (
		<div>
			<input
				type='text'
				value={newTitle}
				onChange={e => setNewTitle(e.target.value)}
			/>
			<div>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='ontbijt'
					checked={newCategory === 'ontbijt'}
					id='ontbijt'
				/>
				<label htmlFor='ontbijt'>ontbijt</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='soep'
					checked={newCategory === 'soep'}
					id='soep'
				/>
				<label htmlFor='soep'>soep</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='voorgerecht'
					checked={newCategory === 'voorgerecht'}
					id='voorgerecht'
				/>
				<label htmlFor='soep'>voorgerecht</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='salade'
					checked={newCategory === 'salade'}
					id='salade'
				/>
				<label htmlFor='salade'>salade</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='snack'
					checked={newCategory === 'snack'}
					id='snack'
				/>
				<label htmlFor='snack'>snack</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='maaltijd'
					checked={newCategory === 'maaltijd'}
					id='maaltijd'
				/>
				<label htmlFor='maaltijd'>maaltijd</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='dessert'
					checked={newCategory === 'dessert'}
					id='dessert'
				/>
				<label htmlFor='dessert'>dessert</label>
			</div>
			<div>
				{newIngredients.map((newIngredients, index) => (
					<div key={index}>
						<input
							type='text'
							name='amount'
							placeholder='hoeveelheid'
							value={newIngredients.amount}
							onChange={e => handleChangeInput(index, e)}
						/>
						<input
							type='text'
							name='unit'
							placeholder='eenheid'
							value={newIngredients.unit}
							onChange={e => handleChangeInput(index, e)}
						/>
						<input
							type='text'
							name='ingredient'
							placeholder='ingredient'
							value={newIngredients.ingredient}
							onChange={e => handleChangeInput(index, e)}
						/>
						<button onClick={() => handleRemoveField(index)}>-</button>
						<button onClick={handleAddField}>+</button>
					</div>
				))}
			</div>
			<textarea
				type='text'
				value={recipeReadable.method}
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
