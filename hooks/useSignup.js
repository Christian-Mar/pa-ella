import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      dispatch({ type: 'LOGIN', payload: res.user });
    })
    .catch((err) => {
      setError(err.message)
    })
  }

  return { error, signup } 
  // the two things we need from other components to use this hook 
}


