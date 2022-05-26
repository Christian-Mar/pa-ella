import { useEffect, useState } from 'react';
import Image from 'next/image';
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
	Timestamp,
} from 'firebase/firestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useProfileImage } from '../../hooks/useProfileImage';
import styles from '../../styles/Comment.module.css';
import { connectStorageEmulator } from 'firebase/storage';

const Comment = ({recipeId}) => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	const { user } = useAuthContext();
/*
	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(
				collection(db, 'recipes', id, 'comments'),
				orderBy('timestamp', 'desc')
			),
			snapshot => {
				setComments(snapshot.docs);
			}
		);
	}, [db, id]);
*/
	async function sendComment(event) {
		event.preventDefault();
		const commentToSend = comment;
		setComment('');
		await addDoc(collection(db, 'recipes', recipeId, 'comments'), {
			comment: commentToSend,
			username: user.displayName,
			userImage: user.photoURL,
			created: Timestamp.now(),
		});
	}

	return (
		<div>
			{user && (
				<div className={styles.profileContainer}>
					<div>
						<Image
							src={user.photoURL}
							alt='avatar'
							width={30}
							height={30}
							className={styles.avatar}
						/>
					</div>
					<p className={styles.profileName}>{user.displayName}</p>
				</div>
			)}
			{comments.length > 0 && (
				<div>
					{comments.map(comment => (
						<div
							key={comment.data().id}
							
						>
							<img
								
								src={comment.data().userImage}
								alt='user-image'
							/>
							<p >{comment.data().username}</p>
							<p >{comment.data().comment}</p>
							
						</div>
					))}
				</div>
			)}
			{user && (
				<form>
					<input
						value={comment}
						onChange={event => setComment(event.target.value)}
						className='border-none flex-1 focus:ring-0'
						type='text'
						placeholder='Enter your comment...'
					/>
					<button
						type='submit'
						onClick={sendComment}
						disabled={!comment.trim()}
					>
						Post
					</button>
				</form>
			)}
		</div>
	);
};

export default Comment;
