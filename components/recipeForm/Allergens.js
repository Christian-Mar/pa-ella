import { useState, useEffect } from 'react';
import styles from '../../styles/CreateRecipe.module.css';

function Allergens({ updateForm, allergens }) {
	const [allergenValues, setAllergenValues] = useState(allergens);

	useEffect(() => {
		updateForm('allergens', allergenValues);
	}, [allergenValues]);

	const onChange = e => {
		setAllergenValues({ ...allergens, [e.target.value]: e.target.checked });
	};

	return (
		<>
			<h3 className={styles.label}>Allergenen: </h3>
			<div className={styles.form__radioFieldContainer}>
				<input
					type='checkbox'
					value='gluten'
					name='allergen'
					checked={allergenValues.gluten}
					onChange={onChange}
					className={styles.form__radioField}
					id='gluten'
				/>
				<label className={styles.form__radioLabel} htmlFor='gluten'>
					gluten
				</label>
				<input
					type='checkbox'
					value='ei'
					name='allergen'
					checked={allergenValues.ei}
					onChange={onChange}
					className={styles.form__radioField}
					id='ei'
				/>
				<label className={styles.form__radioLabel} htmlFor='ei'>
					ei
				</label>
				<input
					type='checkbox'
					value='vis'
					name='allergen'
					checked={allergenValues.vis}
					onChange={onChange}
					className={styles.form__radioField}
					id='vis'
				/>
				<label className={styles.form__radioLabel} htmlFor='vis'>
					vis
				</label>
				<input
					type='checkbox'
					value='pinda'
					name='allergen'
					checked={allergenValues.pinda}
					onChange={onChange}
					className={styles.form__radioField}
					id='pinda'
				/>
				<label className={styles.form__radioLabel} htmlFor='pinda'>
					pinda
				</label>
				<input
					type='checkbox'
					value='noten'
					name='allergen'
					checked={allergenValues.noten}
					onChange={onChange}
					className={styles.form__radioField}
					id='noten'
				/>
				<label className={styles.form__radioLabel} htmlFor='noten'>
					noten
				</label>
				<input
					type='checkbox'
					value='soja'
					name='allergen'
					checked={allergenValues.soja}
					onChange={onChange}
					className={styles.form__radioField}
					id='soja'
				/>
				<label className={styles.form__radioLabel} htmlFor='soja'>
					soja
				</label>
				<input
					type='checkbox'
					value='melk'
					name='allergen'
					checked={allergenValues.melk}
					onChange={onChange}
					className={styles.form__radioField}
					id='melk'
				/>
				<label className={styles.form__radioLabel} htmlFor='melk'>
					melk
				</label>
				<input
					type='checkbox'
					value='schaaldieren'
					name='allergen'
					checked={allergenValues.schaaldieren}
					onChange={onChange}
					className={styles.form__radioField}
					id='schaaldieren'
				/>
				<label className={styles.form__radioLabel} htmlFor='schaaldieren'>
					schaaldieren
				</label>
				<input
					type='checkbox'
					value='weekdieren'
					name='allergen'
					checked={allergenValues.weekdieren}
					onChange={onChange}
					className={styles.form__radioField}
					id='weekdieren'
				/>
				<label className={styles.form__radioLabel} htmlFor='weekdieren'>
					weekdieren
				</label>
				<input
					type='checkbox'
					value='selder'
					name='allergen'
					checked={allergenValues.selder}
					onChange={onChange}
					className={styles.form__radioField}
					id='selder'
				/>
				<label className={styles.form__radioLabel} htmlFor='selder'>
					selder
				</label>
				<input
					type='checkbox'
					value='mosterd'
					name='allergen'
					checked={allergenValues.mosterd}
					onChange={onChange}
					className={styles.form__radioField}
					id='mosterd'
				/>
				<label className={styles.form__radioLabel} htmlFor='mosterd'>
					mosterd
				</label>
				<input
					type='checkbox'
					value='sesamzaad'
					name='allergen'
					checked={allergenValues.sesamzaad}
					onChange={onChange}
					className={styles.form__radioField}
					id='sesamzaad'
				/>
				<label className={styles.form__radioLabel} htmlFor='sesamzaad'>
					sesamzaad
				</label>
				<input
					type='checkbox'
					value='sulfiet'
					name='allergen'
					checked={allergenValues.sulfiet}
					onChange={onChange}
					className={styles.form__radioField}
					id='sulfiet'
				/>
				<label className={styles.form__radioLabel} htmlFor='sulfiet'>
					sulfiet
				</label>
				<input
					type='checkbox'
					value='lupine'
					name='allergen'
					checked={allergenValues.lupine}
					onChange={onChange}
					className={styles.form__radioField}
					id='lupine'
				/>
				<label className={styles.form__radioLabel} htmlFor='lupine'>
					lupine
				</label>
			</div>
		</>
	);
}

export default Allergens;
