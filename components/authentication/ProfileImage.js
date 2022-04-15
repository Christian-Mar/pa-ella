import Image from 'next/image';
import { useState, useEffect } from 'react';
import { upload } from '../../firebase/config'; 
//import { useUploadProfileImage} from '../../hooks/useUploadProfileImage';
import styles from '../../styles/ProfileImage.module.css';
import blankProfile from '../../public/images/blankProfile.png';
import { useAuthContext } from '../../hooks/useAuthContext';


const ProfileImage = () => {
	const [photo, setPhoto] = useState(null);
	const [loading, setLoading] = useState(false);
	const [photoURL, setPhotoURL] = useState(blankProfile);

  /*
  ********************************************
  profile img not rendering after loading
  try serversideprops or unique key in props
  ********************************************
  */

	const { user } = useAuthContext();

	const handleChange = e => {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
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
				<button
					type='submit'
					disabled={loading || !photo}
					onClick={handleUpload}
					className={styles.button}
				>
					Upload
				</button>
			</div>
		</div>
	);
};

export default ProfileImage;
