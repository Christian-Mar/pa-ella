import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { db, auth } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);

			if (!res) {
				throw new Error('Account aanmaken is niet gelukt');
			}
			await updateProfile(res.user, { displayName });
			await setDoc(doc(db, 'users', res.user.uid), {
				displayName,
			});
			dispatch({ type: 'LOGIN', payload: res.user });
			setIsPending(false);
			setError(null);
		} catch (err) {
			console.log(err.message);
			setError(err.message);
			setIsPending(false);
		}
	};

	return { error, isPending, signup };
};