import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { db } from '../../firebase/config';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import styles from '../../styles/NameInput.module.css';

const NameInput = () => {

  const [name, setName] = useState('');
	const [profile, setProfile] = useState([]);
    const { user } = useAuthContext();

  	const handleSubmit = async (e) => {
			e.preventDefault();
			try {
				await addDoc(collection(db, 'users'), {
					user_id: user.uid,
					name: name,
				});
				setName('');
			} catch (err) {
				alert(err);
			}
	} 

	const userCollectionRef = collection(db, 'users');

  return (
		<div>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label className={styles.form__label}>
					<span className={styles.form__labelTitle}>Your name</span>
					<input
						required
						type='text'
						onChange={e => setName(e.target.value)}
						value={name}
						className={styles.form__labelInput}
					/>
				</label>
				<button className={styles.form__button}>Submit</button>
			</form>
			<div>
			{profile}
			</div>
			{name}
     
		</div>
	);
}

export default NameInput
