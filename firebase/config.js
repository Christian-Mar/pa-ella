import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
};

// init firebase

const app = initializeApp(firebaseConfig);

// init firestore

const db = getFirestore(app);

//  init authentication

const auth = getAuth();

//  init storage

const storage = getStorage();

export async function upload(file, user, setLoading) {
	const fileRef = ref(storage, 'profileImages/' + user.uid + '.png');
	setLoading(true);
	const snapshot = await uploadBytes(fileRef, file); // till here, this is uploading to firebase storage
	const photoURL = await getDownloadURL(fileRef);

	//update for the user who's logged in
	updateProfile(user, { photoURL });
	setLoading(false);
	
}


export { db, auth, storage };