import { useDropzone } from 'react-dropzone';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import {storage} from '../../firebase/config'

const RecipeImage = ({updateForm}) => {
	const [selectedImages, setSelectedImages] = useState([]);
	console.log('selectedImages', selectedImages);
/*
	useEffect(() => {
		updateForm('imageUrl', selectedImages);
	}, [selectedImages]);
*/
	//console.log('storage', storage);
	const onDrop = useCallback(acceptedFiles => {
		setSelectedImages(
			acceptedFiles.map(file =>
				Object.assign(file, { preview: URL.createObjectURL(file) })
			)
		);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	const selected_images = selectedImages?.map(file => (
		<div>
			<Image src={file.preview} alt='recipe image' width={240} height={240} />
		</div>
	));

	return (
		<div>
			<div
				style={{
					cursor: 'pointer',
					background: 'gray',
					height: '200px',
					border: '2px dashed blue',
				}}
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				<p>Drop the files here ...</p>
			</div>
			<input type="text" placeholder='Enter a name'/>
			<button>Post</button>
			{selected_images}
		</div>
	);
};

export default RecipeImage;

/*
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/ProfileImage.module.css';
import blankProfile from '../../public/images/blankProfile.png';
import { useRecipeImage } from '../../hooks/useRecipeImage';

const ProfileImage = ({ recipe, imageUpload }) => {
	const [photo, setPhoto] = useState(null);
	const [loading, setLoading] = useState(false);
	const [photoURL, setPhotoURL] = useState(blankProfile);

	const { upload } = useRecipeImage();
	
	const router = useRouter();

	// uploading file to 'photo' state
	const handleChange = e => {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
		}
	};

	// uploading photo to firebase storage
	const handleUpload = async () => {
		await upload(photo, setLoading); // state loading meezetten in hook - loading state return in de hook -> lijn 15 ook loading
		await imageUpload();
		setPhotoURL(photoURL || blankProfile);
	};

	

	// user?.photoURL -> if both are not null - the same as: user && user.photoURL

	useEffect(() => {
		if (photoURL) {
			setPhotoURL(photoURL);
		}
	}, []);

	console.log(photoURL);
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
						onClick={() => handleUpload()}
						className={styles.button}
					>
						Upload
					</button>
					
				</div>
			</div>
		</div>
	);
};

export default ProfileImage;
*/
