import styles from '../../styles/CreateRecipe.module.css';

const Method = ({ method, methodTime, updateForm }) => {
	const onChange = e => updateForm(e.target.name, e.target.value);
	return (
		<div>
			<h3 className={styles.label}>Bereiding: </h3>
			<textarea
				type='text'
				name='method'
				onChange={onChange}
				value={method}
				placeholder='Beschrijf eenvoudig de verschillende stappen om tot het gerecht te komen'
				className={styles.form__textAreaField}
			/>
			<h3 className={styles.label}>Actieve bereidingstijd: </h3>
			{methodTime}
			<select
				className={styles.form__selectField}
				onChange={onChange}
				defaultValue={'default'}
				name='methodTime'
				
			> <option value={'default'} disabled>Kies</option>
				<option value='max 20 minuten'>minder dan 20 min </option>
				<option value='25 minuten'>25 min</option>
				<option value='30 minuten'>30 min</option>
				<option value='35 minuten'>35 min</option>
				<option value='40 minuten'>40 min</option>
				<option value='45 minuten'>45 min</option>
				<option value='50 minuten'>50 min</option>
				<option value='55 minuten'>55 min</option>
				<option value='60 minute'>60 min</option>
				<option value='meer dan een uur'>more than 1 hour</option>
			</select>
		</div>
	);
};

export default Method;
