import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';


//import styles from './EditTask.module.css';

const EditRecipe = ({ recipeId, recipeReadable, setRecipeToEdit }) => {
	const [newTitle, setNewTitle] = useState(recipeReadable.title);
	const [newMethod, setNewMethod] = useState(recipeReadable.method);
	const [newCategory, setNewCategory] = useState(recipeReadable.category);
	const [newIngredients, setNewIngredients] = useState(recipeReadable.ingredients);
	const [newMethodTime, setNewMethodTime] = useState(recipeReadable.methodTime);
	const [newAllergens, setNewAllergens] = useState(recipeReadable.allergens)
	const [newImage, setNewImage] = useState(recipeReadable.image)


	const handleEdit = async recipeId => {
		await updateDoc(doc(db, 'recipes', recipeId), {
			title: newTitle,
			category: newCategory,
			method: newMethod,
			ingredients: newIngredients,
			methodTime: newMethodTime,
			allergens: newAllergens,
			image: newImage
			// add 
		});
	};

	const handleChangeInput = (index, e) => {
		const values = [...newIngredients];
		newIngredients[index][e.target.name] = e.target.value;
		setNewIngredients(values);
	};

	const handleAddField = e => {
		e.preventDefault();
		setNewIngredients([
			...newIngredients,
			{
				ingredient: '',
				amount: '',
				unit: '',
			},
		]);
	};

	const handleRemoveField = (index) => {
		const values = [...newIngredients];
		values.splice(index, 1);
		setNewIngredients(values);
	};
	
	const onChangeAllergens = e => {
		setNewAllergens({...newAllergens, [e.target.value]: e.target.checked })
	}

	const uploadFile = async e => {
		let file = e.target.files[0];
		let fileRef = ref(storage, 'recipeImages/' + Date.now() + file.name);
		const uploadTask = await uploadBytesResumable(fileRef, file);
		const photoURL = await getDownloadURL(fileRef).then(url => {
			setNewImage(url);
		});
	};

	return (
		<div>
			<input
				type='text'
				value={newTitle}
				onChange={e => setNewTitle(e.target.value)}
			/>
			<div>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='ontbijt'
					checked={newCategory === 'ontbijt'}
					id='ontbijt'
				/>
				<label htmlFor='ontbijt'>ontbijt</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='soep'
					checked={newCategory === 'soep'}
					id='soep'
				/>
				<label htmlFor='soep'>soep</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='voorgerecht'
					checked={newCategory === 'voorgerecht'}
					id='voorgerecht'
				/>
				<label htmlFor='soep'>voorgerecht</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='salade'
					checked={newCategory === 'salade'}
					id='salade'
				/>
				<label htmlFor='salade'>salade</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='snack'
					checked={newCategory === 'snack'}
					id='snack'
				/>
				<label htmlFor='snack'>snack</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='maaltijd'
					checked={newCategory === 'maaltijd'}
					id='maaltijd'
				/>
				<label htmlFor='maaltijd'>maaltijd</label>
				<input
					type='radio'
					name='category'
					onChange={e => setNewCategory(e.target.value)}
					value='dessert'
					checked={newCategory === 'dessert'}
					id='dessert'
				/>
				<label htmlFor='dessert'>dessert</label>
			</div>
			<div>
				{newIngredients.map((newIngredients, index) => (
					<div key={index}>
						<input
							type='text'
							name='amount'
							placeholder='hoeveelheid'
							value={newIngredients.amount}
							onChange={e => handleChangeInput(index, e)}
						/>
						<input
							type='text'
							name='unit'
							placeholder='eenheid'
							value={newIngredients.unit}
							onChange={e => handleChangeInput(index, e)}
						/>
						<input
							type='text'
							name='ingredient'
							placeholder='ingredient'
							value={newIngredients.ingredient}
							onChange={e => handleChangeInput(index, e)}
						/>
						<button onClick={() => handleRemoveField(index)}>-</button>
						<button onClick={handleAddField}>+</button>
					</div>
				))}
			</div>
			<textarea
				type='text'
				value={newMethod}
				placeholder='Beschrijving'
				onChange={e => {
					setNewMethod(e.target.value);
				}}
			/>
			<select
				onChange={e => {
					setNewMethodTime(e.target.value);
				}}
				value={newMethodTime}
				name='methodTime'
			>
				<option value={'default'} disabled>
					Kies
				</option>
				<option value='max 20 minuten'>minder dan 20 min </option>
				<option value='25 minuten'>25 min</option>
				<option value='30 minuten'>30 min</option>
				<option value='35 minuten'>35 min</option>
				<option value='40 minuten'>40 min</option>
				<option value='45 minuten'>45 min</option>
				<option value='50 minuten'>50 min</option>
				<option value='55 minuten'>55 min</option>
				<option value='60 minute'>60 min</option>
				<option value='meer dan een uur'>more than 1 hour</option>
			</select>
			<div>
				<input
					type='checkbox'
					value='gluten'
					name='allergen'
					checked={newAllergens.gluten}
					onChange={onChangeAllergens}
					id='gluten'
				/>
				<label htmlFor='gluten'>gluten</label>
				<input
					type='checkbox'
					value='ei'
					name='allergen'
					checked={newAllergens.ei}
					onChange={onChangeAllergens}
					id='ei'
				/>
				<label htmlFor='ei'>ei</label>
				<input
					type='checkbox'
					value='vis'
					name='allergen'
					checked={newAllergens.vis}
					onChange={onChangeAllergens}
					id='vis'
				/>
				<label htmlFor='vis'>vis</label>
				<input
					type='checkbox'
					value='pinda'
					name='allergen'
					checked={newAllergens.pinda}
					onChange={onChangeAllergens}
					id='pinda'
				/>
				<label htmlFor='pinda'>pinda</label>
				<input
					type='checkbox'
					value='noten'
					name='allergen'
					checked={newAllergens.noten}
					onChange={onChangeAllergens}
					id='noten'
				/>
				<label htmlFor='noten'>noten</label>
				<input
					type='checkbox'
					value='soja'
					name='allergen'
					checked={newAllergens.soja}
					onChange={onChangeAllergens}
					id='soja'
				/>
				<label htmlFor='soja'>soja</label>
				<input
					type='checkbox'
					value='melk'
					name='allergen'
					checked={newAllergens.melk}
					onChange={onChangeAllergens}
					id='melk'
				/>
				<label htmlFor='melk'>melk</label>
				<input
					type='checkbox'
					value='schaaldieren'
					name='allergen'
					checked={newAllergens.schaaldieren}
					onChange={onChangeAllergens}
					id='schaaldieren'
				/>
				<label htmlFor='schaaldieren'>schaaldieren</label>
				<input
					type='checkbox'
					value='weekdieren'
					name='allergen'
					checked={newAllergens.weekdieren}
					onChange={onChangeAllergens}
					id='weekdieren'
				/>
				<label htmlFor='weekdieren'>weekdieren</label>
				<input
					type='checkbox'
					value='selder'
					name='allergen'
					checked={newAllergens.selder}
					onChange={onChangeAllergens}
					id='selder'
				/>
				<label htmlFor='selder'>selder</label>
				<input
					type='checkbox'
					value='mosterd'
					name='allergen'
					checked={newAllergens.mosterd}
					onChange={onChangeAllergens}
					id='mosterd'
				/>
				<label htmlFor='mosterd'>mosterd</label>
				<input
					type='checkbox'
					value='sesamzaad'
					name='allergen'
					checked={newAllergens.sesamzaad}
					onChange={onChangeAllergens}
					id='sesamzaad'
				/>
				<label htmlFor='sesamzaad'>sesamzaad</label>
				<input
					type='checkbox'
					value='sulfiet'
					name='allergen'
					checked={newAllergens.sulfiet}
					onChange={onChangeAllergens}
					id='sulfiet'
				/>
				<label htmlFor='sulfiet'>sulfiet</label>
				<input
					type='checkbox'
					value='lupine'
					name='allergen'
					checked={newAllergens.lupine}
					onChange={onChangeAllergens}
					id='lupine'
				/>
				<label htmlFor='lupine'>lupine</label>
			</div>

			<div>
				<div>
					<Image
						src={newImage}
						alt='Dish'
						width={600}
						height={400}
						objectFit='cover'
					/>
				</div>

				<input type='file' name='file' onChange={uploadFile} />
			</div>
			<button
				onClick={() => {
					handleEdit(recipeId);
					setRecipeToEdit(null);
				}}
			>
				Bevestig wijzigingen
			</button>
		</div>
	);
};

export default EditRecipe;
