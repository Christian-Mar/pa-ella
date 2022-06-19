import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import styles from '../../styles/SignUpIn.module.css';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const router = useRouter();

	const handleOnClickHome = e => {
		e.preventDefault();
		router.push('/');
	};

	const handleSubmit = e => {
		e.preventDefault();
		sendPasswordResetEmail(auth, email)
			.then(() => {
				alert('Er is een e-mail verzonden om uw paswoord te wijzigen');
				setMessage('Controleer je e-mail');
			})

			.catch(error => {
				alert('error');
				router.push('/');
			});
	};

	return (
		<div className={styles.container}>
			<div className={styles.form__position}>
				<div className={styles.form__container}>
					<form onSubmit={handleSubmit} className={styles.form}>
						<label className={styles.form__label}>
							<span className={styles.form__labelTitle}>E-mailadres</span>
							<input
								required
								type='email'
								onChange={e => setEmail(e.target.value)}
								value={email}
								className={styles.form__labelInput}
							/>
						</label>
					</form>

					<button className={styles.form__button}>Submit</button>
					{error && <p>{error}</p>}
					{message && <p>{message}</p>}
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
