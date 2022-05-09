import { useState, useEffect } from 'react';
import styles from '../../styles/CreateRecipe.module.css';




const Ingredients = ({ ingredients, updateForm }) => {

	const [ingredientValues, setIngredientValues] = useState([
		{ ingredient: '', amount: '', unit: '' },
	]);

	console.log(ingredientValues);

	useEffect(() => {
		updateForm('ingredients', ingredientValues);
	}, [
		ingredientValues
	])

	const handleChangeInput = (index, e) => {
		const values = [...ingredientValues];
		ingredientValues[index][e.target.name] = e.target.value;
		setIngredientValues(values);
	};

	const handleAddField = (e) => {
		e.preventDefault();
		setIngredientValues([
			...ingredientValues,
			{
				ingredient: '',
				amount: '',
				unit: '',
			},
		]);
	};

	const handleRemoveField = (index) => {
		const values = [...ingredientValues];
		values.splice(index, 1);
		setIngredientValues(values);
	};
	
	return (
		<div>
			<h3 className={styles.label}>Ingredients component </h3>
			<div>
				{ingredientValues.map((ingredientValues, index) => (
					<div key={index}>
						<input
							type='text'
							name='ingredient'
							placeholder='ingredient'
							value={ingredientValues.ingredient}
							onChange={e => handleChangeInput(index, e)}
							className={styles.form__inputFieldIngredients}
						/>
						<input
							type='text'
							name='amount'
							placeholder='amount'
							value={ingredientValues.amount}
							onChange={e => handleChangeInput(index, e)}
							className={styles.form__inputFieldIngredients}
						/>
						<input
							type='text'
							name='unit'
							placeholder='unit'
							value={ingredientValues.unit}
							onChange={e => handleChangeInput(index, e)}
							className={styles.form__inputFieldIngredients}
						/>
						<button onClick={() => handleRemoveField(index)} className={styles.IngredientsButton}>-</button>
						<button onClick={handleAddField} className={styles.IngredientsButton}>+</button>
					</div>
				))}
				
			</div>
		</div>
	);
};

export default Ingredients;
