import styles from '../../styles/CreateRecipe.module.css';

const Title = ({ title, updateForm }) => {
	const onChange = e => updateForm(e.target.name, e.target.value);
	return (
		<div>
			<h3 className={styles.label}>Recipe name: </h3>
			<input
				type='text'
				name='title'
				onChange={onChange}
				value={title}
				placeholder='Carpaccio'
				className={styles.form__inputField}
			/>
		</div>
	);
};

export default Title;
