import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {

  const { dispatch } = useAuthContext();

  // it's only the person who's logged in that we log out, so 'auth' is enough

  const logout = () => {
    signOut(auth)
    .then(() => {
      dispatch({ type: 'LOGOUT'})
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  return { logout }

}