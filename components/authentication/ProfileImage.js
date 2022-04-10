import Image from 'next/image';
import { useState, useEffect } from 'react';
//import { upload } from '../../firebase/config'; 
import { useUploadProfileImage} from '../../hooks/useUploadProfileImage';
import styles from '../../styles/Profile1.module.css';
import blankProfile from '../../public/images/blankProfile.png';
import { useAuthContext } from '../../hooks/useAuthContext';

const ProfileImage = () => {

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(blankProfile);

  const { user } = useAuthContext();
  

	const handleChange = (e) => {
    if (e.target.files[0]) {setPhoto(e.target.files[0])}
  };
  console.log(photoURL);

  const handleUpload = () => {
    //upload(photo, user, setLoading);
    useUploadProfileImage(photo, user, setLoading);
  };

  // user?.photoURL -> if both are not null

  useEffect(() => {
    if (user?.photoURL) {
    setPhotoURL(user.photoURL);
    } 
  }, [user])
  

	return (
		<div>
			<input type='file' onChange={handleChange} />
			<button type='submit' disabled={loading || !photo} onClick={handleUpload}>Upload</button>
      <Image src={photoURL} alt='Avatar' width={80} height={80} className={styles.avatar}/>
		</div>
	);
};

export default ProfileImage;
