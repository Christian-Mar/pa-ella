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

	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(
				collection(db, 'recipes', recipeId, 'comments'),
				orderBy('created', 'asc')
			),
			snapshot => {
				setComments(snapshot.docs);
			}
		);
	}, [db, recipeId]);

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
			{comments.length > 0 && (
				<div>
					{comments.map(comment => (
						<div key={comment.data().id} className={styles.commentContainer}>
							<div className={styles.profileContainer}>
							<Image
								src={comment.data().userImage}
								alt='user-image'
								width={25}
								height={25}
								className={styles.avatar}
							/>
							<p className={styles.profileName}>{comment.data().username}</p>
							</div>
							<p className={styles.showComment}>{comment.data().comment}</p>
						</div>
					))}
				</div>
			)}
			<div className={styles.commentContainerInput}>
				{user && (
					<div className={styles.profileContainer}>
						<div>
							<Image
								src={user.photoURL}
								alt='avatar'
								width={25}
								height={25}
								className={styles.avatar}
							/>
						</div>
						<p className={styles.profileNameInput}>{user.displayName}</p>
					</div>
				)}

				{user && (
					<form className={styles.commentForm}>
						<input
							value={comment}
							onChange={event => setComment(event.target.value)}
							className={styles.inputComment}
							type='text'
							placeholder='geef je mening hier ...'
						/>
						<button
							type='submit'
							onClick={sendComment}
							disabled={!comment.trim()}
							className={styles.commentButton}
						>
							Verstuur
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Comment;
