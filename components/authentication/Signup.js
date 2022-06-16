import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSignup } from '../../hooks/useSignup';
import styles from '../../styles/SignUpIn.module.css';
import { userLoginSchema } from '../../validations/UserSignup';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const { error, signup } = useSignup();

	const router = useRouter();

	const handleSubmit = async(e) => {
		e.preventDefault();
		let formData = {
			email: e.target[0].value,
			password: e.target[1].value,
			displayName: e.target[2].value,
		};
		const isValid = await userLoginSchema.isValid(formData);
		await signup(email, password, displayName);
		if (isValid) {
			router.push('/');
		}
		
	};

	

	return (
		<div className={styles.container}>
			<div className={styles.form__position}>
				<div className={styles.form__container}>
					<h2 className={styles.form__title}>Maak een account</h2>
					<form onSubmit={handleSubmit} className={styles.form}>
						<label className={styles.form__label}>
							<span className={styles.form__labelTitle}>Email</span>
							<input
								required
								type='email'
								onChange={e => setEmail(e.target.value)}
								value={email}
								className={styles.form__labelInput}
							/>
						</label>
						<label className={styles.form__label}>
							<span className={styles.form__labelTitle}>Paswoord</span>
							<input
								required
								type='password'
								onChange={e => setPassword(e.target.value)}
								value={password}
								className={styles.form__labelInput}
							/>
						</label>
						<label className={styles.form__label}>
							<span className={styles.form__labelTitle}>Naam</span>
							<input
								required
								type='text'
								onChange={e => setDisplayName(e.target.value)}
								value={displayName}
								className={styles.form__labelInput}
							/>
						</label>
						<button className={styles.form__button}>Bevestig</button>
						{error && <p>{error}</p>}
					</form>
				</div>
			</div>
		</div>
	);
}
