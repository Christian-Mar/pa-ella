import { createContext, useReducer, useEffect } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';

//creating the context

export const AuthContext = createContext();

// to update the state in a different way

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: null };
		case 'AUTH_IS_READY':
			return { user: action.payload, authIsReady: true };
		default:
			return state;
	}
};

//creating a provider to wrap around the components (children)
export const AuthContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
	});

	//state & dispatch come from useReducer

  // check state when we visit the page
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, user => {
			dispatch({ type: 'AUTH_IS_READY', payload: user })
      //unsub();
		});
	}, []);

	

  console.log('AuthContext state', state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{ children }
		</AuthContext.Provider>
	);
};
