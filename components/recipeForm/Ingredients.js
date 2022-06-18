import { useState, useEffect } from 'react';
import styles from '../../styles/CreateRecipe.module.css';




const Ingredients = ({ updateForm, ingredients }) => {

	const [ingredientValues, setIngredientValues] = useState(ingredients);

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

	const handleRemoveField = (e, index) => {
		e.preventDefault();
		const values = [...ingredientValues];
		values.splice(index, 1);
		setIngredientValues(values);
	};
	
	return (
		<div>
			<h3 className={styles.label}>Ingredienten: </h3>
			<div>
				{ingredientValues.map((ingredientValues, index) => (
					<div key={index}>
						<input
							type='text'
							name='amount'
							placeholder='hoeveelheid'
							value={ingredientValues.amount}
							onChange={e => handleChangeInput(index, e)}
							className={styles.form__inputFieldIngredients}
							maxLength='10'
						/>
						<input
							type='text'
							name='unit'
							placeholder='eenheid'
							value={ingredientValues.unit}
							onChange={e => handleChangeInput(index, e)}
							className={styles.form__inputFieldIngredients}
							maxLength='15'
						/>
						<input
							type='text'
							name='ingredient'
							placeholder='ingredient'
							value={ingredientValues.ingredient}
							onChange={e => handleChangeInput(index, e)}
							className={styles.form__inputFieldIngredients}
							maxLength='25'
						/>
						<button
							onClick={(e) => handleRemoveField(e, index)}
							className={styles.IngredientsButton}
						>
							-
						</button>
						<button
							onClick={handleAddField}
							className={styles.IngredientsButton}
						>
							+
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Ingredients;
