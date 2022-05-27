import styles from '../../styles/CreateRecipe.module.css';

const Category = ({ category, updateForm}) => {
	const onChange=(e) => updateForm(e.target.name, e.target.value)
	return (
		<div>
			<div className={styles.form__radio}>
				<h3 className={styles.label}>Category: </h3>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='ontbijt'
						checked={category === 'ontbijt'}
						id='ontbijt'
					/>
					<label className={styles.form__radioLabel} htmlFor='ontbijt'>
						ontbijt
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='soep'
						checked={category === 'soep'}
						id='soep'
					/>
					<label className={styles.form__radioLabel} htmlFor='soep'>
						soep
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='voorgerecht'
						checked={category === 'voorgerecht'}
						id='voorgerecht'
					/>
					<label className={styles.form__radioLabel} htmlFor='voorgerecht'>
						voorgerecht
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='salade'
						checked={category === 'salade'}
						id='salade'
					/>
					<label className={styles.form__radioLabel} htmlFor='salade'>
						salade
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='snack'
						checked={category === 'snack'}
						id='snack'
					/>
					<label className={styles.form__radioLabel} htmlFor='snack'>
						snack
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='maaltijd'
						checked={category === 'maaltijd'}
						id='maaltijd'
					/>
					<label className={styles.form__radioLabel} htmlFor='maaltijd'>
						maaltijd
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='dessert'
						checked={category === 'dessert'}
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
