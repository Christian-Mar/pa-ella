import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import styles from '../../styles/SignUpIn.module.css';
import Navbar from '../../components/nav/Navbar';

const forgotPassword = () => {

	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

  const router = useRouter();

	const handleOnClickHome = e => {
		e.preventDefault();
		router.push('/');
	};

  const handleSubmit = e => {
		e.preventDefault()
		 sendPasswordResetEmail(auth, email).then(() => {
			alert('Password reset email sent');
			setMessage("check your email");
      })

		.catch((error) => {alert('error'); 
		router.push('/');}
		)
	};
  
  

	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.form__position}>
				<div className={styles.form__container}>
					<div className={styles.form__goBack} onClick={handleOnClickHome}>
						<Link href='/'>
							<a>X</a>
						</Link>
					</div>

					<h2 className={styles.form__title}>Nieuw wachtwoord</h2>
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

						<button className={styles.form__button}>Bevestig</button>
						{/*error && <p>{error}</p>*/}
					</form>
				</div>
			</div>
		</div>
	);
};

export default forgotPassword;
