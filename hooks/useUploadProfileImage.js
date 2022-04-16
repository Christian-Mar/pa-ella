import { updateProfile } from 'firebase/auth';
import { storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
//import { useAuthContext } from '../../hooks/useAuthContext';

export async function useUploadProfileImage(file, user, setLoading) {
  
	const fileRef = ref(storage, user.uid + '.png');
	setLoading(true);
	const snapshot = await uploadBytes(fileRef, file);

	const photoURL = await getDownloadURL(fileRef);

	//update for the user who's logged in
	updateProfile(user, { photoURL: photoURL });
	setLoading(false);
	//alert('Uploaded file!');
}
