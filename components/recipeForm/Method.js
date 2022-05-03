import styles from '../../styles/CreateRecipe.module.css';

const Method = ({ method, updateForm }) => {
	const onChange = e => updateForm(e.target.name, e.target.value);
	return (
		<div>
			<h3 className={styles.label}>Preparation: </h3>
			<textarea
				type='text'
				name='method'
				onChange={onChange}
				value={method}
				placeholder='Decribe the preparation'
				className={styles.form__textAreaField}
			/>
			<h3 className={styles.label}>Preparation time: </h3>
			<select
				className={styles.form__selectField}
				onChange={onChange}
				name='methodTime'
			>
				<option value='max 20 minutes'>less than 20 min </option>
				<option value='25 minutes'>20-25 min</option>
				<option value='30 minutes'>25-30 min</option>
				<option value='35 minutes'>30-35 min</option>
				<option value='40 minutes'>35-40 min</option>
				<option value='45 minutes'>40-45 min</option>
				<option value='50 minutes'>45-50 min</option>
				<option value='55 minutes'>50-55 min</option>
				<option value='60 minutes'>55-60 min</option>
				<option value='more than 1 hour'>more than 1 hour</option>
			</select>
		</div>
	);
};

export default Method;
