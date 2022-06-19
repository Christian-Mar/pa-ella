import styles from '../../styles/Filter.module.css';

const Filter = ({
	gluten,
	setGluten,
	ei,
	setEi,
	lupine,
	setLupine,
  melk,
  setMelk, mosterd,
  setMosterd, noten, setNoten, pinda, setPinda, schaaldieren, setSchaaldieren, selder, setSelder, sesamzaad, setSesamzaad, soja, setSoja, sulfiet, setSulfiet, vis, setVis, weekdieren, setWeekdieren
}) => {
	return (
		<>
			<p className={styles.instruction}>
				Click op het allergeen om de recepten met het allergeen uit  de
				onderstaande lijst te halen:
			</p>
			<div className={styles.allergenContainer}>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='gluten'
						name='allergen'
						checked={gluten}
						onChange={() => setGluten(!gluten)}
						id='gluten'
					/>
					<label className={styles.form__radioLabel} htmlFor='gluten'>
						gluten
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='ei'
						name='allergen'
						checked={ei}
						onChange={() => setEi(!ei)}
						id='ei'
					/>
					<label className={styles.form__radioLabel} htmlFor='ei'>
						ei
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='lupine'
						name='allergen'
						checked={lupine}
						onChange={() => setLupine(!lupine)}
						id='lupine'
					/>
					<label className={styles.form__radioLabel} htmlFor='lupine'>
						lupine
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='melk'
						name='allergen'
						checked={melk}
						onChange={() => setMelk(!melk)}
						id='melk'
					/>
					<label className={styles.form__radioLabel} htmlFor='melk'>
						melk
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='mosterd'
						name='allergen'
						checked={mosterd}
						onChange={() => setMosterd(!mosterd)}
						id='mosterd'
					/>
					<label className={styles.form__radioLabel} htmlFor='mosterd'>
						mosterd
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='noten'
						name='allergen'
						checked={noten}
						onChange={() => setNoten(!noten)}
						id='noten'
					/>
					<label className={styles.form__radioLabel} htmlFor='noten'>
						noten
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='pinda'
						name='allergen'
						checked={pinda}
						onChange={() => setPinda(!pinda)}
						id='pinda'
					/>
					<label className={styles.form__radioLabel} htmlFor='pinda'>
						pinda
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='schaaldieren'
						name='allergen'
						checked={schaaldieren}
						onChange={() => setSchaaldieren(!schaaldieren)}
						id='schaaldieren'
					/>
					<label className={styles.form__radioLabel} htmlFor='schaaldieren'>
						schaaldieren
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='selder'
						name='allergen'
						checked={selder}
						onChange={() => setSelder(!selder)}
						id='selder'
					/>
					<label className={styles.form__radioLabel} htmlFor='selder'>
						selder
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='sesamzaad'
						name='allergen'
						checked={sesamzaad}
						onChange={() => setSesamzaad(!sesamzaad)}
						id='sesamzaad'
					/>
					<label className={styles.form__radioLabel} htmlFor='sesamzaad'>
						sesamzaad
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='soja'
						name='allergen'
						checked={soja}
						onChange={() => setSoja(!soja)}
						id='soja'
					/>
					<label className={styles.form__radioLabel} htmlFor='soja'>
						soja
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='sulfiet'
						name='allergen'
						checked={sulfiet}
						onChange={() => setSulfiet(!sulfiet)}
						id='sulfiet'
					/>
					<label className={styles.form__radioLabel} htmlFor='sulfiet'>
						sulfiet
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='vis'
						name='allergen'
						checked={vis}
						onChange={() => setVis(!vis)}
						id='vis'
					/>
					<label className={styles.form__radioLabel} htmlFor='vis'>
						vis
					</label>
				</div>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='checkbox'
						value='weekdieren'
						name='allergen'
						checked={weekdieren}
						onChange={() => setWeekdieren(!weekdieren)}
						id='weekdieren'
					/>
					<label className={styles.form__radioLabel} htmlFor='weekdieren'>
						weekdieren
					</label>
				</div>
			</div>
		</>
	);
};

export default Filter;
