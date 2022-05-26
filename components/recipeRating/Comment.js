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
	setDoc,
	Timestamp,
} from 'firebase/firestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from '../../styles/Comment.module.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


const Comment = ({recipeId}) => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	const [likes, setLikes] = useState([]);
	const [hasLiked, setHasLiked] = useState(false);
	const { user } = useAuthContext();

// comments 

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

	//likes

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, 'recipes', recipeId, 'likes'),
			snapshot => setLikes(snapshot.docs)
		);
	}, [db]);

	useEffect(() => {
		user &&	setHasLiked(likes.findIndex((like) => like.id === user.uid ) !== -1);
	}, [likes]);

	async function likePost() {
		if (hasLiked) {
			await deleteDoc(doc(db, 'recipes', recipeId, 'likes', user.uid));
		} else {
			await setDoc(doc(db, 'recipes', recipeId, 'likes', user.uid), {
				username: user.displayName,
			});
		}
	}

	return (
		<div>
			<div className={styles.heartContainer}>
				<div>
					<p>
						{likes.length > 0 && (
							<p>
								Dit gerecht heeft {likes.length} <FaHeart className={styles.filledHeart} /> veroverd
							</p>
						)}
					</p>
				</div>
				<div>
					{user && (
						<div>
							{hasLiked ? (
								<FaHeart onClick={likePost} className={styles.inputHeart} />
							) : (
								<FaRegHeart onClick={likePost} className={styles.inputHeart} />
							)}
						</div>
					)}
				</div>
			</div>
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
