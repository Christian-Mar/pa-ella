import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSignup } from '../../hooks/useSignup';

import styles from '../../styles/SignUpIn.module.css';


export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { error, signup } = useSignup();

	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		signup(email, password);
		router.push('/');
	};

	return (
		<div className={styles.container}>
		
			<div className={styles.form__position}>
				<div className={styles.form__container}>
					<h2 className={styles.form__title}>Sign up</h2>
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
							<span className={styles.form__labelTitle}>Password</span>
							<input
								required
								type='password'
								onChange={e => setPassword(e.target.value)}
								value={password}
								className={styles.form__labelInput}
							/>
						</label>
						<button className={styles.form__button}>Submit</button>
						{error && <p>{error}</p>}
					</form>
				</div>
			</div>
		</div>
	);
}
