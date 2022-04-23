import styles from '../../styles/CreateRecipe.module.css';

const Category = ({ category, updateForm }) => {
	return (
		<div>
			<div className={styles.form__radio}>
				<h3 className={styles.form__radioTitle}>Category: </h3>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={updateForm}
						value='breakfast'
						checked={category == 'breakfast'}
						id='breakfast'
					/>
					<label className={styles.form__radioLabel} htmlFor='breakfast'>
						breakfast
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={updateForm}
						value='lunch'
						checked={category == 'lunch'}
						id='lunch'
					/>
					<label className={styles.form__radioLabel} htmlFor='lunch'>
						lunch
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={updateForm}
						value='dessert'
						checked={category == 'dessert'}
						id='dessert'
					/>
					<label className={styles.form__radioLabel} htmlFor='dessert'>
						dessert
					</label>
				</div>
			</div>
		</div>
	);
};

export default Category;
