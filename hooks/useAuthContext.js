import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext) // state & dispatch

  if (!context) {
    throw Error('UseAuthContext must be inside an AuthContextProvider')
  }

  return context

}