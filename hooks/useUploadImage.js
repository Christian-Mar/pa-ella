
import { storage } from '../firebase/config';
import { ref, uploadBytes } from 'firebase/storage';

export async function useUpload(file, user, setLoading) {
	const fileRef = ref(storage, user + '.png');
  setLoading(true);
  const snapshot = await uploadBytes(fileRef, file);
  setLoading(false); 
  alert('Uploaded file!')
}
