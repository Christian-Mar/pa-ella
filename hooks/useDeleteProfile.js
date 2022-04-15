import { auth } from '../firebase/config';
import { deleteUser } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useDeleteProfile = () => {
	const { dispatch } = useAuthContext();
  const user = auth.currentUser;
	// it's only the person who's logged in that we log out, so 'auth' is enough
  console.log(auth);
	const deleteU = () => {
		deleteUser(user)
			.then(() => {
				dispatch({ type: 'LOGOUT' });
			})
			.catch(err => {
				console.log(err.message);
			});
	};

	return { deleteU };
};
