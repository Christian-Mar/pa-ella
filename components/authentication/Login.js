import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLogin } from '../../hooks/useLogin';
import Modal from './Modal';
import PasswordReset from './PasswordReset';
import styles from '../../styles/SignUpIn.module.css';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showModal, setShowModal] = useState(false);
	const { error, login } = useLogin();

	const router = useRouter();

	const handleOnClickHome = e => {
		e.preventDefault();
		router.push('/');
	};

	const handleSubmit = e => {
		e.preventDefault();
		login(email, password);
		router.push('/');
	};

	return (
		<div className={styles.container}>
			<div className={styles.form__position}>
				<div className={styles.form__container}>
					<h2 className={styles.form__title}>Sign in</h2>
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

            <button className={styles.forgot__btn} onClick={() => setShowModal(true)}>Forgot password?</button>
						

						<button className={styles.form__button}>Submit</button>
						{error && <p>{error}</p>}
					</form>
				</div>

        <Modal title='Reset Password' show={showModal} onClose={() => {setShowModal(false)}}>
          <PasswordReset />
        </Modal>
			</div>
		</div>
	);
}
