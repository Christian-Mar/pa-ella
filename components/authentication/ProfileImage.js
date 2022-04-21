import Image from 'next/image';
import { useState, useEffect } from 'react';
import { upload } from '../../firebase/config';
import { useRouter } from 'next/router';
import styles from '../../styles/ProfileImage.module.css';
import blankProfile from '../../public/images/blankProfile.png';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDeleteProfile } from '../../hooks/useDeleteProfile';

const ProfileImage = ({ deleteUser, imageUpload }) => {
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

	// uploading file to 'photo' state
	const handleChange = e => {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
			
		}
	
	};

	// uploading photo to firebase storage
	const handleUpload = async () => {
		await upload(photo, user, setLoading);
		await imageUpload();
		await setPhotoURL(user.photoURL)
	};


	// delete entire profile - if time, make a second modal
	const handleOnClickDelete = e => {
		e.preventDefault();
		deleteUser();
		router.push('/');
	};

	// user?.photoURL -> if both are not null - the same as: user && user.photoURL

	useEffect(() => {
		if (user?.photoURL) {
			console.log(user.photoURL);
			setPhotoURL(user.photoURL);
		}
	}, [user]);

	return (
		<div>
			<div className={styles.ProfileImageContainer}>
				<Image
					src={photoURL}
					alt='Avatar'
					width={140}
					height={140}
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
							Delete My Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileImage;
