import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import { useAuthContext } from '../../hooks/useAuthContext';


const Comment = () => {

  const { user } = useAuthContext();

	return <div></div>;
};

export default Comment;
