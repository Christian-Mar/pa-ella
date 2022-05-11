import { useState, useEffect } from 'react';
import styles from '../../styles/CreateRecipe.module.css';

function Allergens({ updateForm }) {
	const [allergens, setAllergens] = useState({
		gluten: false,
		ei: false,
		vis: false,
		pinda: false,
		noten: false,
		soja: false,
		melk: false,
		schaaldieren: false,
		weekdieren: false,
		selder: false,
		mosterd: false,
		sesamzaad: false,
    sulfiet: false,
    lupine: false,
	});

	useEffect(() => {
		updateForm('allergens', allergens);
	}, [allergens]);

	const onChange = e => {
		setAllergens({ ...allergens, [e.target.value]: e.target.checked });
	};

	return (
		<>
			<div className={styles.form__radioFieldContainer}>
				<input
					type='checkbox'
					value='gluten'
					name='allergen'
					checked={allergens.gluten}
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
					checked={allergens.ei}
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
					checked={allergens.vis}
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
					checked={allergens.pinda}
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
					checked={allergens.noten}
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
					checked={allergens.soja}
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
					checked={allergens.melk}
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
					checked={allergens.schaaldieren}
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
					checked={allergens.weekdieren}
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
					checked={allergens.selder}
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
					checked={allergens.mosterd}
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
					checked={allergens.sesamzaad}
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
					checked={allergens.sulfiet}
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
					checked={allergens.lupine}
					onChange={onChange}
					className={styles.form__radioField}
					id='lupine'
				/>
				<label className={styles.form__radioLabel} htmlFor='lupine'>
					lupine
				</label>
			</div>
			{/* 
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.language}</li>
				))}
			</ul>
    */}
		</>
	);
}

export default Allergens;
