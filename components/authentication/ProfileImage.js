import Image from 'next/image';
import { useState, useEffect } from 'react';
import { upload } from '../../firebase/config';
import { useRouter } from 'next/router';
import styles from '../../styles/ProfileImage.module.css';
import blankProfile from '../../public/images/blankProfile.png';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDeleteProfile } from '../../hooks/useDeleteProfile';

const ProfileImage = ({deleteUser, time}) => {
	const [photo, setPhoto] = useState(null);
	const [loading, setLoading] = useState(false);
	const [photoURL, setPhotoURL] = useState(blankProfile);


	/*
  ********************************************
  profile img not rendering after loading
  try serversideprops or unique key in props
  ********************************************
  */

	const { deleteU } = useDeleteProfile();

	const { user } = useAuthContext();

	const router = useRouter();

	const handleChange = async (e) => {
		if (e.target.files[0]) {
			await setPhoto(e.target.files[0]);
			
		}
		
	};

	const handleUpload = () => {
		upload(photo, user, setLoading);
		
	};

	// user?.photoURL -> if both are not null

	useEffect(() => {
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
		}
	}, [user]);

	const handleOnClickDelete = e => {
		e.preventDefault();
		deleteUser();
		router.push('/');
	};

	return (
		<div>
			<div className={styles.ProfileImageContainer}>
				<Image
					src={photoURL}
					alt='Avatar'
					width={80}
					height={80}
					className={styles.avatar}
				/>
			</div>
			<div className={styles.ProfileImageContainer}>
				<input type='file' onChange={handleChange} className={styles.input} />
				<div className={styles.buttonContainer}>
					<button
						type='submit'
						disabled={loading || !photo}
						onClick={handleUpload}
						className={styles.button}
					>
						Upload
					</button>
					<div onClick={handleOnClickDelete}>
						<button type='submit' onClick={deleteU} className={styles.button}>
							Delete Profile
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileImage;
