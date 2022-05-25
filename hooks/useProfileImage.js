import {  auth, storage } from '../firebase/config';
import {  updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const useProfileImage = () => {

  const user = auth.currentUser;

	async function upload(file, user, setLoading) {
		//console.log(user);
		const fileRef = ref(storage, 'profileImages/' + user.uid + '.png');
		setLoading(true);
		const snapshot = await uploadBytes(fileRef, file); // till here, this is uploading to firebase storage
		const photoURL = await getDownloadURL(fileRef);
		//update for the user who's logged in
		await updateProfile(user, { photoURL });
		await setLoading(false);
		return photoURL 
	}

	return { upload };
};
