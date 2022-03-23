import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export const useLogout = () => {

  // it's only the person who's logged in that we log out, so 'auth' is enough

  const logout = () => {
    signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  return { logout }

}