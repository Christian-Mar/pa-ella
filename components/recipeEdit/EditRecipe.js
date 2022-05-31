import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

//import styles from './EditTask.module.css';

const EditRecipe = ({ recipeId, recipeReadable, setRecipeToEdit }) => {
	const [newTitle, setNewTitle] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const [newCategory, setNewCategory] = useState('');
	const [newIngredients, setNewIngredients] = useState(recipeReadable.ingredients);
	//const [ingredientValues, setIngredientValues] = useState(recipeReadable.ingredients);

	console.log(newIngredients);

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
		setNewIngredients[index][e.target.name] = e.target.value;
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
				defaultValue={recipeReadable.title}
				onChange={e => setNewTitle(e.target.value)}
			/>
			<div>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					defaultValue={recipeReadable.category}
					checked={recipeReadable.category === 'ontbijt'}
					id='ontbijt'
				/>
				<label htmlFor='ontbijt'>ontbijt</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					defaultValue={recipeReadable.category}
					checked={recipeReadable.category === 'soep'}
					id='soep'
				/>
				<label htmlFor='soep'>soep</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					defaultValue={recipeReadable.category}
					checked={recipeReadable.category === 'voorgerecht'}
					id='voorgerecht'
				/>
				<label htmlFor='soep'>voorgerecht</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					defaultValue={recipeReadable.category}
					checked={recipeReadable.category === 'salade'}
					id='salade'
				/>
				<label htmlFor='salade'>salade</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					defaultValue={recipeReadable.category}
					checked={recipeReadable.category === 'snack'}
					id='snack'
				/>
				<label htmlFor='snack'>snack</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					defaultValue={recipeReadable.category}
					checked={recipeReadable.category === 'maaltijd'}
					id='maaltijd'
				/>
				<label htmlFor='maaltijd'>maaltijd</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					defaultValue={recipeReadable.category}
					checked={recipeReadable.category === 'dessert'}
					id='dessert'
				/>
				<label htmlFor='dessert'>dessert</label>
			</div>
			<div>
				{recipeReadable.ingredients.map((ingredients, index) => (
					<div key={index}>
						<input
							type='text'
							name='amount'
							placeholder='hoeveelheid'
							defaultValue={ingredients.amount}
							onChange={e => handleChangeInput(index, e)}
							
						/>
						<input
							type='text'
							name='unit'
							placeholder='eenheid'
							defaultValue={ingredients.unit}
							onChange={e => handleChangeInput(index, e)}
							
						/>
						<input
							type='text'
							name='ingredient'
							placeholder='ingredient'
							defaultValue={ingredients.ingredient}
							onChange={e => handleChangeInput(index, e)}
							
						/>
						<button
							onClick={() => handleRemoveField(index)}
							
						>
							-
						</button>
						<button
							onClick={handleAddField}
							
						>
							+
						</button>
					</div>
				))}
			</div>
			<textarea
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
