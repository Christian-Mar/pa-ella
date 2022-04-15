import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import styles from '../../styles/NameInput.module.css';

const NameEdit = ({ task, setTaskToEdit }) => {
	const [newName, setNewName] = useState('');
	
  const { user } = useAuthContext();

	const handleEdit = async task => {
		await updateDoc(doc(db, 'users', user_id), {
			name: newName,
		});
	};
	if (!task) return null;
	return (
		<div >
			<input
				type='text'
				placeholder='Titel'
				onChange={e => setNewName(e.target.value)}
			/>
		
			<button
				className={styles.list_item_button}
				onClick={() => {
					handleEdit(task);
					//setTaskToEdit(null);
				}}
			>
				Update
			</button>
		</div>
	);
};

export default NameEdit;
