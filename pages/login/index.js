import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLogin } from '../../hooks/useLogin'
import styles from '../../styles/SignUpIn.module.css';
import Navbar from '../../components/nav/Navbar';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const { error, login} = useLogin();

	const router = useRouter();

	const handleOnClickHome = e => {
		e.preventDefault();
		router.push('/');
	};

	const handleSubmit = e => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.form__position}>
				<div className={styles.form__container}>

					<div className={styles.form__goBack} onClick={handleOnClickHome}>
						<Link href='/' >
							<a>X</a>
						</Link>
					</div>
				
					<h2 className={styles.form__title}>Aanmelden</h2>
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
						<label className={styles.form__label}>
							<span className={styles.form__labelTitle}>Wachtwoord</span>
							<input
								required
								type='password'
								onChange={e => setPassword(e.target.value)}
								value={password}
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
